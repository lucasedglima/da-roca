const produtoSchema = {
  type: "object",
  properties: {
    idProduto: { type: "integer" },
    nome: { type: "string" },
    descricao: { type: "string" },
    preco: { type: "number" },
    estoque: { type: "integer" },
    categoria: { type: "string" },
    produtorId: { type: "integer" },
  },
} as const;

const produtoBodySchema = {
  type: "object",
  required: ["nome", "descricao", "preco", "estoque", "categoria", "produtorId"],
  properties: {
    nome: { type: "string" },
    descricao: { type: "string" },
    preco: { type: "number" },
    estoque: { type: "integer" },
    categoria: { type: "string" },
    produtorId: { type: "integer" },
  },
} as const;

const produtoParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getProdutoSchema = {
  schema: {
    tags: ["Produtos"],
    summary: "Lista todos os produtos",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: produtoSchema } },
  },
};

export const getProdutoByIdSchema = {
  schema: {
    tags: ["Produtos"],
    summary: "Obtem um produto pelo ID",
    security: [{ bearerAuth: [] }],
    params: produtoParamsSchema,
    response: { 200: produtoSchema },
  },
};

export const postProdutoSchema = {
  schema: {
    tags: ["Produtos"],
    summary: "Cria um novo produto",
    security: [{ bearerAuth: [] }],
    body: produtoBodySchema,
    response: { 201: produtoSchema },
  },
};

export const putProdutoSchema = {
  schema: {
    tags: ["Produtos"],
    summary: "Atualiza um produto pelo ID",
    security: [{ bearerAuth: [] }],
    params: produtoParamsSchema,
    body: produtoBodySchema,
    response: { 200: produtoSchema },
  },
};

export const deleteProdutoSchema = {
  schema: {
    tags: ["Produtos"],
    summary: "Exclui um produto pelo ID",
    security: [{ bearerAuth: [] }],
    params: produtoParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
