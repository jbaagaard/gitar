import {Note, NotesColorEnum, NotesEnum, RelativeNote} from "../../../../models/music"
import * as S from "./NoteComponent.styled"

interface NoteProps{
    note:RelativeNote
    NoteTextVisible:boolean
    active:boolean
    firstNote:boolean
    onClick:(note:RelativeNote,NoteTextVisible:boolean)=>void
}
const NoteComponent = ({note,active,NoteTextVisible,firstNote,onClick}:NoteProps) => {

    function handleClick() {
        onClick(note,NoteTextVisible)
    }

    return (
        <S.Wrapper firstNode={firstNote}>
            {!firstNote && <S.MiddleLine/>}
            {<S.Note bgc={NotesColorEnum[NotesEnum[note.note]]} active={active} visible={NoteTextVisible} onClick={handleClick}>
                {NoteTextVisible && note.note}
            </S.Note>}
        </S.Wrapper>
    )
}

export default NoteComponent