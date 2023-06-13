import logo from "./logo.svg";
import "./App.css";
import MyMap from "./components/Map/MyMap";
import ClientPageHeader from "./components/Map/ClientPageHeader";

function App() {
  return (
    <div className="App">
      <ClientPageHeader />
      <div id="map-content">
        <h1 style={{ textDecoration: 'underline' }}>
          Projects executed by DCE across Indian Subcontinent *
        </h1>
        <p>
          Map below highlights the range of refrigeration projects executed by DCE
          by all over India as well as neighboring countries in various sectors
        </p>
        <MyMap></MyMap>
      </div>
    </div>
  );
}

export default App;
