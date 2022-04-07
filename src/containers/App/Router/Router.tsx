import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "../../CardDetails";
import CardList from "../../CardList";
import App from "../App";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<CardList />} />
      <Route path='card/:cardId' element={<CardDetails />} />
    </Routes>
  );
};

export default AppRouter;
