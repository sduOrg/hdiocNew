import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './page/index/heroes/heroes.component';
import { DragDirective } from './drag.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LawModule } from './page/law/law.module';
import { NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DragDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
