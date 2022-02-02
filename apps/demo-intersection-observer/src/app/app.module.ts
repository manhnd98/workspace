import {AppInterSectionObserverComponent} from './intersection-observer/intersection-observer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiRootModule} from '@taiga-ui/core';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {TuiInputPhoneModule} from '@taiga-ui/kit';
import {InputComponent} from './input/input.component';
import {IntersectionObserverModule} from '@web/intersection-observer';
import {AppWoComponent} from './wo/wo.component';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        AppInterSectionObserverComponent,
        AppWoComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        TuiRootModule,
        TuiButtonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputPhoneModule,
        IntersectionObserverModule,
        RouterModule.forRoot(
            [
                {
                    path: 'io',
                    component: AppInterSectionObserverComponent,
                },
                {
                    path: 'wo',
                    component: AppWoComponent,
                },
            ],
            {initialNavigation: 'enabledBlocking'},
        ),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
