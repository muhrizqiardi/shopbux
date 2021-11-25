import { Routes, Route } from "react-router";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import { connect } from "react-redux";

function App() {
  return (
    <div class="bg-black text-white h-screen w-screen overflow-y-scroll">
      <div class="container flex flex-col max-w-2xl mx-auto px-3 py-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default connect()(App);

