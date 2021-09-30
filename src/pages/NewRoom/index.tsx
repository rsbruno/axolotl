import { FormEvent } from "react"
import { Link, useHistory } from "react-router-dom"

import Illustration from "../../assets/svg/Illustration.svg"
import { Button } from "../../components/Button"
import Logo from "../../assets/svg/Logo.svg"

import "./styles.scss"
import "./styles480p.scss"
import { useAuth } from "../../contexts/auth"
import { useState } from "react"
import { database } from "../../services/firebase"

export function NewRoom() {

    const { user } = useAuth()

    const history = useHistory();

    const [newRoom, setNewRoom] = useState("");

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if (newRoom.trim() === "") {
            return;
        }

        const roomRef = database.ref("rooms")

        const firebaseRoom = await roomRef.push({
            title:newRoom,
            authorUid: user?.uid
        })

        history.push(`/room/${firebaseRoom.key}`)
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

                    <h2>Crie uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input type="text"
                            placeholder="Nome da Sala"
                            onChange={text => setNewRoom(text.target.value)}
                            value={newRoom}
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