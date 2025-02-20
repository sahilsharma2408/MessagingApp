import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import {AuthguardService} from './services/authguard.service'
import { AdminComponent } from 'app/component/admin/admin.component';
import { UploadComponent } from './component/upload/upload.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'admin',
    component:AdminComponent,
    canActivate:[AuthguardService]
  },

  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'profile',
    component:ProfileComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'upload/:name',
    component:UploadComponent,
    canActivate:[AuthguardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
