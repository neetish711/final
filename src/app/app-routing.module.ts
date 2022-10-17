import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddingComponent } from './components/adding/adding.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactUpComponent } from './components/contact-up/contact-up.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { OrderComponent } from './components/order/order.component';
import { OrderplaceComponent } from './components/orderplace/orderplace.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './services/auth.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'contact-us',
    component:ContactUpComponent
  },
  {
  path:'myprofile',
  component:MyprofileComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AuthGuard],

    children:[

      {
        path:'',
        component:WelcomeComponent,
      },

      {
      path:'profile',
      component:ProfileComponent,
      },

      {
        path:'order',
        component:OrderComponent,
      },

      {
        path:'adding',
        component:AddingComponent
      }
    ],

  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[

      {
        path:'',
        component:MedicineComponent
      },
      {
        path:'cart',
        component:CartComponent,
        pathMatch:'full'
      },
      {
        path:'myprofile',
        component:MyprofileComponent
      }
    ]
  },

  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },

  {
    path:'orderplace',
    component:OrderplaceComponent,
    pathMatch:'full',
    canActivate:[UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
