const pedidoSchema = {
  type: "object",
  properties: {
    idPedido: { type: "integer" },
    dataPedido: { type: "string", format: "date-time" },
    status: { type: "string" },
    valorTotal: { type: "number" },
    clienteId: { type: "integer" },
    pagamentoId: { type: "integer" },
    entregaId: { type: "integer" },
  },
} as const;

const pedidoBodySchema = {
  type: "object",
  required: [
    "dataPedido",
    "status",
    "valorTotal",
    "clienteId",
    "pagamentoId",
    "entregaId",
  ],
  properties: {
    dataPedido: { type: "string", format: "date-time" },
    status: { type: "string" },
    valorTotal: { type: "number" },
    clienteId: { type: "integer" },
    pagamentoId: { type: "integer" },
    entregaId: { type: "integer" },
  },
} as const;

const pedidoParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getPedidoSchema = {
  schema: {
    tags: ["Pedidos"],
    summary: "Lista todos os pedidos",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: pedidoSchema } },
  },
};

export const getPedidoByIdSchema = {
  schema: {
    tags: ["Pedidos"],
    summary: "Obtem um pedido pelo ID",
    security: [{ bearerAuth: [] }],
    params: pedidoParamsSchema,
    response: { 200: pedidoSchema },
  },
};

export const postPedidoSchema = {
  schema: {
    tags: ["Pedidos"],
    summary: "Cria um novo pedido",
    security: [{ bearerAuth: [] }],
    body: pedidoBodySchema,
    response: { 201: pedidoSchema },
  },
};

export const putPedidoSchema = {
  schema: {
    tags: ["Pedidos"],
    summary: "Atualiza um pedido pelo ID",
    security: [{ bearerAuth: [] }],
    params: pedidoParamsSchema,
    body: pedidoBodySchema,
    response: { 200: pedidoSchema },
  },
};

export const deletePedidoSchema = {
  schema: {
    tags: ["Pedidos"],
    summary: "Exclui um pedido pelo ID",
    security: [{ bearerAuth: [] }],
    params: pedidoParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
