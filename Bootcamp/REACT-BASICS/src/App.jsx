import './style.css'
const data = [
  {
    title: "Toy Car",
    price: 1000,
  },

  {
    title: "Laptop",
    price: 55000,
  },

  {
    title: "Book",
    price: 499,
  }
];
function App() {
  return (
    <div>
      {
        data.map((elem) => {
          return <Card title={elem.title} price={elem.price} />
        })
      }
    </div>
  );
}
// function Card(obj) {
//   return (
//     <div className="card">
//       <h1>{obj.title}</h1>
//       <p>{obj.content}</p>
//     </div>
//   )
// }
function Card({title, price}) {
  return (
    <div className="bg-amber-300 p-4 m-6 border-b-rose-950 rounded-xl w-fit">
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  )
}
export default App
