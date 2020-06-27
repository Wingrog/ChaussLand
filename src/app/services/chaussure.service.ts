import { Injectable } from '@angular/core';
import { Chaussure } from '../models/chaussure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ChaussureService {


  // CONNEXION SERVEUR BACK END

  constructor(private http: HttpClient) {
  }

  apiURL = 'http://localhost:3000/chaussure';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };

  // MESSAGE ERREUR SI PAS DE CONNEXION


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  // MES FONCTIONS

  //RETOURNE TOUTES LES CHAUSSURES

  getChaussures(): Observable<Chaussure[]> {
    return this.http.get<Chaussure[]>(this.apiURL, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  // RETOURNE LA CHAUSSURE SELON SON ID

  getOneChaussure(id: number): Observable<Chaussure> {
    return this.http.get<Chaussure>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // AJOUTE DUNE CHAUSSURE

  addChaussure(planet: Chaussure): Observable<Chaussure> {
    return this.http.post<Chaussure>(this.apiURL, planet, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  // MODIFIER UNE CHAUSSURE

  editChaussure(planet: Chaussure): Observable<Chaussure> {
    return this.http.put<Chaussure>(this.apiURL + '/' + planet.id, planet, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  // SUPPRIMER UNE CHAUSSURE

  deleteChaussure(id: number): Observable<Chaussure> {
    return this.http.delete<Chaussure>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }

}
