import { BrowserRouter, Route } from "react-router-dom"

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/room/new" component={NewRoom} />
        <Route path="/" exact component={Home} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
