import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { AuthModule } from '@auth0/auth0-angular';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { GetLeadsRepository } from 'src/app/infrastructure/api/repositories/get.leads.repository';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    BodyComponent,
    GraphsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSortModule,

    //Auth0
    AuthModule.forRoot({
      domain: 'dev-12ryn7av04h732nn.us.auth0.com',
      clientId: 'OmlD2aL8W7KRsBw0F5jN1aWD1OrIdEhx',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    NgbModule
  ],
  providers: [GetLeadsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }


