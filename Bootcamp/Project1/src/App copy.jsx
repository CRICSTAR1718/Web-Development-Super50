import { useState } from "react";

// function App() {
  
//   let count = 0;
//   function handleClick() {
//     count++;
//     console.log(count);
//   };
//   return (
//     <div>
//       <h1>Hello {count}</h1>
//       <button  onClick={handleClick}>Click</button>
//     </div>
//   );
// }


// If state is changed---> re-render
// function App() {
//   const [screen, remote] = useState(0);
//   let count = 0;
//   console.log("rendered-value: ", screen);
//   function handleClick() {
//     count++;
//     remote(screen + 1);   //noted
//     console.log(screen);
//   };
//   console.log("Count: ",count);
//   return (
//     <div>
//       <h1>Hello {screen}</h1>
//       <button  onClick={handleClick}>Click</button>
//     </div>
//   );
// }

function App() {
  const [screen, remote] = useState(0);
  function handleChange() {
    remote(screen);   //noted
    console.log(screen);
  };
  return (
    <div>
      <h1>Hello {screen}</h1>
      <input type="text"  />
      <button onClick={handleChange}>Click</button>
    </div>
  );
}

export default App;