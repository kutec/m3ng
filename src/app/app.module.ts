import { LoaderService } from './services/loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPInterceptor } from './http/http.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { ApiService } from './services/api.service';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { WeDoComponent } from './we-do/we-do.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { WeAreComponent } from './we-are/we-are.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    WeDoComponent,
    LoaderComponent,
    FooterComponent,
    WeAreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    ApiService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
