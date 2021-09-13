import * as S from "./FretBoard.styled"
import {Note, RelativeNote, StringInstrument} from "../../../models/music";
import {getRelativeNotesInterval} from "../../musicUtils";
import NoteComponent from "./Note";
import {isEqual} from "lodash";

export interface NoteWithString {
    note: RelativeNote
    string: RelativeNote
}

interface FretBoardProps {
    instrument: StringInstrument;
    activeNote: NoteWithString;
    visibleNotes: NoteWithString[];
    showAll?: boolean
    onChange:(note:NoteWithString,NoteTextVisible:boolean)=>void
}


const FretBoard = ({instrument, activeNote, visibleNotes, showAll,onChange}: FretBoardProps) => {
    function handleNoteClick(note: RelativeNote,string:RelativeNote,NoteTextVisible:boolean) {
        onChange({note, string},NoteTextVisible)
    }

    return (
        <S.Wrapper>
            <S.Board>
                {instrument.strings.map(s =>
                    <S.String key={instrument.name + s.note + s.octave}>
                        {getRelativeNotesInterval(s, instrument.fretLength).map((n, i) =>
                            <NoteComponent active={isEqual(s, activeNote.string) && isEqual(n, activeNote.note)}
                                           NoteTextVisible={showAll || !!visibleNotes.find(vn => isEqual(s, vn.string) && isEqual(n, vn.note))}
                                           onClick={(note,NoteTextVisible)=>{handleNoteClick(note,s,NoteTextVisible)}} firstNote={i === 0} note={n}
                                           key={instrument.name + s.note + n.note + n.octave}/>
                        )}
                    </S.String>
                )}
            </S.Board>

        </S.Wrapper>
    )
}

export default FretBoard