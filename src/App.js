import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Routes,Route} from "react-router-dom"
import ProductList from "./components/Product-list/Product-list";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        {/* <Route path={‘form’} element={<Form />} /> */}
      </Routes>
    </div>
  );
}

export default App;
