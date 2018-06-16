import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnlineListComponent } from './online-list/online-list.component';
import { OnlineItemComponent } from './online-list/online-item/online-item.component';
import { OfflineListComponent } from './offline-list/offline-list.component';
import { OfflineItemComponent } from './offline-list/offline-item/offline-item.component';
import { AllListComponent } from './all-list/all-list.component';
import { AllItemComponent } from './all-list/all-item/all-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineListComponent,
    OnlineItemComponent,
    OfflineListComponent,
    OfflineItemComponent,
    AllListComponent,
    AllItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
