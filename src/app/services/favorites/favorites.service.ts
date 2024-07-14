import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storage = inject(StorageService<string[]>);
  private storageKey = 'at-favorite-shows';

  constructor() { }

  toggleFavorite(showId: string): void {
    const currentShowIds: string[] = this.storage.getStorage(this.storageKey);
    let updatedShowIds: string[] = [];
    if (currentShowIds.includes(showId)) {
      updatedShowIds = currentShowIds.filter(id => id !== showId);
    } else {
      updatedShowIds.push(showId, ...currentShowIds);
    }
    this.storage.setStorage(this.storageKey, updatedShowIds);
  }
}
