import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeModule } from './components/home/home.module';
import { QueryHistoryLookupModule } from './components/query-history-lookup/query-history-lookup.module';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginRoutingModule,
    HomeModule,
    QueryHistoryLookupModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

    // Import Angular Material
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpClient
  ]
})
export class AppModule {
  constructor(router: Router) {
    
}

}
