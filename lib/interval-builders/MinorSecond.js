import { getNoteFromInterval, getPreviousAlteration } from "../helpers";
function getName(note) {
    if (note.name == "B" || note.name == "E") {
        return getNoteFromInterval(note, 1);
    }
    return getNoteFromInterval(note, 2);
}
function getAlteration(note) {
    if (note.name == "B" || note.name == "E") {
        return note.alteration;
    }
    return getPreviousAlteration(note.alteration);
}
var MinorSecond = function (note) {
    return {
        name: getName(note),
        alteration: getAlteration(note),
    };
};
export default MinorSecond;
//# sourceMappingURL=MinorSecond.js.map