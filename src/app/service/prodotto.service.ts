import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root',
})
export class ProdottoService {
  private prodotto!: Prodotto;
  private baseUrl: string =
    'http://127.0.0.1:8080/ecommerce/api/prodottoservice';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Content.Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  getProdotti(): Observable<any> {
    return this._http.get(this.baseUrl + '/prodotti', this.httpOptions).pipe(
      map((response) => response),
      catchError(this.errorHandler<any>('Get prodotti'))
    );
  }

  getProdottiByMarca(marca: string): Observable<any> {
    return this._http
      .post(this.baseUrl + '/prodotti/', marca, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Find by marca prodotto'))
      );
  }

  getProdottoByModello(modello: string): Observable<any> {
    return this._http
      .post(this.baseUrl + '/prodotto/', modello, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Find by modello prodotto'))
      );
  }

  createProdotto(prodotto: Prodotto): Observable<any> {
    return this._http
      .post(this.baseUrl + '/createprodotto', prodotto, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Create prodotto'))
      );
  }

  updateProdotto(prodotto: Prodotto): Observable<any> {
    return this._http
      .post(this.baseUrl + '/updateprodotto', prodotto, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Update prodotto'))
      );
  }

  deleteProdotto(id: number): Observable<any> {
    return this._http
      .delete(this.baseUrl + '/deleteprodotto/' + id, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Delete prodotto'))
      );
  }

  setter(prodotto: Prodotto) {
    this.prodotto = prodotto;
  }

  getter() {
    return this.prodotto;
  }

  private errorHandler<T>(operation = 'Operazione', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
