import { BrowserRouter, Routes, Route } from "react-router";

function App()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/search" element={<h1>Search</h1>}></Route>
          <Route path="/view:productId" element={<h1>View</h1>}></Route>
          <Route path="*" element={<h1>OOPS!! PAGE NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;