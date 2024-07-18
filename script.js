function firstWord(s) {
  // your code here
	let ind;
    for (let ch in s) {
        if (s[ch] === " ") {
            ind = ch;
            break;
        }
    }
    return s.substring(0, ind);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
