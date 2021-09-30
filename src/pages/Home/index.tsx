import { useHistory } from "react-router-dom"

import Illustration from "../../assets/svg/Illustration.svg"
import { Button } from "../../components/Button"
import Logo from "../../assets/svg/Logo.svg"

import "./index.scss"
import "./index480p.scss"
import { signInWithGooglePopup, useAuth, User } from "../../contexts/auth"

export function Home() {

    const history = useHistory();

    const {user,setUser} = useAuth();


    async function handleCreateRoom() {

        if(!user){
            const response = await signInWithGooglePopup()
            setUser(response as User)
        }
        history.push("/room/new")
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={Illustration} alt="Ilustração" />
                <strong>Crie Salas de Q&amp;A ao vivo </strong>
                <p>
                    Aprenda e compartilhe conhecimento
                    com outras pessoas
                </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={Logo} alt="Logo do App" />
                    <button
                        className="create-room"
                        onClick={() => handleCreateRoom()}
                    >
                        Crie uma sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na Sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}