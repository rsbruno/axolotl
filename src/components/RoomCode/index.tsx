import "./styles.scss"

type RoomCodeProps = {
    code: string;
}

export function RoomCode({ code }: RoomCodeProps) {
    function copyRoomCodeToClipBoard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <button
            className="room-code"
            onClick={copyRoomCodeToClipBoard}
        >
            <div>

            </div>
            <span>Sala #{code}</span>
        </button>
    );
}