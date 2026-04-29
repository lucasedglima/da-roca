const pagamentoSchema = {
  type: "object",
  properties: {
    idPagamento: { type: "integer" },
    tipoPagamento: { type: "string" },
    statusPagamento: { type: "string" },
    valor: { type: "number" },
    dataPagamento: { type: "string", format: "date-time" },
  },
} as const;

const pagamentoBodySchema = {
  type: "object",
  required: ["tipoPagamento", "statusPagamento", "valor", "dataPagamento"],
  properties: {
    tipoPagamento: { type: "string" },
    statusPagamento: { type: "string" },
    valor: { type: "number" },
    dataPagamento: { type: "string", format: "date-time" },
  },
} as const;

const pagamentoParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getPagamentoSchema = {
  schema: {
    tags: ["Pagamentos"],
    summary: "Lista todos os pagamentos",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: pagamentoSchema } },
  },
};

export const getPagamentoByIdSchema = {
  schema: {
    tags: ["Pagamentos"],
    summary: "Obtem um pagamento pelo ID",
    security: [{ bearerAuth: [] }],
    params: pagamentoParamsSchema,
    response: { 200: pagamentoSchema },
  },
};

export const postPagamentoSchema = {
  schema: {
    tags: ["Pagamentos"],
    summary: "Cria um novo pagamento",
    security: [{ bearerAuth: [] }],
    body: pagamentoBodySchema,
    response: { 201: pagamentoSchema },
  },
};

export const putPagamentoSchema = {
  schema: {
    tags: ["Pagamentos"],
    summary: "Atualiza um pagamento pelo ID",
    security: [{ bearerAuth: [] }],
    params: pagamentoParamsSchema,
    body: pagamentoBodySchema,
    response: { 200: pagamentoSchema },
  },
};

export const deletePagamentoSchema = {
  schema: {
    tags: ["Pagamentos"],
    summary: "Exclui um pagamento pelo ID",
    security: [{ bearerAuth: [] }],
    params: pagamentoParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
