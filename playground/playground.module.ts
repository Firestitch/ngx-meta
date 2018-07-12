import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsMetaModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {  ExampleComponent,
          ExamplesComponent } from './app/components';
import { Page1Component } from './app/components/example/page1';
import { Page2Component } from './app/components/example/page2';


const routes: Routes = [
  { path: '', component: ExamplesComponent, children: [
      { path: 'body/page1', component: Page1Component },
      { path: 'body/page2', component: Page2Component },
    ] },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsMetaModule.forRoot({
      defaults: [
        { property: 'og:title', content: 'The Rock' },
        { property: 'og:test', content: 'The Test' },
      ]
    }),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    Page1Component,
    Page2Component,
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
