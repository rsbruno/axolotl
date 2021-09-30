import { Link } from "react-router-dom"

import Illustration from "../../assets/svg/Illustration.svg"
import { Button } from "../../components/Button"
import Logo from "../../assets/svg/Logo.svg"

import "./styles.scss"
import "./styles480p.scss"
import { useAuth } from "../../contexts/auth"

export function NewRoom() {

    const { user } = useAuth()

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
                    {user
                        ? <h2>{user.displayName}</h2>
                        : false
                    }

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
                        Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}