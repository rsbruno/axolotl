import { BrowserRouter, Route, Switch } from "react-router-dom"

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { AuthProvider, User } from "./contexts/auth";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "./services/firebase";
import { Room } from "./pages/Room";

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/room/new" exact component={NewRoom} />
          <Route path="/room/:id" component={Room} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
