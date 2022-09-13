import "./App.css";
import { Input } from "./Input";
import { Card } from "./Card";

function App() {
  const citiesList = ["New York", "Minsk", "London"];
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        {citiesList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
