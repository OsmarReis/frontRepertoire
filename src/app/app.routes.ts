import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Repertoires } from './pages/repertoires/repertoires';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "repertoires", component: Repertoires},
];
