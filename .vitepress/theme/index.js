import DefaultTheme from 'vitepress/theme';
import { getCookie, setCookie, LANG_MAP, REVERSE_LANG_MAP } from './cookie-utils';

export default {
  extends: DefaultTheme,
  setup() {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;

    // ===== THEME SYNCHRONIZATION =====
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    /**
     * Apply theme based on cookie preference
     * Supports: "light", "dark", "system"
     */
    function applyTheme() {
      const preference = getCookie('theme') || 'system';
      let effectiveTheme;

      if (preference === 'system') {
        // Follow system/browser preference
        effectiveTheme = mediaQuery.matches ? 'dark' : 'light';
      } else {
        // Use explicit user preference
        effectiveTheme = preference;
      }

      // Apply to document
      document.documentElement.classList.toggle('dark', effectiveTheme === 'dark');
      
      // Sync with VitePress's internal localStorage
      localStorage.setItem('vitepress-theme-appearance', effectiveTheme);
    }

    // Initial theme application on page load
    applyTheme();

    // Listen for system preference changes (when in system mode)
    mediaQuery.addEventListener('change', () => {
      if (getCookie('theme') === 'system') {
        applyTheme();
      }
    });

    // Intercept VitePress theme toggle to update cookie
    // VitePress modifies the 'dark' class on documentElement when toggling
    setTimeout(() => {
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('dark');
        const currentCookie = getCookie('theme');
        const newTheme = isDark ? 'dark' : 'light';

        // Only update cookie if user manually toggled (not in system mode)
        // and the theme actually changed
        if (currentCookie !== newTheme && currentCookie !== 'system') {
          setCookie('theme', newTheme);
          console.log('[VitePress] Theme changed via toggle, updating cookie:', newTheme);
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    }, 100);

    // ===== LANGUAGE SYNCHRONIZATION =====
    const savedLang = getCookie('lang');
    
    if (savedLang) {
      // Map cookie language to VitePress locale
      const vpLocale = LANG_MAP[savedLang];
      
      if (vpLocale) {
        // Get current path
        const currentPath = window.location.pathname;
        
        // Check if we're already on the correct locale
        const isOnCorrectLocale = 
          (vpLocale === 'en' && !currentPath.startsWith('/ja/') && !currentPath.startsWith('/sv/')) ||
          currentPath.startsWith(`/${vpLocale}/`);
        
        if (!isOnCorrectLocale) {
          // Need to redirect to correct locale
          let newPath;
          
          if (vpLocale === 'en') {
            // Remove locale prefix for English (root locale)
            newPath = currentPath.replace(/^\/(ja|sv)\//, '/');
          } else {
            // Add or replace locale prefix
            if (currentPath.startsWith('/ja/') || currentPath.startsWith('/sv/')) {
              newPath = currentPath.replace(/^\/(ja|sv)\//, `/${vpLocale}/`);
            } else {
              newPath = `/${vpLocale}${currentPath}`;
            }
          }
          
          console.log('[VitePress] Language cookie detected, redirecting to:', newPath);
          window.location.pathname = newPath;
        }
      }
    }

    // Update language cookie when user manually changes language
    // VitePress doesn't provide a clean event for this, so we watch the locale selector
    setTimeout(() => {
      const localeLinks = document.querySelectorAll('.VPNavBarMenuGroup a[href^="/ja/"], .VPNavBarMenuGroup a[href^="/sv/"], .VPLocalNav a');
      
      localeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = e.currentTarget.getAttribute('href');
          
          // Determine language from href
          let newLang;
          if (href.startsWith('/ja/')) {
            newLang = 'ja-JP';
          } else if (href.startsWith('/sv/')) {
            newLang = 'sv-SE';
          } else {
            newLang = 'en-US';
          }
          
          console.log('[VitePress] Language manually changed, updating cookie:', newLang);
          setCookie('lang', newLang);
        });
      });
    }, 500);
  }
};
