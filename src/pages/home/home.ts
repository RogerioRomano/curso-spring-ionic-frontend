import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * @IonicPage() permite referenciar a classe na forma de string, 
 * facilitando a implementação do lazyloading nas páginas do projeto.
 * @Component() indica que a classe é um Controller.
 */

@IonicPage() 
@Component({
  selector: 'page-home', // Selector
  templateUrl: 'home.html' // Arquivo controlado
})
export class HomePage {

  constructor(public navCtrl: NavController) { // Objeto NavControler injetado via construtor

  }
  login(){
    /**
     * .push empilha a página e habilita o botão voltar. 
     * .setRoot abre a pagina de maneira independente com menu.
     */ 
    this.navCtrl.setRoot('CategoriasPage'); 
  }
}
