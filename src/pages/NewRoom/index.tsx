import Illustration from "../../assets/svg/Illustration.svg"
import Logo from "../../assets/svg/Logo.svg"
import { Button } from "../../components/Button"

import "./styles.scss"
import "./styles480p.scss"

export function NewRoom() {
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
                    <h2>Crie uma nova sala</h2>
                    <form>
                        <input type="text"
                            placeholder="Nome da Sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <a href="#">Clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}