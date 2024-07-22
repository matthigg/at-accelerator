import { Directive, HostBinding, HostListener, inject, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Directive({
  selector: '[appFavoritesToggleImage]',
  standalone: true
})
export class FavoritesToggleImageDirective {
  protected favoritesService = inject(FavoritesService);

  @Input() showId!: number;
  
  @HostBinding('class.highlight') 
  get isFavorite() { 
    return this.favoritesService.favorites().includes(this.showId)
  }

  @HostListener('click') onClick(event: Event) : void {
    if (this.showId) this.favoritesService.toggleFavorite(this.showId)
  }

  
  constructor() { }

}
