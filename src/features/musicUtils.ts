import {Note, NotesEnum, RelativeNote, StringInstrument} from "../models/music";
import {NoteWithString} from "./instruments/Fretboard";

export function relativeNoteToNumber(note:RelativeNote){
    return NotesEnum[note.note]+(note.octave*12);
}

export function numberToRelativeNote(n:number):RelativeNote{
    return {note:NotesEnum[n % 12] as Note,octave:Math.floor(n/12)}
}

export function addNotes(note: Note, amount: number): Note {
    return NotesEnum[(NotesEnum[note] + amount) % 12] as Note
}

export function addNotesRelative(note: RelativeNote, amount: number): RelativeNote {
    return numberToRelativeNote(relativeNoteToNumber(note)+amount)
}


export function getNotesInterval(note: Note, amount: number): Note[] {
    const notes: Note[] = [note]
    for (let i = 0; i < amount; i++) {
        notes.push(addNotes(notes[notes.length - 1], 1))
    }
    return notes
}

export function getRelativeNotesInterval(note: RelativeNote, amount: number): RelativeNote[] {
    const notes: RelativeNote[] = [note]
    for (let i = 0; i < amount; i++) {
        const n: RelativeNote = {note: notes[notes.length - 1].note, octave: notes[notes.length - 1].octave}
        if (n.note === "G#") {
            n.note = "A";
            n.octave = n.octave + 1
        } else
            n.note = addNotes(n.note, 1);
        notes.push(n)
    }
    return notes
}

export function getRandomNoteFromStringInstrument(instrument: StringInstrument, amount:number): NoteWithString {
    const isIndex = Math.floor(Math.random() * instrument.strings.length)
    const is = instrument.strings[isIndex]
    const randomAmount = Math.floor(Math.random()*amount)+1
    return {
        string:is,
        note:addNotesRelative(is,randomAmount)
    }

}