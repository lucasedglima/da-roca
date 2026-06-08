import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IUsuarioFormulario {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  tipoUsuario: string;
}

const schema = yup
  .object({
    nome: yup
      .string()
      .required("Nome e obrigatorio.")
      .min(3, "Nome deve ter no minimo 3 caracteres."),
    email: yup
      .string()
      .required("Email e obrigatorio.")
      .email("Informe um email valido."),
    senha: yup
      .string()
      .required("Senha e obrigatoria.")
      .min(6, "Senha deve ter no minimo 6 caracteres."),
    telefone: yup
      .string()
      .required("Telefone e obrigatorio.")
      .matches(/^\d{8,15}$/, "Informe apenas numeros no telefone."),
    tipoUsuario: yup.string().required("Tipo de usuario e obrigatorio."),
  })
  .required();

function UsuarioFormulario() {
  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IUsuarioFormulario>({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      tipoUsuario: "",
    },
  });

  const tipoUsuario = watch("tipoUsuario");

  const onSubmit = (data: IUsuarioFormulario) => {
    console.log("Usuario enviado:", data);
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
      <Typography variant="h5">Cadastro de Usuario</Typography>

      <TextField
        label="Nome"
        {...register("nome")}
        error={!!errors.nome}
        helperText={errors.nome?.message}
      />

      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Senha"
        type="password"
        {...register("senha")}
        error={!!errors.senha}
        helperText={errors.senha?.message}
      />

      <TextField
        label="Telefone"
        {...register("telefone")}
        error={!!errors.telefone}
        helperText={errors.telefone?.message}
      />

      <FormControl error={!!errors.tipoUsuario}>
        <InputLabel id="tipoUsuario-label">Tipo de Usuario</InputLabel>
        <Select
          labelId="tipoUsuario-label"
          label="Tipo de Usuario"
          value={tipoUsuario}
          onChange={(e) => setValue("tipoUsuario", e.target.value, { shouldValidate: true })}
        >
          <MenuItem value="cliente">Cliente</MenuItem>
          <MenuItem value="produtor">Produtor</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
        {errors.tipoUsuario && (
          <Typography variant="caption" color="error">
            {errors.tipoUsuario.message}
          </Typography>
        )}
      </FormControl>

      <Button type="submit" variant="contained">
        Enviar
      </Button>

      {mensagem && <Alert severity="success">{mensagem}</Alert>}
    </Box>
  );
}

export default UsuarioFormulario;
