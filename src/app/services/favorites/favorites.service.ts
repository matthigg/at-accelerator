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
    const currentShowIds: number[] = this.storage.getStorage(this.storageKey);
    let updatedShowIds: number[] = [];
    if (currentShowIds.includes(showId)) {
      updatedShowIds = currentShowIds.filter(id => id !== showId);
    } else {
      updatedShowIds.push(showId, ...currentShowIds);
    }
    this.storage.setStorage(this.storageKey, updatedShowIds);
  }

  getFavorites(): number[] {
    return this.storage.getStorage(this.storageKey);
  }
}
