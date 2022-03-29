import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const Routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'menu', component: MenuComponent }
];

export { Routes };
