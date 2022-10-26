import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendationComponent } from './components/recomendation/recomendation.component';
import { RecomendationTraitComponent } from './components/recomendation-trait/recomendation-trait.component';
import { ProfileTraitComponent } from './components/profile-trait/profile-trait.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:profileId', component: HomeComponent },
  { path: 'recomendation', component: RecomendationComponent },
  { path: 'recomendation/:idProfileReport', component: RecomendationComponent },
  { path: 'recomendation-trait', component: RecomendationTraitComponent },
  { path: 'recomendation-trait/:idProfileReport', component: RecomendationTraitComponent },
  { path: 'profile-trait', component: ProfileTraitComponent },
  { path: 'profile-trait/:idProfileReport', component: ProfileTraitComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES,  {useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

