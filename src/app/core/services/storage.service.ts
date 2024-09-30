import { inject, Injectable } from '@angular/core';
import { STORAGE } from '../tokens/storage.token';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage = inject(STORAGE);

  setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      this.storage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting item in storage', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const serializedValue = this.storage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error('Error getting item from storage', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from storage', error);
    }
  }

  clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('Error clearing storage', error);
    }
  }

  exists(key: string): boolean {
    return this.storage.getItem(key) !== null;
  }
}
