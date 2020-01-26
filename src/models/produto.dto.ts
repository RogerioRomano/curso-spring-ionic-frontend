export interface ProdutoDTO {
    id: string;
    nome: string;
    preco: number;
    imageUrl? : string //? significa que o atributo é opcional
}