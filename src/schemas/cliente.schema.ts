const clienteSchema = {
  type: "object",
  properties: {
    idCliente: { type: "integer" },
    cpf: { type: "string" },
    endereco: { type: "string" },
    usuarioId: { type: "integer" },
  },
} as const;

const clienteBodySchema = {
  type: "object",
  required: ["cpf", "endereco", "usuarioId"],
  properties: {
    cpf: { type: "string" },
    endereco: { type: "string" },
    usuarioId: { type: "integer" },
  },
} as const;

const clienteParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getClienteSchema = {
  schema: {
    tags: ["Clientes"],
    summary: "Lista todos os clientes",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: clienteSchema } },
  },
};

export const getClienteByIdSchema = {
  schema: {
    tags: ["Clientes"],
    summary: "Obtem um cliente pelo ID",
    security: [{ bearerAuth: [] }],
    params: clienteParamsSchema,
    response: { 200: clienteSchema },
  },
};

export const postClienteSchema = {
  schema: {
    tags: ["Clientes"],
    summary: "Cria um novo cliente",
    security: [{ bearerAuth: [] }],
    body: clienteBodySchema,
    response: { 201: clienteSchema },
  },
};

export const putClienteSchema = {
  schema: {
    tags: ["Clientes"],
    summary: "Atualiza um cliente pelo ID",
    security: [{ bearerAuth: [] }],
    params: clienteParamsSchema,
    body: clienteBodySchema,
    response: { 200: clienteSchema },
  },
};

export const deleteClienteSchema = {
  schema: {
    tags: ["Clientes"],
    summary: "Exclui um cliente pelo ID",
    security: [{ bearerAuth: [] }],
    params: clienteParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
