import { Routes } from '@angular/router';
import { AddLostPersonComponent } from './add-lost-person/add-lost-person.component';
import { ModifyLostPersonComponent } from './modify-lost-person/modify-lost-person.component';
import { MenuLostPersonComponent } from './menu-lost-person/menu-lost-person.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PubpostComponent } from './pubpost/pubpost.component';
import { AddpostComponent } from './addpost/addpost.component';

export const routes: Routes = [
    {path: 'add-lost-person', component: AddLostPersonComponent },
    { path: 'modify-lost-person', component:ModifyLostPersonComponent },
 { path: 'menu-lost-person', component: MenuLostPersonComponent },
 { path: 'admin', component: AdminComponent },
 {path: 'home', component: HomeComponent},
    {path: '', component: LoginComponent},
    {path: 'app-pubpost', component: PubpostComponent},
    {path: 'app-addpost', component: AddpostComponent},
  
];
