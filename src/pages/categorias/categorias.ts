import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../app/config/api.config';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl : string = API_CONFIG.bucketBaseUrl;
  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService : CategoriaService) {
  }

  ionViewDidLoad() {
    /**
     * Por se tratar de chamada assíncrona precisamos nos inscrever para executar algo
     * quando a resposta chegar ".subscribe"
     * fuction callback, passamos uma função anônima como argumento de outra função.
     * ex: "arrowfunction =>"
     */ 
    this.categoriaService.findAll()
      .subscribe(response => { 
      this.items = response;
    },
    error => {});
  }
}
