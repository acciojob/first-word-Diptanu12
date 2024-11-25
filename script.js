function firstWord(s) {
    s = s.trim();
    const spaceIndex = s.indexOf(' ');
    return spaceIndex === -1 ? s : s.substring(0, spaceIndex);
}
 
const s = prompt("Enter String:");
alert(firstWord(s));
