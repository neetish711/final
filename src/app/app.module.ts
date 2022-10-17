import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' 
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrderplaceComponent } from './components/orderplace/orderplace.component';
import { AddingComponent } from './components/adding/adding.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUpComponent } from './components/contact-up/contact-up.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserDashboardComponent,
    FooterComponent,
    SignupComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    CartComponent,
    OrderComponent,
    OrderplaceComponent,
    AddingComponent,
    MedicineComponent,
    MyprofileComponent,
    ContactUpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,AuthGuard,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
