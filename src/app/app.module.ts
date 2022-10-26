import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/shared/cards/cards.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecomendationTraitComponent } from './components/recomendation-trait/recomendation-trait.component';
import { ProfileTraitComponent } from './components/profile-trait/profile-trait.component';
import { RecomendationComponent } from './components/recomendation/recomendation.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationComponent } from './translation/translation.component';

import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { OrderModule } from 'ngx-order-pipe';
import { NoImagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    RecomendationComponent,
    RecomendationTraitComponent,
    ProfileTraitComponent,
    TranslationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
