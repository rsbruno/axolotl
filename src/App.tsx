import { BrowserRouter, Route } from "react-router-dom"

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { AuthProvider, User } from "./contexts/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./services/firebase";

function App() {

  const [user, setUser] = useState<User>(undefined)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, photoURL, uid } = user

        if (!displayName || !photoURL)
          throw new Error("Faltando informações")

        setUser({ uid, displayName, email, photoURL } as User);
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider value={user}>
        <Route path="/room/new" component={NewRoom} />
        <Route path="/" exact component={Home} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
