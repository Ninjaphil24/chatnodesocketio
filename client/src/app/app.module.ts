import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './containers/chat/chat.component';
import { UsernameComponent } from './components/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
