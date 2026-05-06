const carrinhoSchema = {
  type: "object",
  properties: {
    idCarrinho: { type: "integer" },
    dataCriacao: { type: "string", format: "date-time" },
    valorTotal: { type: "number" },
    clienteId: { type: "integer" },
  },
} as const;

const carrinhoBodySchema = {
  type: "object",
  required: ["dataCriacao", "valorTotal", "clienteId"],
  properties: {
    dataCriacao: { type: "string", format: "date-time" },
    valorTotal: { type: "number" },
    clienteId: { type: "integer" },
  },
} as const;

const carrinhoParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getCarrinhoSchema = {
  schema: {
    tags: ["Carrinhos"],
    summary: "Lista todos os carrinhos",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: carrinhoSchema } },
  },
};

export const getCarrinhoByIdSchema = {
  schema: {
    tags: ["Carrinhos"],
    summary: "Obtem um carrinho pelo ID",
    security: [{ bearerAuth: [] }],
    params: carrinhoParamsSchema,
    response: { 200: carrinhoSchema },
  },
};

export const postCarrinhoSchema = {
  schema: {
    tags: ["Carrinhos"],
    summary: "Cria um novo carrinho",
    security: [{ bearerAuth: [] }],
    body: carrinhoBodySchema,
    response: { 201: carrinhoSchema },
  },
};

export const putCarrinhoSchema = {
  schema: {
    tags: ["Carrinhos"],
    summary: "Atualiza um carrinho pelo ID",
    security: [{ bearerAuth: [] }],
    params: carrinhoParamsSchema,
    body: carrinhoBodySchema,
    response: { 200: carrinhoSchema },
  },
};

export const deleteCarrinhoSchema = {
  schema: {
    tags: ["Carrinhos"],
    summary: "Exclui um carrinho pelo ID",
    security: [{ bearerAuth: [] }],
    params: carrinhoParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
