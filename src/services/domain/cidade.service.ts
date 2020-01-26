import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";
import { Observable } from "rxjs/Rx";

/**
 * O decorator @Injectable() habilita a capacidade de injeção da classe em outras classes.
 */
@Injectable()
export class CidadeService {

    constructor(public http: HttpClient) {
    }

    findAll(estado_id : string) : Observable<CidadeDTO[]> {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }
}