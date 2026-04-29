const usuarioSchema = {
  type: "object",
  properties: {
    idUsuario: { type: "integer" },
    nome: { type: "string" },
    email: { type: "string" },
    senha: { type: "string" },
    telefone: { type: "string" },
    tipoUsuario: { type: "string" },
  },
} as const;

const usuarioBodySchema = {
  type: "object",
  required: ["nome", "email", "senha", "telefone", "tipoUsuario"],
  properties: {
    nome: { type: "string" },
    email: { type: "string" },
    senha: { type: "string" },
    telefone: { type: "string" },
    tipoUsuario: { type: "string" },
  },
} as const;

const usuarioParamsSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
  },
} as const;

export const getUsuarioSchema = {
  schema: {
    tags: ["Usuarios"],
    summary: "Lista todos os usuarios",
    security: [{ bearerAuth: [] }],
    response: { 200: { type: "array", items: usuarioSchema } },
  },
};

export const getUsuarioByIdSchema = {
  schema: {
    tags: ["Usuarios"],
    summary: "Obtem um usuario pelo ID",
    security: [{ bearerAuth: [] }],
    params: usuarioParamsSchema,
    response: { 200: usuarioSchema },
  },
};

export const postUsuarioSchema = {
  schema: {
    tags: ["Usuarios"],
    summary: "Cria um novo usuario",
    security: [{ bearerAuth: [] }],
    body: usuarioBodySchema,
    response: { 201: usuarioSchema },
  },
};

export const putUsuarioSchema = {
  schema: {
    tags: ["Usuarios"],
    summary: "Atualiza um usuario pelo ID",
    security: [{ bearerAuth: [] }],
    params: usuarioParamsSchema,
    body: usuarioBodySchema,
    response: { 200: usuarioSchema },
  },
};

export const deleteUsuarioSchema = {
  schema: {
    tags: ["Usuarios"],
    summary: "Exclui um usuario pelo ID",
    security: [{ bearerAuth: [] }],
    params: usuarioParamsSchema,
    response: { 200: { type: "boolean" } },
  },
};
