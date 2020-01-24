import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../intecerptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { ClienteService } from '../services/domain/cliente.service';

/**
 * import { HomePage } from '../pages/home/home';
 * desativado para a implementação via lazyloading.

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/** 
 * Este é um projeto de estudo, logo vai conter muitos comentários, em um projeto normal isso 
 * não é aceito.
 * O decorator @NgModule() especifica uma classe, ele tem configurações para alterar a classe.
 * O que faz uma clase ser um módulo é o decorator @NgmModule.
 *  * Dentro do decorator declaramos um objeto, com { }. 
 * O objeto possui alguns atributos: 
 * - Declarations: Contém a lista de componentes ou páginas que fazem parte deste módulo.
 * - Imports: Contém a lista de módulos que são importados por este módulo.
 *            A aplicação Angular é um conjunto de módulos. Estes módulos possuem estrutura 
 *           hierarquica, um módulo pode importar outros módulos.
 * - Bootstrap: Possui a indicação de como a aplicação vai iniciar.
 * - Entrycomponents: Quando o objeto adicionado no Declations for uma página e não apenas um 
 *                   componente ele precisa ser adicionado no entryComponents.
 * - Providers: Contém as classes que quando injetadas terão seus objetos criados como uma 
 *             instância única para toda a aplição. Sempre que injetarmos os objetos do tipo 
 *             especificado em uma classe do módulo teremos a mesma instância.
 * A palavra export indica que a classe ou outro elemento pode ser importado por outro arquivo.
 * Lazyloading:
 * - Carregamento tardio, o item somente vai ser carregado quando for necessário.
 * - Se uma aplicação carregar todas as páginas de uma só vez ela vai ficar "Pesada", vai demorar para carregar.
 * - Para melhorar a performance de uma aplicação ionic, principalmente em sua inicialização o modo adotado 
 * é o lazyloading.
 * Implementaçcão: 
 * - Ao invés de carregar a página no @NgModule() vamos adicionar a página em outro módulo (até porque toda a
 * página precisa estar declara em um módulo).
 * - Vamos criar submódulos, de maneira geral será um módulo para cada página, a declaração da página vai 
 * ficar no módulo dela. Quando a página for acionada pela aplicação aí sim será carregada.
 * 
 */

@NgModule({
  declarations: [
    MyApp, // Nome da classe especificado no controller app.component.ts
    /**HomePage Nome da classe especificado no controller home.ts\
     * desativado para a implentemtação via lazyloading.
     */
  ],
  imports: [
    BrowserModule, //módulo básico da estrutura de uma aplicação ionic.
    HttpClientModule,
    IonicModule.forRoot(MyApp), //módulo básico da estrutura de uma aplicação ionic.
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    //HomePage Desativado para a implementação via lazyloading
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CategoriaService,
    ErrorInterceptorProvider,
    AuthService,
    StorageService, 
    ClienteService
  ]
})
export class AppModule {}
