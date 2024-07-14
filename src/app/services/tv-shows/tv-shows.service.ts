import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShowDetails } from 'src/app/shared/interfaces/tv-show-details';
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

  getTvShowsSearchData(search: string): Observable<TvShows> {
    return this.http.get<TvShows>(
      `https://www.episodate.com/api/search?q=${search}&page=1`
    )
  }

  getTvShowDetailsData(showId: number): Observable<TvShowDetails> {
    return this.http.get<TvShowDetails>(
      `https://www.episodate.com/api/show-details?q=${showId}`
    )
  }
}
