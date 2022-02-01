import {InjectionToken} from '@angular/core';

// Can have values similar to the css margin propety (top, right, bottom, left)
export const INTERSECTION_OBSERVER_ROOT_MARGIN_DEFAULT = '0px 0px 0px 0px';

export const INTERSECTION_OBSERVER_ROOT_MARGIN = new InjectionToken(
    'Root Margin for Intersection Observer API',
    {
        providedIn: 'root',
        factory: () => INTERSECTION_OBSERVER_ROOT_MARGIN_DEFAULT,
    },
);
