const itemCarrinhoSchema = {
  type: "object",
  properties: {
    idItemCarrinho: { type: "integer" },
    quantidade: { type: "integer" },
    subtotal: { type: "number" },
    carrinhoId: { type: "integer" },
    produtoId: { type: "integer" },
  },
} as const;

const itemCarrinhoBodySchema = {
  type: "object",
  required: ["quantidade", "subtotal", "carrinhoId", "produtoId"],
  properties: {
    quantidade: { type: "integer" },
    subtotal: { type: "number" },
    carrinhoId: { type: "integer" },
    produtoId: { type: "integer" },
  },
} as const;

const itemCarrinhoParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getItemCarrinhoSchema = {
  schema: {
    tags: ["ItensCarrinho"],
    summary: "Lista todos os itens do carrinho",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: itemCarrinhoSchema } },
  },
};

export const getItemCarrinhoByIdSchema = {
  schema: {
    tags: ["ItensCarrinho"],
    summary: "Obtem um item do carrinho pelo ID",
    security: [{ bearerAuth: [] }],
    params: itemCarrinhoParamsSchema,
    response: { 200: itemCarrinhoSchema },
  },
};

export const postItemCarrinhoSchema = {
  schema: {
    tags: ["ItensCarrinho"],
    summary: "Cria um novo item do carrinho",
    security: [{ bearerAuth: [] }],
    body: itemCarrinhoBodySchema,
    response: { 201: itemCarrinhoSchema },
  },
};

export const putItemCarrinhoSchema = {
  schema: {
    tags: ["ItensCarrinho"],
    summary: "Atualiza um item do carrinho pelo ID",
    security: [{ bearerAuth: [] }],
    params: itemCarrinhoParamsSchema,
    body: itemCarrinhoBodySchema,
    response: { 200: itemCarrinhoSchema },
  },
};

export const deleteItemCarrinhoSchema = {
  schema: {
    tags: ["ItensCarrinho"],
    summary: "Exclui um item do carrinho pelo ID",
    security: [{ bearerAuth: [] }],
    params: itemCarrinhoParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
