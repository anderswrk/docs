import DefaultTheme from 'vitepress/theme';
import { getCookie, setCookie, LANG_MAP, REVERSE_LANG_MAP } from './cookie-utils';

export default {
  extends: DefaultTheme,
  setup() {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;

    // ===== PREVENT VITEPRESS FROM MANAGING THEME =====
    // Override VitePress's theme management by intercepting localStorage
    // This prevents flicker from VitePress trying to apply its own theme
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) {
      // Block VitePress from writing theme preference
      if (key === 'vitepress-theme-appearance') {
        return;
      }
      originalSetItem.call(this, key, value);
    };

    // Clean up any existing VitePress settings
    try {
      localStorage.removeItem('vitepress-theme-appearance');
      localStorage.removeItem('vitepress-locale');
    } catch (e) {
      // Ignore errors if localStorage is blocked
    }

    // ===== THEME SYNCHRONIZATION =====
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let isApplyingTheme = false; // Prevent re-entrance

    /**
     * Apply theme based on cookie preference
     * Supports: "light", "dark", "system"
     */
    function applyTheme(preference = null) {
      if (isApplyingTheme) return; // Prevent multiple simultaneous calls
      isApplyingTheme = true;

      const themePref = preference || getCookie('theme') || 'system';
      let effectiveTheme;

      if (themePref === 'system') {
        effectiveTheme = mediaQuery.matches ? 'dark' : 'light';
      } else {
        effectiveTheme = themePref;
      }

      // Apply to document (add or remove 'dark' class)
      if (effectiveTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      isApplyingTheme = false;
    }

    // Apply theme immediately (before VitePress initializes)
    applyTheme();

    // Listen for system preference changes
    mediaQuery.addEventListener('change', () => {
      const currentPref = getCookie('theme') || 'system';
      if (currentPref === 'system') {
        applyTheme('system');
      }
    });

    // Intercept theme toggle button clicks
    let lastToggleTime = 0;
    document.addEventListener('click', (e) => {
      const themeButton = e.target.closest('.VPSwitchAppearance, .VPSwitch');
      
      if (themeButton) {
        const now = Date.now();
        if (now - lastToggleTime < 100) return; // Debounce rapid clicks
        lastToggleTime = now;
        
        // Prevent VitePress's default behavior
        e.preventDefault();
        e.stopPropagation();
        
        // Manually toggle theme
        const currentTheme = getCookie('theme') || 'system';
        const isDark = document.documentElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        
        setCookie('theme', newTheme);
        applyTheme(newTheme);
        
        console.log('[Kliv] Theme toggled:', newTheme);
      }
    }, true);

    // ===== LANGUAGE SYNCHRONIZATION =====
    const savedLang = getCookie('lang');
    
    if (savedLang) {
      const vpLocale = LANG_MAP[savedLang];
      
      if (vpLocale) {
        const currentPath = window.location.pathname;
        
        const isOnCorrectLocale = 
          (vpLocale === 'en' && !currentPath.startsWith('/ja/') && !currentPath.startsWith('/sv/')) ||
          currentPath.startsWith(`/${vpLocale}/`);
        
        if (!isOnCorrectLocale) {
          let newPath;
          
          if (vpLocale === 'en') {
            newPath = currentPath.replace(/^\/(ja|sv)\//, '/');
          } else {
            if (currentPath.startsWith('/ja/') || currentPath.startsWith('/sv/')) {
              newPath = currentPath.replace(/^\/(ja|sv)\//, `/${vpLocale}/`);
            } else {
              newPath = `/${vpLocale}${currentPath}`;
            }
          }
          
          console.log('[Kliv] Language cookie detected, redirecting:', savedLang, '→', newPath);
          window.location.pathname = newPath;
        }
      }
    }

    // Update language cookie when clicking language links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      
      if (link) {
        const href = link.getAttribute('href');
        
        // Only process internal links that change locale
        if (!href || href.startsWith('http')) return;
        
        const currentPath = window.location.pathname;
        let currentLocale = 'en';
        if (currentPath.startsWith('/ja/')) currentLocale = 'ja';
        if (currentPath.startsWith('/sv/')) currentLocale = 'sv';
        
        let targetLocale = 'en';
        if (href.startsWith('/ja/')) targetLocale = 'ja';
        else if (href.startsWith('/sv/')) targetLocale = 'sv';
        
        if (currentLocale !== targetLocale) {
          const newLang = REVERSE_LANG_MAP[targetLocale] || 'en-US';
          setCookie('lang', newLang);
          console.log('[Kliv] Language switching:', currentLocale, '→', targetLocale, '(cookie:', newLang + ')');
        }
      }
    }, true);
  }
};
