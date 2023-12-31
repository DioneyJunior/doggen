import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogHistoryService } from '../dog-history.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  imagemCachorro!: string;
  loading = true;

  constructor(
    private http: HttpClient,
    private dogHistoryService: DogHistoryService
  ) {}

  ngOnInit() {
    this.gerarDog();
  }

  gerarDog() {
    this.loading = true;

    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(
      (response: any) => {
        this.imagemCachorro = response.message;
        this.loading = false;

        this.dogHistoryService.addDogToHistory(this.imagemCachorro);

        console.log('Novo doguinho gerado:', this.imagemCachorro);
      },
      (error) => {
        this.loading = false;

        console.log('Erro ao consumir a API Dog API:', error);
      }
    );
  }
}
