import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ClienteFormulario from "./components/ClienteFormulario";
import PagamentoFormulario from "./components/PagamentoFormulario";
import ProdutoFormulario from "./components/ProdutoFormulario";
import ProdutorFormulario from "./components/ProdutorFormulario";
import UsuarioFormulario from "./components/UsuarioFormulario";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Formularios do Projeto
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <UsuarioFormulario />
        <ClienteFormulario />
        <ProdutorFormulario />
        <ProdutoFormulario />
        <PagamentoFormulario />
      </Box>
    </Container>
  </StrictMode>,
);
