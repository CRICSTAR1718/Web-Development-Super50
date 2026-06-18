import { useState } from "react";

function App() {
  const [name, setName] = useState("Yash");
  function handleChange(e){
    const val = e.target.value;
    console.log(val);
    setName(val);
  };
  return (
    <div>
      <input onChange={handleChange} value={name}/>
      <h1>Name:{name}</h1>
    </div>
  );
}
export default App;