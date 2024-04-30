import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Api from "./pages/Post/ViewAll";
import Edit from "./pages/Post/Edit";
import ViewDetails from "./pages/Post/View";
import DeletePost from "./pages/Post/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/viewall" element={<Api />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<ViewDetails />} />
        <Route path="/delete/:id" element={<DeletePost />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
