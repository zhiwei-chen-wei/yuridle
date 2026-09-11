/**
 * Cookie management utilities for Yuridle.
 * Handles reading, writing, and deleting browser cookies with URI encoding
 * to safely store JSON objects and Unicode characters.
 */

export function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof document === 'undefined') return;
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    const encoded = encodeURIComponent(value);
    document.cookie = `${name}=${encoded};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  } catch (e) {
    console.warn('Failed to set cookie:', name, e);
  }
}

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  try {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
  } catch (e) {
    console.warn('Failed to get cookie:', name, e);
  }
  return null;
}

export function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  try {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
  } catch (e) {
    console.warn('Failed to delete cookie:', name, e);
  }
}
