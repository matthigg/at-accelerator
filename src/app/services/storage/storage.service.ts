import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T> {

  constructor() { }

  getStorage(key: string): T {
    return JSON.parse(localStorage.getItem(key) ?? '[]') as T;
  }

  setStorage(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
