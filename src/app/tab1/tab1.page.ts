import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  imagensCachorro = ['assets/dog.jpg', 'assets/dog2.jpg'];
  imagemCachorro = this.imagensCachorro[0];

  gerarDog() {
    console.log("novo doguinho gerado")
    const indiceAtual = this.imagensCachorro.indexOf(this.imagemCachorro);
    const proximoIndice = (indiceAtual + 1) % this.imagensCachorro.length;
    this.imagemCachorro = this.imagensCachorro[proximoIndice];
  }
}
