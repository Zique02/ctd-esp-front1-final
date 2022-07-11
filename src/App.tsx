import React from 'react';
//@ts-ignore
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalhe from "./paginas/Detalhe.pagina";
import Cabecalho from "./componentes/layout/cabecalho.componente";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalhe/:id" element={<PaginaDetalhe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
