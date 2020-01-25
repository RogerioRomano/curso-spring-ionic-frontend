import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

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

  // Objetos injetados via construtor
  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth : AuthService) {
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
    this.auth.authenticate(this.creds)
    .subscribe(response => {
      this.auth.sucessfullLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error => {
      
    });
  }
}
