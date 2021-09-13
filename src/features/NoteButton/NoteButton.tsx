import * as S from "./NoteButton.styled"
import {Note, NotesColorEnum, NotesEnum, RelativeNote} from "../../models/music";

interface NoteButtonProps{
    note:Note
    onClick:(note:Note)=>void
}
const NoteButton = ({note,onClick}:NoteButtonProps) => {

    function handleClick() {
        onClick(note);
    }

    return (
        <S.Button active={false} visible={true} bgc={NotesColorEnum[NotesEnum[note]]} onClick={handleClick}>
            {note}
        </S.Button>
    )
}

export default NoteButton