import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShows } from 'src/app/shared/interfaces/tv-shows';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  private http = inject(HttpClient);

  constructor() { }

  getTvShowsData(): Observable<TvShows> {
    return this.http.get<TvShows>(
      'https://www.episodate.com/api/search'
    )
  }

  getTvShowsSearchData(search: string): Observable<any> {
    return this.http.get<any>(
      `https://www.episodate.com/api/search?q=${search}&page=1`
    )
  }
}
