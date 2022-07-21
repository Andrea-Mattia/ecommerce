import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientilistComponent } from './components/clientilist/clientilist.component';
import { ClienteService } from './service/cliente.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ClientilistComponent },
];

@NgModule({
  declarations: [AppComponent, ClientilistComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ClienteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
