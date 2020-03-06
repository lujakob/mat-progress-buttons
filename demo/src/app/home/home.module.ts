import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

export function hljsLanguages() {
    return [
      {name: 'typescript', func: typescript},
    ];
  }
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressButtonsModule.forRoot(),
    HighlightModule.forRoot({languages: hljsLanguages}),
    HomeRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
    declarations: [HomeComponent],
})
export class HomeModule { }
