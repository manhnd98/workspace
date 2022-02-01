import {NgIntersectionObserverContext} from './intersection-observer-context';
import {Directive, EmbeddedViewRef, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[ngIfInView]',
    exportAs: 'IntersectionObserver',
})
export class IntersectionObserverDirective<T = unknown> {
    private _context: NgIntersectionObserverContext<T> =
        new NgIntersectionObserverContext();

    private _thenTemplateRef: TemplateRef<NgIntersectionObserverContext<T>> | null = null;
    private _elseTemplateRef: TemplateRef<NgIntersectionObserverContext<T>> | null = null;
    private _thenViewRef: EmbeddedViewRef<NgIntersectionObserverContext<T>> | null = null;
    private _elseViewRef: EmbeddedViewRef<NgIntersectionObserverContext<T>> | null = null;

    constructor(
        private _viewContainer: ViewContainerRef,
        templateRef: TemplateRef<NgIntersectionObserverContext<T>>,
    ) {
        this._thenTemplateRef = templateRef;
    }
}
