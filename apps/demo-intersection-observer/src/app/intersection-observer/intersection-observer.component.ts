import {INTERSECTION_OBSERVER_ROOT_MARGIN} from './../../../../../libs/web/intersection-observer/src/lib/token/root-margin';
import {ChangeDetectionStrategy, Component} from '@angular/core';
@Component({
    templateUrl: './intersection-observer.component.html',
    styleUrls: ['./intersection-observer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: INTERSECTION_OBSERVER_ROOT_MARGIN,
            useValue: '100px 0px 100px 0px',
        },
    ],
})
export class AppInterSectionObserverComponent {
    isRender = false;
}
