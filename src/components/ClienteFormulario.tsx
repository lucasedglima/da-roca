import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IClienteFormulario {
  cpf: string;
  endereco: string;
  usuarioId: number;
}

const schema = yup
  .object({
    cpf: yup
      .string()
      .required("CPF e obrigatorio.")
      .matches(/^\d{11}$/, "CPF deve conter 11 numeros."),
    endereco: yup
      .string()
      .required("Endereco e obrigatorio.")
      .min(5, "Endereco deve ter no minimo 5 caracteres."),
    usuarioId: yup
      .number()
      .typeError("Usuario ID e obrigatorio.")
      .required("Usuario ID e obrigatorio.")
      .positive("Usuario ID deve ser maior que zero.")
      .integer("Usuario ID deve ser inteiro."),
  })
  .required();

function ClienteFormulario() {
  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClienteFormulario>({
    resolver: yupResolver(schema),
    defaultValues: {
      cpf: "",
      endereco: "",
      usuarioId: 0,
    },
  });

  const onSubmit = (data: IClienteFormulario) => {
    console.log("Cliente enviado:", data);
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
      <Typography variant="h5">Cadastro de Cliente</Typography>

      <TextField
        label="CPF"
        {...register("cpf")}
        error={!!errors.cpf}
        helperText={errors.cpf?.message}
      />

      <TextField
        label="Endereco"
        {...register("endereco")}
        error={!!errors.endereco}
        helperText={errors.endereco?.message}
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

export default ClienteFormulario;
