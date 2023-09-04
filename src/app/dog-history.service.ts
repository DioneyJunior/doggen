import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogHistoryService {
  private dogHistory: string[] = [];
  historyLoaded = false;

  addDogToHistory(imageUrl: string): void {
    if (!this.historyLoaded) {
      this.loadDogHistory();
    }

    this.dogHistory = [imageUrl].concat(this.dogHistory);

    this.saveDogHistory();
  }

  getDogHistory(): string[] {
    if (!this.historyLoaded) {
      this.loadDogHistory();
    }

    return this.dogHistory;
  }

  private loadDogHistory() {
    const history = localStorage.getItem('dogHistory');
    if (history) {
      this.dogHistory = JSON.parse(history);
    }
  }

  private saveDogHistory() {
    localStorage.setItem('dogHistory', JSON.stringify(this.dogHistory));
  }
}
