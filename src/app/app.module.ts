import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './service/cliente.service';
import { OrdineService } from './service/ordine.service';
import { HomeComponent } from './components/home/home.component';
import { ClientilistComponent } from './components/clientilist/clientilist.component';
import { OrdinilistComponent } from './components/ordinilist/ordinilist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clienti', component: ClientilistComponent },
  { path: 'ordini', component: OrdinilistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ClientilistComponent,
    OrdinilistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ClienteService,
    OrdineService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
