import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IProdutorFormulario {
  nomePropriedade: string;
  cnpjCpf: string;
  localizacao: string;
  descricao: string;
  usuarioId: number;
}

const schema = yup
  .object({
    nomePropriedade: yup
      .string()
      .required("Nome da propriedade e obrigatorio.")
      .min(3, "Nome da propriedade deve ter no minimo 3 caracteres."),
    cnpjCpf: yup
      .string()
      .required("CNPJ ou CPF e obrigatorio.")
      .min(11, "CNPJ ou CPF deve ter no minimo 11 caracteres."),
    localizacao: yup
      .string()
      .required("Localizacao e obrigatoria.")
      .min(3, "Localizacao deve ter no minimo 3 caracteres."),
    descricao: yup
      .string()
      .required("Descricao e obrigatoria.")
      .min(5, "Descricao deve ter no minimo 5 caracteres."),
    usuarioId: yup
      .number()
      .typeError("Usuario ID e obrigatorio.")
      .required("Usuario ID e obrigatorio.")
      .positive("Usuario ID deve ser maior que zero.")
      .integer("Usuario ID deve ser inteiro."),
  })
  .required();

function ProdutorFormulario() {
  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProdutorFormulario>({
    resolver: yupResolver(schema),
    defaultValues: {
      nomePropriedade: "",
      cnpjCpf: "",
      localizacao: "",
      descricao: "",
      usuarioId: 0,
    },
  });

  const onSubmit = (data: IProdutorFormulario) => {
    console.log("Produtor enviado:", data);
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
      <Typography variant="h5">Cadastro de Produtor</Typography>

      <TextField
        label="Nome da Propriedade"
        {...register("nomePropriedade")}
        error={!!errors.nomePropriedade}
        helperText={errors.nomePropriedade?.message}
      />

      <TextField
        label="CNPJ ou CPF"
        {...register("cnpjCpf")}
        error={!!errors.cnpjCpf}
        helperText={errors.cnpjCpf?.message}
      />

      <TextField
        label="Localizacao"
        {...register("localizacao")}
        error={!!errors.localizacao}
        helperText={errors.localizacao?.message}
      />

      <TextField
        label="Descricao"
        {...register("descricao")}
        error={!!errors.descricao}
        helperText={errors.descricao?.message}
      />

      <TextField
        label="Usuario ID"
        type="number"
        {...register("usuarioId")}
        error={!!errors.usuarioId}
        helperText={errors.usuarioId?.message}
      />

      <Button type="submit" variant="contained">
        Enviar
      </Button>

      {mensagem && <Alert severity="success">{mensagem}</Alert>}
    </Box>
  );
}

export default ProdutorFormulario;
