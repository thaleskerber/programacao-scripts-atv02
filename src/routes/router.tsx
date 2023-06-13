import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/header";
import { PageLotofacil, PageMegasena, PageQuina } from "../pages";

export const LoteriaRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/lotofacil" element={<PageLotofacil />} />
        <Route path="/megasena" element={<PageMegasena />} />
        <Route path="/quina" element={<PageQuina />} />
      </Routes>
    </BrowserRouter>
  );
};