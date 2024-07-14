import { Component, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites/favorites.service';
import { forkJoin, Observable, zip } from 'rxjs';
import { TvShowsService } from '../services/tv-shows/tv-shows.service';
import { TvShowDetails } from '../shared/interfaces/tv-show-details';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {
  private favoritesService = inject(FavoritesService);
  private tvShowsService = inject(TvShowsService);

  private favoritesArray: Observable<TvShowDetails>[] = [];
  protected favoritesForkJoin$?: Observable<TvShowDetails[]>;

  ngOnInit(): void {

    this.favoritesService.favorites().forEach((showId: number) => {
      this.favoritesArray.push(this.tvShowsService.getTvShowDetailsData(showId));
    });

    this.favoritesForkJoin$ = forkJoin(this.favoritesArray);

    // this.favoritesForkJoin$.subscribe(response => {
    //   console.log('--- response:', response)
    // })
  }

}
