import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
/**
 * O decorator @NgModule() desta classe é mais simples em relaçcão a classe princial
 * app.moduloes.ts. Ele possui dois atributos essenciais declarations e imports.
 * Toda página possui este objeto com estes dois atributos, inclusive ele é criado
 * automaticamente pelo ionic.cli.
 */
@NgModule({
    declarations: [HomePage], // "HomePage" é o nome da classe no controller homepage.ts.
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule {
}