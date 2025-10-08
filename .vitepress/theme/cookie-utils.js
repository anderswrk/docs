/**
 * Cookie utilities for cross-domain settings synchronization
 * These cookies are shared across all *.kliv.dev subdomains
 */

/**
 * Read a cookie by name
 * @param {string} name - Cookie name
 * @returns {string|null} Cookie value or null if not found
 */
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null;
}

/**
 * Set a cookie with domain-wide scope
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {number} maxAge - Max age in seconds (default: 1 year)
 */
export function setCookie(name, value, maxAge = 31536000) {
  // Check if we're on kliv.dev domain (production)
  const isProduction = window.location.hostname.includes('kliv.dev');
  
  if (isProduction) {
    // Production: use domain-wide cookie
    document.cookie = `${name}=${value}; Domain=.kliv.dev; Path=/; Secure; SameSite=Lax; max-age=${maxAge}`;
  } else {
    // Development: use regular cookie (no domain restriction)
    document.cookie = `${name}=${value}; Path=/; SameSite=Lax; max-age=${maxAge}`;
  }
}

/**
 * Language code mapping
 * Maps cookie values to VitePress locale codes
 */
export const LANG_MAP = {
  'en-US': 'en',
  'ja-JP': 'ja',
  'sv-SE': 'sv'
};

/**
 * Reverse language mapping
 * Maps VitePress locale codes to cookie values
 */
export const REVERSE_LANG_MAP = {
  'en': 'en-US',
  'ja': 'ja-JP',
  'sv': 'sv-SE'
};
