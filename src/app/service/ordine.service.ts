import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Ordine } from '../models/ordine';

@Injectable({
  providedIn: 'root',
})
export class OrdineService {
  private ordine!: Ordine;
  private baseUrl: string = 'http://127.0.0.1:8080/ecommerce/api/ordineservice';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Content.Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  getOrdini(): Observable<any> {
    return this._http.get(this.baseUrl + '/ordini', this.httpOptions).pipe(
      map((response) => response),
      catchError(this.errorHandler<any>('Get ordini'))
    );
  }

  createOrdine(ordine: Ordine): Observable<any> {
    return this._http
      .post(this.baseUrl + '/createordine', ordine, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Create ordine'))
      );
  }

  deleteOrdine(id: number): Observable<any> {
    return this._http
      .delete(this.baseUrl + '/deleteordine/' + id, this.httpOptions)
      .pipe(
        map((response) => response),
        catchError(this.errorHandler<any>('Delete ordine'))
      );
  }

  setter(ordine: Ordine) {
    this.ordine = ordine;
  }

  getter() {
    return this.ordine;
  }

  private errorHandler<T>(operation = 'Operazione', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
