import {TemplateRef, ɵstringify as stringify} from '@angular/core';

/**
 * If templateRef is null, throw Error
 * @param property
 * @param templateRef
 */
export const assertTemplate = (
    property: string,
    templateRef: TemplateRef<unknown | null>,
): void => {
    const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
    if (!isTemplateRefOrNull) {
        throw new Error(
            `${property} must be a TemplateRef, but received '${stringify(
                templateRef,
            )}'.`,
        );
    }
};
