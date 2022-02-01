import { InjectionToken } from '@angular/core';

export const INTERSECTION_OBSERVER_THRESHOLD_DEFAULT = 0;

export const INTERSECTION_OBSERVER_THRESHOLD = new InjectionToken<
  number | number[]
>('threshold value for Intersection Observer API', {
  providedIn: 'root',
  factory: (): number | number[] => INTERSECTION_OBSERVER_THRESHOLD_DEFAULT,
});
