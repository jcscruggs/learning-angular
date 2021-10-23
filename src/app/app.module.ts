import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './WarningAlert/WarningAlert.component';
import { SuccessAlert } from './SuccessAlert/SuccessAlert.Component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
