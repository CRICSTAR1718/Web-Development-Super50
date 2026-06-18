import { useEffect, useState } from "react";

function App()
{
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  console.log("DATA-------->", data);
  console.log("TEXt----->", text);
  async function getData() {
    try {
      const resp = await fetch(`https://dummyjson.com/products/search?q=${text}`);
      if (resp.ok)
      {
        const res = await resp.json();
        setData(res.products);
      }
      else {
        alert("Something went wrong");
      }
    }
    catch (err)
    {
      alert(err.message);
    }
  }
  const handleChange = (e) => {
    const res = e.target.value;
    setText(res);
  }
  useEffect(() => {
    getData();
  }, [text]);
  // setTimeout(() => {
  //   alert("TIMEOUT");
  // }, 10000);
  return (
    <div>
      <div>
        <input onChange={handleChange} />
      </div>
      <div>
        {
          data.map((elem) => {
            return (
              <div>
                <h1>{elem.title}</h1>
                <img src={elem.thumbnail} />
                <p>Price: { elem.price}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;