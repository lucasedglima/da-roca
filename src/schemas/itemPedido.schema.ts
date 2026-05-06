const itemPedidoSchema = {
  type: "object",
  properties: {
    idItemPedido: { type: "integer" },
    quantidade: { type: "integer" },
    precoUnitario: { type: "number" },
    subtotal: { type: "number" },
    pedidoId: { type: "integer" },
    produtoId: { type: "integer" },
  },
} as const;

const itemPedidoBodySchema = {
  type: "object",
  required: ["quantidade", "precoUnitario", "subtotal", "pedidoId", "produtoId"],
  properties: {
    quantidade: { type: "integer" },
    precoUnitario: { type: "number" },
    subtotal: { type: "number" },
    pedidoId: { type: "integer" },
    produtoId: { type: "integer" },
  },
} as const;

const itemPedidoParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getItemPedidoSchema = {
  schema: {
    tags: ["ItensPedido"],
    summary: "Lista todos os itens do pedido",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: itemPedidoSchema } },
  },
};

export const getItemPedidoByIdSchema = {
  schema: {
    tags: ["ItensPedido"],
    summary: "Obtem um item do pedido pelo ID",
    security: [{ bearerAuth: [] }],
    params: itemPedidoParamsSchema,
    response: { 200: itemPedidoSchema },
  },
};

export const postItemPedidoSchema = {
  schema: {
    tags: ["ItensPedido"],
    summary: "Cria um novo item do pedido",
    security: [{ bearerAuth: [] }],
    body: itemPedidoBodySchema,
    response: { 201: itemPedidoSchema },
  },
};

export const putItemPedidoSchema = {
  schema: {
    tags: ["ItensPedido"],
    summary: "Atualiza um item do pedido pelo ID",
    security: [{ bearerAuth: [] }],
    params: itemPedidoParamsSchema,
    body: itemPedidoBodySchema,
    response: { 200: itemPedidoSchema },
  },
};

export const deleteItemPedidoSchema = {
  schema: {
    tags: ["ItensPedido"],
    summary: "Exclui um item do pedido pelo ID",
    security: [{ bearerAuth: [] }],
    params: itemPedidoParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
