import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShows } from '../shared/interfaces/tv-shows';
import { Observable } from 'rxjs';
import { FavoritesService } from '../services/favorites/favorites.service';
import { TvShowsService } from '../services/tv-shows/tv-shows.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  @Input() tvShowsData$?: Observable<TvShows> | null;

  protected favoritesService = inject(FavoritesService);
  // private tvShowService = inject(TvShowsService);

  // handleShowDetails(id: number): void {
  //   this.tvShowService.getTvShowDetailsData(id);
  // }
  
  handleToggleFavorites(id: number): void {
    this.favoritesService.toggleFavorite(id);
  }

}
