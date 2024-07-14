import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { TvShowDetails } from 'src/app/shared/interfaces/tv-show-details';
import { forkJoin, Observable, take } from 'rxjs';
import { TvShowsService } from '../tv-shows/tv-shows.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  // Local storage
  private storage = inject(StorageService<number[]>);
  private storageKey = 'at-favorite-shows';
  
  // Favorites icon
  private favoritesSignal: WritableSignal<number[]> = signal(this.storage.getStorage(this.storageKey));
  favorites = this.favoritesSignal.asReadonly()

  // Favorites card component data
  private tvShowsService = inject(TvShowsService);
  private favoritesArray: Observable<TvShowDetails>[] = [];
  private favoritesDataSignal: WritableSignal<TvShowDetails[] | null> = signal(null);
  favoritesData = this.favoritesDataSignal.asReadonly();

  constructor() {
    effect(() => {
      this.storage.setStorage(this.storageKey, this.favoritesSignal())
    });

    effect(() => {
      this.favoritesArray = [];
      this.favorites().forEach((showId: number) => {
        this.favoritesArray.push(this.tvShowsService.getTvShowDetailsData(showId));
      });
      forkJoin(this.favoritesArray).pipe(take(1)).subscribe(response => {
        this.favoritesDataSignal.set(response);
      })
    });
  }

  toggleFavorite(showId: number): void {
    this.favoritesDataSignal.set(null);
    
    if (this.favoritesSignal().includes(showId)) {
      // Option 1
      // this.favoritesSignal.set(this.favoritesSignal().filter(x => x !== showId));
      // this.storage.setStorage(this.storageKey, this.favoritesSignal());
      
      // Option 2
      this.favoritesSignal.update(x => { return this.favoritesSignal().filter(y => y !== showId) });
    } else {
      // Option 1
      // const updatedFavorites: number[] = this.favoritesSignal();
      // updatedFavorites.push(showId);
      // this.favoritesSignal.set(updatedFavorites);
      // this.storage.setStorage(this.storageKey, this.favoritesSignal());
      
      // Option 2
      this.favoritesSignal.update(x => { x.push(showId); return x.slice(0) });
      
      // Option 3
      // this.favoritesSignal().push(showId);
      // this.storage.setStorage(this.storageKey, this.favoritesSignal());
    }
  }
}
