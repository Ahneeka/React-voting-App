import "./styles/style.css";
import "./styles/media-queries.css";
import Card from "./components/card";
import contestants from "./data/contestants";
import { useState } from "react";

function App() {
  const [data, setData] = useState(contestants);

  const handleClick = (index) => {
    console.log("Clicked on ", index);
    setData((prev)=>{

    });
  };

  return (
    <div id="app">
      <div className="app-overlay"></div>

      {/* header */}
      <header>
        <div className="logo">
          <iconify-icon icon="ic:baseline-outlined-flag"></iconify-icon>
          <h1>Nigeria Election</h1>
        </div>
      </header>

      {/* main */}
      <main>
        <div className="cards">
          {data.map((contestant, index) => (
            <Card
              key={index}
              data={contestant}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
