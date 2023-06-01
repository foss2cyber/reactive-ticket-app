import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      const { ip } = response.data;
      const code = response.status;
      const user_agent = navigator.userAgent;
      const newTicket = {
        ip,
        code,
        user_agent,
        timestamp: new Date().toLocaleString(),
      };
      setTickets((prevTickets) => [newTicket, ...prevTickets]);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 animate-pulse delay-150 duration-100">
        Reactive Ticket App
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-[beige] font-bold py-2 px-4 rounded-full ease-in duration-100 delay-75 hover:shadow-slate-600 hover:shadow-md"
        onClick={fetchTickets}
      >
        Generate Ticket
      </button>
      <div className="mt-8 bg-amber-50 p-2 rounded-xl shadow-md shadow-slate-600">
        <h2 className="text-xl font-bold mb-2">Generated Tickets:</h2>
        {tickets.map((ticket, index) => (
          <div key={index} className="border-b py-2">
            <p className="text-green-600">
              <span className="font-medium text-slate-500">IP Address:</span>{" "}
              {ticket.ip}
            </p>
            <br />
            <p className="text-green-600">
              <span className="font-medium text-slate-500">Status Code:</span>{" "}
              {ticket.code}
            </p>
            <br />
            <p className="text-green-600">
              <span className="font-medium text-slate-500">User Agent:</span>{" "}
              {ticket.user_agent}
            </p>
            <br />
            <p className="text-green-600">
              <span className="font-medium text-slate-500">Timestamp:</span>{" "}
              {ticket.timestamp}
            </p>
          </div>
        ))}
      </div>

      <footer className="w-full h-36 bottom-0 left-0 right-0 fixed z-[100] bg-zinc-200">
        <div className="flex flex-col lg:flex-row xl:flex-row flex-nowrap justify-between items-center space-x-auto gap-4 space-y-2 m-2 p-4">
          <h3 className="inline-flex text-slate-500 hover:text-[#111] ease-in duration-300 delay-100">
            <a
              href="https://reactive-ticket-app.vercel.app/"
              title="Reactive Ticket App"
              target="_blank"
              rel="noreferrer"
            >
              Reactive Ticket App
            </a>
          </h3>
        </div>
        <hr className="border-[#111] mx-2" />
        <div className="flex flex-col lg:flex-row xl:flex-row flex-nowrap justify-between items-center space-x-auto gap-4 space-y-2 m-2 p-4">
          <h3 className="inline-flex text-md font-oswald text-slate-500 hover:text-[#111] ease-in duration-300 delay-100">
            &copy;&nbsp;2023&nbsp;&middot;&nbsp;
            <a
              href="https://yourishanvelle.dev/"
              title="Ishan Velle"
              target="_blank"
              rel="noreferrer"
            >
              Ishan&nbsp;Velle
            </a>
          </h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
