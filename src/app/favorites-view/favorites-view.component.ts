import { Component, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites/favorites.service';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {
  protected favoritesService = inject(FavoritesService);

  ngOnInit(): void {
    let x = this.favoritesService.favorites()

    console.log('--- x:', x)
  }

}
