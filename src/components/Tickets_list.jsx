import Ticket from "./Ticket";

export default function Tickets_list({}) {
  return (
    <ul className="tickets_list">
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
}
