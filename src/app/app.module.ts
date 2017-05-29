import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { NestedParentComponent } from './nested-component/parent.component';
import { NestedChildComponent } from './nested-component/child.component';
import { NestedGrandsonComponent } from './nested-component/grandson.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,

    NestedParentComponent,
    NestedChildComponent,
    NestedGrandsonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HelloComponent,

    NestedParentComponent
  ]
})
export class AppModule { }
