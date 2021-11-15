import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './components/root/root.component';
import { DateTimeComponent } from './components/date-time/date-time.component';

@NgModule({
  declarations: [RootComponent, DateTimeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
