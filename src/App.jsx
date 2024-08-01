import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./components/InfoCardComponent/InfoCard";

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
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return <InfoCard data={data} />;
}

export default App;
