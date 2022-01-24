import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  constructor(private http: HttpClient) {}

  findClassificationBySeason(season: number, division: string): Observable<any> {
    return this.http.get<any>(`classification/classification-by-season?season=${season}&division=${division}`);
  }
}
