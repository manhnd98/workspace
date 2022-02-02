import {INTERSECTION_OBSERVER_ROOT_MARGIN} from './../token/root-margin';
import {INTERSECTION_OBSERVER_BROWSER_SUPPORT} from './../token/browser-support';
import {NgIntersectionObserverContext} from './intersection-observer-context';
import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    EmbeddedViewRef,
    Inject,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {assertTemplate} from '../utils/assert-template';
import {INTERSECTION_OBSERVER_THRESHOLD} from '../token/threshold';
import {IntersectionObserverConfig} from '../types';

@Directive({
    selector: '[ngIfInViewElse]',
    exportAs: 'IntersectionObserver',
})
export class IntersectionObserverDirective<T = unknown> {
    private context: NgIntersectionObserverContext<T> =
        new NgIntersectionObserverContext();

    private thenTemplateRef: TemplateRef<NgIntersectionObserverContext<T>> | null = null;
    private elseTemplateRef: TemplateRef<NgIntersectionObserverContext<T>> | null = null;
    private thenViewRef: EmbeddedViewRef<NgIntersectionObserverContext<T>> | null = null;
    private elseViewRef: EmbeddedViewRef<NgIntersectionObserverContext<T>> | null = null;

    private intersectionObserverConfig: IntersectionObserverConfig;

    private observer: IntersectionObserver;
    constructor(
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef,
        @Inject(TemplateRef) templateRef: TemplateRef<NgIntersectionObserverContext<T>>,
        @Inject(INTERSECTION_OBSERVER_BROWSER_SUPPORT) private support: boolean,
        @Inject(INTERSECTION_OBSERVER_THRESHOLD) private threshold: number | number[],
        @Inject(INTERSECTION_OBSERVER_ROOT_MARGIN) private rootMargin: string,
        @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private element: ElementRef,
    ) {
        if (!support) {
            throw new Error('Intersection Observer is not support in your browser');
        }
        this.thenTemplateRef = templateRef;
        this.intersectionObserverConfig = {
            root: null,
            threshold,
            rootMargin,
        };

        this.observer = new IntersectionObserver(
            this.observerCallback.bind(this),
            this.intersectionObserverConfig,
        );
    }

    @Input()
    set ngIfInViewElse(templateRef: TemplateRef<NgIntersectionObserverContext<T>>) {
        assertTemplate('ngIfInViewElse', templateRef);
        this.elseTemplateRef = templateRef;
        this.elseViewRef = null;
        this.renderElseTemplate();
    }

    /**
     * If DOM is inside viewport, render real DOM inside structural directive
     */
    private renderThenTemplate() {
        this.elseViewRef = null;
        this.viewContainer.clear();

        if (this.thenTemplateRef) {
            this.viewContainer.createEmbeddedView(this.thenTemplateRef);
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * If DOM is not inside viewport, render template that user passed by input
     */
    private renderElseTemplate() {
        if (this.elseTemplateRef) {
            this.elseViewRef = this.viewContainer.createEmbeddedView(
                this.elseTemplateRef,
            );

            const parentElement = this.viewContainer.element.nativeElement
                .parentElement as Element;
            const firstChild = parentElement.firstElementChild;
            if (firstChild) {
                this.observer.observe(firstChild);
            }
        }
    }

    private observerCallback(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]; // watch only 1 element
        if (entry.isIntersecting) {
            this.observer.disconnect();
            this.renderThenTemplate();
        }
    }
}
