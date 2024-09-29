import { useState } from "react";
import Tickets_list from "./components/Tickets_list";
import Transplants_filter from "./components/Transplants_filter/Transplants_filter";
import Ticket_filter from "./components/Ticket_filter";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

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
