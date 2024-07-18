import { Directive, inject } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Directive({
  selector: '[appFavoritesToggleImage]',
  standalone: true
})
export class FavoritesToggleImageDirective {

  protected favoritesService = inject(FavoritesService);
  
  constructor() { }
  
  handleToggleFavorites(id: number): void {
    this.favoritesService.toggleFavorite(id);
  }

}
