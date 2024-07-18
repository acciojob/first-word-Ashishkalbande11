function firstWord(s) {
  // your code here
	if(s === '') return s;
	s =
		s.trim();
	

	const ind = s.indexOf(' ');
	if(ind === -1) {
		return s;
	}

	return s.slice(0, ind);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
