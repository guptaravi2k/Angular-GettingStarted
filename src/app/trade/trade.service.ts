import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import {Trade} from "./Trade";

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';
  //private marketTrend = 'http://localhost:8080/market-trend?sector=';
  private marketTrend = 'https://anmol-v.herokuapp.com/market-trend?sector=';

  constructor(private http: HttpClient) { }

  getMarketTrend(sector: string): Observable<Trade> {
    return this.http.get<Trade>(this.marketTrend + sector);
      /*.pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );*/
  }

  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  /*getProduct(id: number): Observable<Trade | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Trade[]) => products.find(p => p.productId === id))
      );
  }*/

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
