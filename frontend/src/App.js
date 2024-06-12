import {Routes,Route} from "react-router-dom"
import Register from "./Components/Auth/RegisterPage";
import Login from "./Components/Auth/LoginPage.js";
import Pagenotfound from "./Components/Pagenotfound.js";
import Dashboard from "./Components/UserDashboard.js"
import CreateProduct from "./Components/CreateProduct.js";
import Product from "./Components/UserProduct.js";
import ReferedUser from "./Components/ReferedUser.js";
import Referal_User from "./Components/Referal_User.js";
import PrivateRoute from "./Routes/Private.js";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute/>} >
           <Route path="" element={<Product/>} />
           <Route path="dashboard" element={<Dashboard/>} />
           <Route path="dashboard/create-product" element={<CreateProduct/>} />
           <Route path="dashboard/refered_users" element={<ReferedUser/>} />
           <Route path="dashboard/:id" element={<Referal_User/>} />
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Pagenotfound/>} />

      </Routes>
    </>
  );
}

export default App;
