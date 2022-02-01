import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';

declare global {
  interface Window {
    IntersectionObserver: IntersectionObserver;
  }
}

export const INTERSECTION_OBSERVER_BROWSER_SUPPORT = new InjectionToken(
  'Is Intersection Observer API support for current browser',
  {
    providedIn: 'root',
    factory: (): boolean => !!inject(WINDOW).IntersectionObserver,
  }
);
