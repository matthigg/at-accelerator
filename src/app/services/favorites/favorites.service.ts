import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storage = inject(StorageService<number[]>);
  private storageKey = 'at-favorite-shows';
  private favoritesSignal: WritableSignal<number[]> = signal(this.storage.getStorage(this.storageKey));
  favorites = this.favoritesSignal.asReadonly()

  constructor() {
    effect(() => {
      console.log('--- effect ---')
      this.storage.setStorage(this.storageKey, this.favoritesSignal())
  });
  }

  toggleFavorite(showId: number): void {
    if (this.favoritesSignal().includes(showId)) {
      // Option 1
      this.favoritesSignal.set(this.favoritesSignal().filter(x => x !== showId));
      
      // Option 2
      // this.favoritesSignal.update(x => { return this.favoritesSignal().filter(y => y !== showId) });
    } else {
      // Option 1
      const updatedFavorites: number[] = this.favoritesSignal();
      updatedFavorites.push(showId);
      this.favoritesSignal.set(updatedFavorites);
      this.storage.setStorage(this.storageKey, this.favoritesSignal());
      
      // Option 2
      // this.favoritesSignal.update(x => { x.push(showId); return x.slice(0) });
      
      // Option 3
      // this.favoritesSignal().push(showId);
      // this.storage.setStorage(this.storageKey, this.favoritesSignal());
    }
  }
}
