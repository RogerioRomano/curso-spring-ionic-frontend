import { ProdutoDTO } from "./produto.dto";
import { ProdutoService } from "../services/domain/produto.service";

export interface CartItem {
    quantidade:  number,
    produto: ProdutoDTO
}