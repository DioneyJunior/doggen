import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  selectedBreed: string = '';
  selectedBreedImage: string = '';
  breeds: string[] = [];

  constructor(private http: HttpClient) {
    this.fetchBreeds();
  }

  fetchBreeds() {
    const apiUrl = 'https://dog.ceo/api/breeds/list/all';
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.breeds = Object.keys(response.message);
        console.log('Raças disponíveis:', this.breeds);
        if (this.breeds.length > 0) {
          this.selectedBreed = this.breeds[0];
          this.fetchBreedImage();
        }
      },
      (error) => {
        console.log('Erro ao obter as raças:', error);
      }
    );
  }

  fetchBreedImage() {
    const apiUrl = `https://dog.ceo/api/breed/${this.selectedBreed}/images/random`;
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.selectedBreedImage = response.message;
        console.log('Imagem do cachorro:', this.selectedBreedImage);
      },
      (error) => {
        console.log('Erro ao obter a imagem do cachorro:', error);
      }
    );
  }

  gerarDog() {
    this.fetchBreedImage();
  }
}
