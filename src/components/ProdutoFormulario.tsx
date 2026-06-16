import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IProdutoFormulario {
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria: string;
  produtorId: number;
}

const schema = yup
  .object({
    nome: yup
      .string()
      .required("Nome e obrigatorio.")
      .min(3, "Nome deve ter no minimo 3 caracteres."),
    descricao: yup
      .string()
      .required("Descricao e obrigatoria.")
      .min(5, "Descricao deve ter no minimo 5 caracteres."),
    preco: yup
      .number()
      .typeError("Preco e obrigatorio.")
      .required("Preco e obrigatorio.")
      .positive("Preco deve ser maior que zero."),
    estoque: yup
      .number()
      .typeError("Estoque e obrigatorio.")
      .required("Estoque e obrigatorio.")
      .min(0, "Estoque nao pode ser negativo.")
      .integer("Estoque deve ser inteiro."),
    categoria: yup
      .string()
      .required("Categoria e obrigatoria.")
      .min(3, "Categoria deve ter no minimo 3 caracteres."),
    produtorId: yup
      .number()
      .typeError("Produtor ID e obrigatorio.")
      .required("Produtor ID e obrigatorio.")
      .positive("Produtor ID deve ser maior que zero.")
      .integer("Produtor ID deve ser inteiro."),
  })
  .required();

function ProdutoFormulario() {
  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProdutoFormulario>({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      descricao: "",
      preco: 0,
      estoque: 0,
      categoria: "",
      produtorId: 0,
    },
  });

  const onSubmit = (data: IProdutoFormulario) => {
    console.log("Produto enviado:", data);
    setMensagem("Formulario enviado com sucesso.");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 420,
        p: 3,
      }}
    >
      <Typography variant="h5">Cadastro de Produto</Typography>

      <TextField
        label="Nome"
        {...register("nome")}
        error={!!errors.nome}
        helperText={errors.nome?.message}
      />

      <TextField
        label="Descricao"
        {...register("descricao")}
        error={!!errors.descricao}
        helperText={errors.descricao?.message}
      />

      <TextField
        label="Preco"
        type="number"
        {...register("preco")}
        error={!!errors.preco}
        helperText={errors.preco?.message}
      />

      <TextField
        label="Estoque"
        type="number"
        {...register("estoque")}
        error={!!errors.estoque}
        helperText={errors.estoque?.message}
      />

      <TextField
        label="Categoria"
        {...register("categoria")}
        error={!!errors.categoria}
        helperText={errors.categoria?.message}
      />

      <TextField
        label="Produtor ID"
        type="number"
        {...register("produtorId")}
        error={!!errors.produtorId}
        helperText={errors.produtorId?.message}
      />

      <Button type="submit" variant="contained">
        Enviar
      </Button>

      {mensagem && <Alert severity="success">{mensagem}</Alert>}
    </Box>
  );
}

export default ProdutoFormulario;
