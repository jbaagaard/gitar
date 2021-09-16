export enum NotesEnum {
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#"
}

export enum NotesColorEnum {
    "#B42354",
    "#A11F4B",
    "#C960FE",
    "#9DCA30",
    "#91BA2C",
    "#C7935B",
    "#AA7E4E",
    "#5F6CE3",
    "#5B99E6",
    "#4F84C7",
    "#3A9D70",
    "#30825C"
}

export type Note =
    "A" |
    "A#" |
    "B" |
    "C" |
    "C#" |
    "D" |
    "D#" |
    "E" |
    "F" |
    "F#" |
    "G" |
    "G#"

export enum intervalEnum {
    "Perfect unison",
    "Minor second",
    "Major second",
    "Minor third",
    "Major third",
    "Perfect fourth",
    "Tritone",
    "Perfect fifth",
    "Minor sixth",
    "Major sixth",
    "Minor seventh",
    "Major seventh",
    "Perfect octave"
}

export interface Chord {
    name:string,
    intervals:number[]
}

export interface RelativeNote {
    note:Note
    octave:number
}

export interface StringInstrument {
    name:string
    strings: RelativeNote[],
    fretLength: number
}

export const standardGuitar: StringInstrument = {
    name:"guitar(E,A,D,G,B,E)",
    strings: [
        {note:"E",octave:4},
        {note:"B",octave:3},
        {note:"G",octave:3},
        {note:"D",octave:3},
        {note:"A",octave:2},
        {note:"E",octave:2}
    ],
    fretLength: 15
}

export const ukulele: StringInstrument = {
    name:"ukulele(tenor)",
    strings: [
        {note:"G",octave:4},
        {note:"C",octave:4},
        {note:"E",octave:4},
        {note:"A",octave:4},
    ],
    fretLength: 17
}

export const StringInstrumentArray:StringInstrument[] = [
    standardGuitar,
    ukulele
]