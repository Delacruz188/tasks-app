import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./components/InfoCardComponent/InfoCard";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.jsx";
import NotificationSetup from "./PushNotifications/NotificationsSetup.jsx";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Funcion para obtener los datos
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setData(JSON.stringify(response.data.results, null, 2));
      } catch (err) {
        // eslint-disable-next-line no-undef
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NotificationSetup />
      <div style={{ marginTop: "2rem" }}>
        <NavbarComponent />
      </div>
      <InfoCard data={data} />
    </div>
  );
}

export default App;
