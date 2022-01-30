import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/shared/models/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) {}

  findMatches(season: number, division: string, round: number): Observable<Match[]> {
    return this.http.get<Match[]>(`match/matches-by-season-and-round?season=${season}&division=${division}&round=${round}`);
  }
}
