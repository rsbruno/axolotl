import { useParams } from "react-router-dom"
import Logo from "../../assets/svg/Logo.svg"
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";

import "./styles.scss"

type RoomParams = {
    id:string;
}

export function Room() {

    const params = useParams<RoomParams>();

    return (
        <div id="page_room">
            <header>
                <div className="content">
                    <img src={Logo} alt="Logo" />
                    <RoomCode code={params.id} />
                </div>
            </header>
            <main className="content">
                <div className="room_title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form>
                    <textarea placeholder="o que você quer perguntar" />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta <button>faça seu login</button></span>
                        <Button type="submit">Enviar Pergunta</Button>
                    </div>
                </form>

            </main>
        </div>
    );
}