class Usuario {
    constructor(
        public idUsuario: number,
        public nome: string,
        public email: string,
        public senha: string,
        public telefone: string,
        public tipoUsuario: string
    ) {}
}

class Cliente extends Usuario {
    public pedidos: Pedido[] = [];
    public carrinho: Carrinho | null = null;

    constructor(
        idUsuario: number,
        nome: string,
        email: string,
        senha: string,
        telefone: string,
        tipoUsuario: string,
        public idCliente: number,
        public cpf: string,
        public endereco: string
    ) {
        super(idUsuario, nome, email, senha, telefone, tipoUsuario);
    }
}

class Produtor extends Usuario {
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
        public descricao: string
    ) {
        super(idUsuario, nome, email, senha, telefone, tipoUsuario);
    }
}

class Produto {
    constructor(
        public idProduto: number,
        public nome: string,
        public descricao: string,
        public preco: number,
        public estoque: number,
        public categoria: string,
        public produtor: Produtor
    ) {}
}

class ItemCarrinho {
    constructor(
        public idItemCarrinho: number,
        public quantidade: number,
        public subtotal: number,
        public produto: Produto
    ) {}
}

class Carrinho {
    public itens: ItemCarrinho[] = [];

    constructor(
        public idCarrinho: number,
        public dataCriacao: Date,
        public valorTotal: number,
        public cliente: Cliente
    ) {}
}

class ItemPedido {
    constructor(
        public idItemPedido: number,
        public quantidade: number,
        public precoUnitario: number,
        public subtotal: number,
        public produto: Produto
    ) {}
}

class Pagamento {
    constructor(
        public idPagamento: number,
        public tipoPagamento: string,
        public statusPagamento: string,
        public valor: number,
        public dataPagamento: Date
    ) {}
}

class Entrega {
    constructor(
        public idEntrega: number,
        public enderecoEntrega: string,
        public statusEntrega: string,
        public previsaoEntrega: Date,
        public taxaEntrega: number
    ) {}
}

class Pedido {
    public itens: ItemPedido[] = [];

    constructor(
        public idPedido: number,
        public dataPedido: Date,
        public status: string,
        public valorTotal: number,
        public cliente: Cliente,
        public pagamento: Pagamento,
        public entrega: Entrega
    ) {}
}