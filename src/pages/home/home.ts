import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

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

  creds : CredenciaisDTO  = {
    email : "",
    senha : ""
  };

  // Objeto NavControler injetado via construtor
  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(false);
  }

  login() {
    /**
     * .push empilha a página e habilita o botão voltar. 
     * .setRoot abre a pagina de maneira independente com menu.
     */
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }
}
