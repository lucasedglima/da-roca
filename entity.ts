export abstract class Usuario {
  constructor(
    public idUsuario: number,
    public nome: string,
    public email: string,
    public senha: string,
    public telefone: string,
    public tipoUsuario: string,
  ) {}
}

export class Cliente extends Usuario {
  constructor(
    idUsuario: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    tipoUsuario: string,
    public idCliente: number,
    public cpf: string,
    public endereco: string,
  ) {
    super(idUsuario, nome, email, senha, telefone, tipoUsuario);
  }
}

export class Produtor extends Usuario {
  public produtos: Produto[] = [];

  constructor(
    idUsuario: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    tipoUsuario: string,
    public idProdutor: number,
    public nomePropriedade: string,
    public cnpjCpf: string,
    public localizacao: string,
    public descricao: string,
  ) {
    super(idUsuario, nome, email, senha, telefone, tipoUsuario);
  }

  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }
}

export class Produto {
  constructor(
    public idProduto: number,
    public nome: string,
    public descricao: string,
    public preco: number,
    public estoque: number,
    public categoria: string,
    public produtor: Produtor,
  ) {}
}

export class ItemCarrinho {
  constructor(
    public idItemCarrinho: number,
    public produto: Produto,
    public quantidade: number,
  ) {}

  get subtotal(): number {
    return this.produto.preco * this.quantidade;
  }
}

export class Carrinho {
  public itens: ItemCarrinho[] = [];

  constructor(
    public idCarrinho: number,
    public dataCriacao: Date,
    public cliente: Cliente,
  ) {}

  adicionarItem(item: ItemCarrinho): void {
    this.itens.push(item);
  }

  removerItem(idItemCarrinho: number): void {
    this.itens = this.itens.filter((item) => item.idItemCarrinho !== idItemCarrinho);
  }

  get valorTotal(): number {
    return this.itens.reduce((total, item) => total + item.subtotal, 0);
  }
}

export class ItemPedido {
  constructor(
    public idItemPedido: number,
    public produto: Produto,
    public quantidade: number,
    public precoUnitario: number,
  ) {}

  get subtotal(): number {
    return this.precoUnitario * this.quantidade;
  }
}

export class Pagamento {
  constructor(
    public idPagamento: number,
    public tipoPagamento: string,
    public statusPagamento: string,
    public valor: number,
    public dataPagamento: Date,
  ) {}
}

export class Entrega {
  constructor(
    public idEntrega: number,
    public enderecoEntrega: string,
    public statusEntrega: string,
    public previsaoEntrega: Date,
    public taxaEntrega: number,
  ) {}
}

export class Pedido {
  public itens: ItemPedido[] = [];

  constructor(
    public idPedido: number,
    public dataPedido: Date,
    public status: string,
    public cliente: Cliente,
    public pagamento: Pagamento,
    public entrega: Entrega,
  ) {}

  adicionarItem(item: ItemPedido): void {
    this.itens.push(item);
  }

  get valorTotal(): number {
    const totalItens = this.itens.reduce((total, item) => total + item.subtotal, 0);
    return totalItens + this.entrega.taxaEntrega;
  }
}
