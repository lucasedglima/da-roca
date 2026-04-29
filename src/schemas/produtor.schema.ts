const produtorSchema = {
  type: "object",
  properties: {
    idProdutor: { type: "integer" },
    nomePropriedade: { type: "string" },
    cnpjCpf: { type: "string" },
    localizacao: { type: "string" },
    descricao: { type: "string" },
    usuarioId: { type: "integer" },
  },
} as const;

const produtorBodySchema = {
  type: "object",
  required: [
    "nomePropriedade",
    "cnpjCpf",
    "localizacao",
    "descricao",
    "usuarioId",
  ],
  properties: {
    nomePropriedade: { type: "string" },
    cnpjCpf: { type: "string" },
    localizacao: { type: "string" },
    descricao: { type: "string" },
    usuarioId: { type: "integer" },
  },
} as const;

const produtorParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getProdutorSchema = {
  schema: {
    tags: ["Produtores"],
    summary: "Lista todos os produtores",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: produtorSchema } },
  },
};

export const getProdutorByIdSchema = {
  schema: {
    tags: ["Produtores"],
    summary: "Obtem um produtor pelo ID",
    security: [{ bearerAuth: [] }],
    params: produtorParamsSchema,
    response: { 200: produtorSchema },
  },
};

export const postProdutorSchema = {
  schema: {
    tags: ["Produtores"],
    summary: "Cria um novo produtor",
    security: [{ bearerAuth: [] }],
    body: produtorBodySchema,
    response: { 201: produtorSchema },
  },
};

export const putProdutorSchema = {
  schema: {
    tags: ["Produtores"],
    summary: "Atualiza um produtor pelo ID",
    security: [{ bearerAuth: [] }],
    params: produtorParamsSchema,
    body: produtorBodySchema,
    response: { 200: produtorSchema },
  },
};

export const deleteProdutorSchema = {
  schema: {
    tags: ["Produtores"],
    summary: "Exclui um produtor pelo ID",
    security: [{ bearerAuth: [] }],
    params: produtorParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
