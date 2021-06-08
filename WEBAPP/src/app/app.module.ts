import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './component/topnav/topnav.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
