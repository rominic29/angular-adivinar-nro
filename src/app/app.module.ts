import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Componente
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GuessUsComponent } from './components/guess-us/guess-us.component';
import { GuessPcComponent } from './components/guess-pc/guess-pc.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuessUsComponent,
    GuessPcComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
