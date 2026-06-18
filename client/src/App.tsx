import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    const appURL = import.meta.env.VITE_API_URL;
    axios
      .get(`${appURL}/health`)
      .then((res) => setStatus(JSON.stringify(res.data)))
      .catch((err) => setStatus("error: " + err.message));
  }, []);

  return (
    <div>
      <h1>Crypto Investor Dashboard</h1>
      <p>Server status: {status}</p>
    </div>
  );
}

export default App;