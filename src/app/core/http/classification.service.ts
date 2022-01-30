import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classification } from 'src/app/shared/models/classification.model';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  constructor(private http: HttpClient) {}

  findClassificationBySeason(season: number, division: string): Observable<Classification[]> {
    return this.http.get<Classification[]>(`classification/classification-by-season?season=${season}&division=${division}`);
  }
}
