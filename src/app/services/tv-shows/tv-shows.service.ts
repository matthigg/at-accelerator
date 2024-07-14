import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
    ).pipe(
      tap(response => {
        const episodesCount = response.tvShow.episodes.length;
        const seasonsCountSet = new Set();
        response.tvShow.episodes.forEach(episode => {
          seasonsCountSet.add(episode.season)
        });
        const seasonsCount = seasonsCountSet.size;
        response.episodesCount = episodesCount;
        response.seasonsCount = seasonsCount;

        console.log('--- response.seasonsCount:', response.seasonsCount)

        const airDate = response.tvShow.episodes.at(-1)?.air_date
        if (airDate && new Date(airDate).getTime() > Date.now()) {
          response.nextEpisode = airDate;
        }
      }),
    );
  }
}
