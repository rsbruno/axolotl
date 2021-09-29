import Illustration from "../../assets/svg/Illustration.svg"
import Logo from "../../assets/svg/Logo.svg"
import { Button } from "../../components/Button"

import "./index.scss"
import "./index480p.scss"

export function Home() {
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