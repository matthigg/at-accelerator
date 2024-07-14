import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storage = inject(StorageService<number[]>);
  private storageKey = 'at-favorite-shows';

  constructor() { }

  toggleFavorite(showId: number): void {
    let showIds: number[] = this.storage.getStorage(this.storageKey);
    showIds.includes(showId)
      ? showIds = showIds.filter(id => id !== showId)
      : showIds.push(showId, ...showIds);
    this.storage.setStorage(this.storageKey, showIds);
  }

  getFavorites(): number[] {
    return this.storage.getStorage(this.storageKey);
  }
}
