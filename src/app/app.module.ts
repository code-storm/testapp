import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { routing } from './app.routing';
import { PopupComponent } from './popup/popup/popup.component';
import { PopupService } from './popup/popup.service';
import { ClickOutsideDirective } from './utils/click-outside.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    PopupComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  entryComponents: [PopupComponent],
  providers: [TableService, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
