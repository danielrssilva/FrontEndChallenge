import { Routes, Route } from "react-router-dom";
import CardDetails from "../../CardDetails";
import CardList from "../../CardList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<CardList />} />
      <Route path='card/:cardId' element={<CardDetails />} />
    </Routes>
  );
};

export default AppRouter;
