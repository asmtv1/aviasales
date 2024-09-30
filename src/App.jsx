import Tickets_list from "./components/Tickets_list";
import Transplants_filter from "./components/Transplants_filter/Transplants_filter";
import Ticket_filter from "./components/Ticket_filter";
import "./App.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchId } from "./components/api";

function App() {
  const dispatch = useDispatch(); // Получаем dispatch

  useEffect(() => {
    // При маунте компонента диспатчим fetchSearchId
    dispatch(fetchSearchId());
  }, [dispatch]); // Зависимость, чтобы избежать бесконечного рендера
  return (
    <>
      <div className="background">
        <header>
          <div className="logo" />
        </header>
        <main className="main_menu">
          <Transplants_filter />
          <section>
            <Ticket_filter />
            <Tickets_list />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
