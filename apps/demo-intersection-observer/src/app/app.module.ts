import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TuiRootModule,
    TuiButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPhoneModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
