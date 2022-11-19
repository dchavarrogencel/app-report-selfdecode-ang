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

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogDetailRecomendationComponent } from './components/shared/dialog-detail-recomendation/dialog-detail-recomendation.component';
import { DialogCondicionesComponent } from './components/shared/dialog-condiciones/dialog-condiciones.component';
import { DialogDescargoResponsabilidadComponent } from './components/shared/dialog-descargo-responsabilidad/dialog-descargo-responsabilidad.component';
import { DialogRasgoComponent } from './components/shared/dialog-rasgo/dialog-rasgo.component';
import { DialogOpcionesRetroalimentacionComponent } from './components/shared/dialog-opciones-retroalimentacion/dialog-opciones-retroalimentacion.component';
import { DialogEtiquetaCalibreComponent } from './components/shared/dialog-etiqueta-calibre/dialog-etiqueta-calibre.component';
import { DialogDetalleRecomendacionTraitComponent } from './components/shared/dialog-detalle-recomendacion-trait/dialog-detalle-recomendacion-trait.component';
import { DialogDetalleProfileTraitComponent } from './components/shared/dialog-detalle-profile-trait/dialog-detalle-profile-trait.component';
import { ScriptService } from './components/shared/carousel/ScriptService ';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { VisorDocumentoComponent } from './components/shared/visor-documento/visor-documento.component';

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
    NoImagePipe,
    DialogDetailRecomendationComponent,
    DialogCondicionesComponent,
    DialogDescargoResponsabilidadComponent,
    DialogRasgoComponent,
    DialogOpcionesRetroalimentacionComponent,
    DialogEtiquetaCalibreComponent,
    DialogDetalleRecomendacionTraitComponent,
    DialogDetalleProfileTraitComponent,
    CarouselComponent,
    VisorDocumentoComponent
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
    }),
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
    
  ],
  providers: [CookieService, ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
