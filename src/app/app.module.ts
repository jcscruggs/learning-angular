import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './WarningAlert/WarningAlert.component';

import { FormsModule } from '@angular/forms';
import { SuccessAlert } from './SuccessAlert/SuccessAlert.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
