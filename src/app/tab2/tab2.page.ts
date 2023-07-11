import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { DogHistoryService } from '../dog-history.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  selectedBreed: string = '';
  selectedBreedImage: string = '';
  breeds: string[] = [];

  loading = true;

  constructor(
    private http: HttpClient,
    private dogHistoryService: DogHistoryService
  ) {}

  async ngOnInit() {
    await this.fetchBreeds();

    if (this.breeds.length > 0) {
      this.selectedBreed =
        this.breeds[this.getRandomArbitrary(0, this.breeds.length)];
      this.fetchBreedImage();
    }
  }

  async fetchBreeds() {
    const apiUrl = 'https://dog.ceo/api/breeds/list/all';

    const response = await firstValueFrom(this.http.get<any>(apiUrl));

    this.breeds = Object.keys(response.message);
    console.log('Raças disponíveis:', this.breeds);
  }

  fetchBreedImage() {
    this.loading = true;

    const apiUrl = `https://dog.ceo/api/breed/${this.selectedBreed}/images/random`;
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.selectedBreedImage = response.message;
        this.loading = false;
        console.log('Imagem do cachorro:', this.selectedBreedImage);
        this.dogHistoryService.addDogToHistory(this.selectedBreedImage);
      },
      (error) => {
        this.loading = false;
        console.log('Erro ao obter a imagem do cachorro:', error);
      }
    );
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
