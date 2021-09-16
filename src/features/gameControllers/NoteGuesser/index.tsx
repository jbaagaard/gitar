import * as S from "./NoteGuesser.styled"
import FretBoard, {NoteWithString} from "../../instruments/Fretboard";
import {standardGuitar, Note} from "../../../models/music";
import React, {useEffect, useState} from "react";
import {isEqual} from "lodash";
import {addNotesRelative, getNotesInterval, getRandomNoteFromStringInstrument} from "../../musicUtils";
import NoteButton from "../../NoteButton/NoteButton";

interface NoteGuesserProps {

}

const NoteGuesser = ({}: NoteGuesserProps) => {
    const [activeNote, setActiveNote] = useState<NoteWithString>(getRandomNoteFromStringInstrument(standardGuitar,6))
    const [visibleNotes, setVisibleNotes] = useState<NoteWithString[]>([])
    const [comboMeter, setComboMeter] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const [hit, setHit] = useState(0)
    const [missed, setMissed] = useState(0)
    useEffect(randomActiveNote,[])

    function randomActiveNote() {
        const rn = getRandomNoteFromStringInstrument(standardGuitar, 6);
        setActiveNote(rn);
    }

    function handleNoteClick(note: NoteWithString, NoteTextVisible: boolean) {
        if (NoteTextVisible)
            setVisibleNotes(visibleNotes.filter(vn => !isEqual(vn, note)))
        else
            setVisibleNotes([...visibleNotes, note])
    }

    function handleNoteButtonCLicked(note: Note) {
        if (activeNote.note.note === note){
            randomActiveNote();
            setHit(hit+1)
            setComboMeter(true);
        }
        else
            setMissed(missed+1)
    }

    return (
        <S.Wrapper>
            <S.LoadingWrapper>
                <S.ComboMeter/>
            </S.LoadingWrapper>
            <button onClick={()=>{setShowAll(!showAll)}}>showall</button>
            <S.FretBoardWrapper>
                <FretBoard instrument={standardGuitar} activeNote={activeNote} visibleNotes={visibleNotes} showAll={showAll}
                           onChange={handleNoteClick}/>
            </S.FretBoardWrapper>

            <S.NoteButtons>
                {getNotesInterval("A", 11).map(n =>
                    <S.NoteButtonWrapper key={"button" + n}>
                        <NoteButton note={n} onClick={handleNoteButtonCLicked}/>
                    </S.NoteButtonWrapper>
                )}
            </S.NoteButtons>
            <S.Stats>
                <S.Stat>
                    <S.StatsTitle>Hit</S.StatsTitle>
                    <S.StatsText>{hit}</S.StatsText>
                </S.Stat>
                <S.Stat>
                    <S.StatsTitle>Missed</S.StatsTitle>
                    <S.StatsText>{missed}</S.StatsText>
                </S.Stat>
            </S.Stats>

        </S.Wrapper>
    )
}

export default NoteGuesser