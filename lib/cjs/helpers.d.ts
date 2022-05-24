import { Note, AlterationEnum, DiatonicNoteEnum } from "./types";
export declare function getNoteFromInterval(note: Note, interval: number): DiatonicNoteEnum;
export declare function getPreviousAlteration(needle: AlterationEnum): AlterationEnum;
export declare function getNextAlteration(needle: AlterationEnum): AlterationEnum;
