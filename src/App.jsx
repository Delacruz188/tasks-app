import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import ListComponent from "./components/ListComponent/ListComponent";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        // setData(JSON.stringify(response.data.results, null, 2));
        console.log(response.data.results);
      } catch (err) {
        // setError(err.message);
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return <ListComponent nombre={"informacion desde el padre"} />;
}

export default App;
