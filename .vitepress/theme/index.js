import DefaultTheme from 'vitepress/theme';
import { useRouter, useRoute } from 'vitepress';
import { watch, onMounted } from 'vue';
import { getCookie, setCookie, LANG_MAP, REVERSE_LANG_MAP } from './cookie-utils';

export default {
  extends: DefaultTheme,
  setup() {
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;

    const router = useRouter();
    const route = useRoute();

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
    
    // Helper to extract locale from path
    function getLocaleFromPath(path) {
      if (path.startsWith('/ja/') || path === '/ja') return 'ja';
      if (path.startsWith('/sv/') || path === '/sv') return 'sv';
      return 'en';
    }

    // On mount, check if we need to redirect based on cookie
    onMounted(() => {
      const savedLang = getCookie('lang');
      
      if (savedLang) {
        const vpLocale = LANG_MAP[savedLang];
        
        if (vpLocale) {
          const currentPath = window.location.pathname;
          const currentLocale = getLocaleFromPath(currentPath);
          
          if (currentLocale !== vpLocale) {
            let newPath;
            
            if (vpLocale === 'en') {
              newPath = currentPath.replace(/^\/(ja|sv)(\/|$)/, '/');
            } else {
              if (currentPath.startsWith('/ja/') || currentPath.startsWith('/sv/')) {
                newPath = currentPath.replace(/^\/(ja|sv)/, `/${vpLocale}`);
              } else {
                newPath = `/${vpLocale}${currentPath === '/' ? '' : currentPath}`;
              }
            }
            
            console.log('[Kliv] Language cookie detected, redirecting:', savedLang, '→', newPath);
            router.go(newPath);
          }
        }
      }
    });

    // Watch for route changes to update language cookie
    watch(
      () => route.path,
      (newPath, oldPath) => {
        if (!oldPath || !newPath) return;
        
        const oldLocale = getLocaleFromPath(oldPath);
        const newLocale = getLocaleFromPath(newPath);
        
        if (oldLocale !== newLocale) {
          const newLang = REVERSE_LANG_MAP[newLocale] || 'en-US';
          setCookie('lang', newLang);
          console.log('[Kliv] Language changed:', oldLocale, '→', newLocale, '(cookie:', newLang + ')');
        }
      }
    );
  }
};
