import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  imagensCachorro = ['assets/dog.jpg', 'assets/dog2.jpg'];
  imagemCachorro = this.imagensCachorro[0];

  constructor(private http: HttpClient) { }

  gerarDog() {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(
      (response: any) => {
        this.imagemCachorro = response.message;
        console.log("Novo doguinho gerado:", this.imagemCachorro);
      },
      (error) => {
        console.log('Erro ao consumir a API Dog API:', error);
      }
    );
  }
}
