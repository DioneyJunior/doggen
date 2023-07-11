import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogHistoryService {
  private dogHistory: string[] = [];

  addDogToHistory(imageUrl: string): void {
    this.dogHistory.push(imageUrl);
  }

  getDogHistory(): string[] {
    return this.dogHistory;
  }
}
