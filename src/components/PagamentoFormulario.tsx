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

interface IPagamentoFormulario {
  tipoPagamento: string;
  statusPagamento: string;
  valor: number;
  dataPagamento: string;
}

const schema = yup
  .object({
    tipoPagamento: yup.string().required("Tipo de pagamento e obrigatorio."),
    statusPagamento: yup.string().required("Status de pagamento e obrigatorio."),
    valor: yup
      .number()
      .typeError("Valor e obrigatorio.")
      .required("Valor e obrigatorio.")
      .positive("Valor deve ser maior que zero."),
    dataPagamento: yup
      .string()
      .required("Data de pagamento e obrigatoria."),
  })
  .required();

function PagamentoFormulario() {
  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IPagamentoFormulario>({
    resolver: yupResolver(schema),
    defaultValues: {
      tipoPagamento: "",
      statusPagamento: "",
      valor: 0,
      dataPagamento: "",
    },
  });

  const tipoPagamento = watch("tipoPagamento");
  const statusPagamento = watch("statusPagamento");

  const onSubmit = (data: IPagamentoFormulario) => {
    console.log("Pagamento enviado:", data);
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
      <Typography variant="h5">Cadastro de Pagamento</Typography>

      <FormControl error={!!errors.tipoPagamento}>
        <InputLabel id="tipoPagamento-label">Tipo de Pagamento</InputLabel>
        <Select
          labelId="tipoPagamento-label"
          label="Tipo de Pagamento"
          value={tipoPagamento}
          onChange={(e) =>
            setValue("tipoPagamento", e.target.value, { shouldValidate: true })
          }
        >
          <MenuItem value="PIX">PIX</MenuItem>
          <MenuItem value="CARTAO">Cartao</MenuItem>
          <MenuItem value="DINHEIRO">Dinheiro</MenuItem>
        </Select>
        {errors.tipoPagamento && (
          <Typography variant="caption" color="error">
            {errors.tipoPagamento.message}
          </Typography>
        )}
      </FormControl>

      <FormControl error={!!errors.statusPagamento}>
        <InputLabel id="statusPagamento-label">Status do Pagamento</InputLabel>
        <Select
          labelId="statusPagamento-label"
          label="Status do Pagamento"
          value={statusPagamento}
          onChange={(e) =>
            setValue("statusPagamento", e.target.value, {
              shouldValidate: true,
            })
          }
        >
          <MenuItem value="PAGO">Pago</MenuItem>
          <MenuItem value="PENDENTE">Pendente</MenuItem>
          <MenuItem value="CANCELADO">Cancelado</MenuItem>
        </Select>
        {errors.statusPagamento && (
          <Typography variant="caption" color="error">
            {errors.statusPagamento.message}
          </Typography>
        )}
      </FormControl>

      <TextField
        label="Valor"
        type="number"
        {...register("valor")}
        error={!!errors.valor}
        helperText={errors.valor?.message}
      />

      <TextField
        label="Data de Pagamento"
        type="datetime-local"
        slotProps={{ inputLabel: { shrink: true } }}
        {...register("dataPagamento")}
        error={!!errors.dataPagamento}
        helperText={errors.dataPagamento?.message}
      />

      <Button type="submit" variant="contained">
        Enviar
      </Button>

      {mensagem && <Alert severity="success">{mensagem}</Alert>}
    </Box>
  );
}

export default PagamentoFormulario;
