import DefaultTheme from 'vitepress/theme';
import { getCookie, setCookie, LANG_MAP, REVERSE_LANG_MAP } from './cookie-utils';

export default {
  extends: DefaultTheme,
  setup() {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;

    // ===== CLEANUP: REMOVE CONFLICTING VITEPRESS SETTINGS =====
    // VitePress stores theme preference in localStorage, which we don't want
    // We only use cross-domain cookies
    try {
      localStorage.removeItem('vitepress-theme-appearance');
      localStorage.removeItem('vitepress-locale');
    } catch (e) {
      // Ignore errors if localStorage is blocked
    }

    // ===== THEME SYNCHRONIZATION =====
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    /**
     * Apply theme based on cookie preference
     * Supports: "light", "dark", "system"
     */
    function applyTheme(preference = null) {
      const themePref = preference || getCookie('theme') || 'system';
      let effectiveTheme;

      if (themePref === 'system') {
        // Follow system/browser preference
        effectiveTheme = mediaQuery.matches ? 'dark' : 'light';
      } else {
        // Use explicit user preference
        effectiveTheme = themePref;
      }

      // Apply to document
      document.documentElement.classList.toggle('dark', effectiveTheme === 'dark');
    }

    // Initial theme application on page load
    applyTheme();

    // Listen for system preference changes (when in system mode)
    mediaQuery.addEventListener('change', () => {
      const currentPref = getCookie('theme') || 'system';
      if (currentPref === 'system') {
        applyTheme('system');
      }
    });

    // Intercept VitePress theme toggle button clicks
    // Use event delegation on the document to catch all clicks
    document.addEventListener('click', (e) => {
      // Check if clicked element is the theme toggle button or its child
      const themeButton = e.target.closest('.VPSwitchAppearance button, button[title*="theme" i], button[title*="appearance" i]');
      
      if (themeButton) {
        // Toggle will happen after this click, so we read the new state after a tick
        setTimeout(() => {
          const isDark = document.documentElement.classList.contains('dark');
          const newTheme = isDark ? 'dark' : 'light';
          
          setCookie('theme', newTheme);
          console.log('[Kliv] Theme toggled, cookie updated:', newTheme);
        }, 10);
      }
    }, true); // Use capture phase to ensure we catch it

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
          
          console.log('[Kliv] Language cookie detected, redirecting to:', newPath);
          window.location.pathname = newPath;
        }
      }
    }

    // Update language cookie when user clicks language selector
    // Use event delegation to catch all navigation clicks
    document.addEventListener('click', (e) => {
      // Check if clicked element is a link
      const link = e.target.closest('a[href]');
      
      if (link) {
        const href = link.getAttribute('href');
        
        // Check if this is a locale change (different language prefix or removal)
        const currentPath = window.location.pathname;
        let currentLocale = 'en';
        if (currentPath.startsWith('/ja/')) currentLocale = 'ja';
        if (currentPath.startsWith('/sv/')) currentLocale = 'sv';
        
        let targetLocale = 'en';
        if (href.startsWith('/ja/')) targetLocale = 'ja';
        if (href.startsWith('/sv/')) targetLocale = 'sv';
        
        // If locale is changing, update cookie
        if (currentLocale !== targetLocale) {
          const newLang = REVERSE_LANG_MAP[targetLocale] || 'en-US';
          setCookie('lang', newLang);
          console.log('[Kliv] Language changed, cookie updated:', newLang);
        }
      }
    }, true); // Use capture phase
  }
};
