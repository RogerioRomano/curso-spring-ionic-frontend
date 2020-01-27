import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';

/**
 * import { HomePage } from '../pages/home/home';
 * desativado para a implementacao do lazyloading.
 */

/**
 * Toda a pagína html que é uma view possui um controlador.
 * O arquivo app.html tem como controller o arquivo app.component.ts
 */

/**
 * Declarando o nome da classe na forma de String conseguimos a flexibilidade
 * do lazy loading sem a necessidade de importar a classe da página. Lembrando
 * que para que classe possa ser referenciada como lazy loading ela precisa
 * ter o decoration @IonicPage() presente no arquivo home.ts
 */

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage'; //Alterado de any para string implementação lazy loading.

  pages: Array<{title: string, component: string}>; //component de any para string implementação lazy loading.

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Categoria', component: 'CategoriasPage' },
      { title: 'Carrinho', component: 'CartPage' },
      { title: 'Logout', component: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: {title:string, component:string} ) {
    switch(page.title){
      case 'Logout':
        this.auth.logout();
        this.nav.setRoot('HomePage');
        break;

        default:
        this.nav.setRoot(page.component);
    }
  }
}
