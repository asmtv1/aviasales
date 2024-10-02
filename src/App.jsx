import Tickets_list from "./components/TicketsList/TicketsList";
import Transplants_filter from "./components/TransplantsFilter/TransplantsFilter";
import Ticket_filter from "./components/TicketFilter/TicketFilter";
import "./App.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchId } from "./components/api/Api";

function App() {
  const dispatch = useDispatch(); // Получаем dispatch

  useEffect(() => {
    // диспатчим fetchSearchId
    dispatch(fetchSearchId());
  }, [dispatch]);
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
