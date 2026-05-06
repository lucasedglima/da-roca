const entregaSchema = {
  type: "object",
  properties: {
    idEntrega: { type: "integer" },
    enderecoEntrega: { type: "string" },
    statusEntrega: { type: "string" },
    previsaoEntrega: { type: "string", format: "date-time" },
    taxaEntrega: { type: "number" },
  },
} as const;

const entregaBodySchema = {
  type: "object",
  required: [
    "enderecoEntrega",
    "statusEntrega",
    "previsaoEntrega",
    "taxaEntrega",
  ],
  properties: {
    enderecoEntrega: { type: "string" },
    statusEntrega: { type: "string" },
    previsaoEntrega: { type: "string", format: "date-time" },
    taxaEntrega: { type: "number" },
  },
} as const;

const entregaParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getEntregaSchema = {
  schema: {
    tags: ["Entregas"],
    summary: "Lista todas as entregas",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: entregaSchema } },
  },
};

export const getEntregaByIdSchema = {
  schema: {
    tags: ["Entregas"],
    summary: "Obtem uma entrega pelo ID",
    security: [{ bearerAuth: [] }],
    params: entregaParamsSchema,
    response: { 200: entregaSchema },
  },
};

export const postEntregaSchema = {
  schema: {
    tags: ["Entregas"],
    summary: "Cria uma nova entrega",
    security: [{ bearerAuth: [] }],
    body: entregaBodySchema,
    response: { 201: entregaSchema },
  },
};

export const putEntregaSchema = {
  schema: {
    tags: ["Entregas"],
    summary: "Atualiza uma entrega pelo ID",
    security: [{ bearerAuth: [] }],
    params: entregaParamsSchema,
    body: entregaBodySchema,
    response: { 200: entregaSchema },
  },
};

export const deleteEntregaSchema = {
  schema: {
    tags: ["Entregas"],
    summary: "Exclui uma entrega pelo ID",
    security: [{ bearerAuth: [] }],
    params: entregaParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
