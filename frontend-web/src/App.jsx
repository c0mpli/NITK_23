import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login";
import Listing from "./pages/Listing/Listing";
import { useAuthContext } from "./hooks/useAuthContext";
import Itenary from "./pages/Itenary";
import Chat from "./components/Chat/Chat";
import Chatroom from "./pages/Chatroom";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/listing"} element={<Listing />} />

          <Route path={"/login"} element={<Login />} />
          <Route path={"/itenary"} element={<Itenary />} />
          <Route path={"/chatroom"} element={<Chat />} />

          {/* <Route path={"/connect"} element={<Connect />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
