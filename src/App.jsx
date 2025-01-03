import React from "react";
import { Button } from "./components/components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
      {/* configure router */}
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
