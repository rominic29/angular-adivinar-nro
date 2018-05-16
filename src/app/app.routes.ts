import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuessPcComponent } from './components/guess-pc/guess-pc.component';
import { GuessUsComponent } from './components/guess-us/guess-us.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guessPc', component: GuessPcComponent },
  { path: 'guessUs', component: GuessUsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
