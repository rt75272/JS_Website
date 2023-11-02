// Party mode is off by default
let partyMode = false;

// Generates a random 6 digit hex string
const randomColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    // We use the Math object to generate a random number between 0
    // and 1
    const random = Math.random();

    // We can multiply to get random numbers up to 16
    const bit = (random * 16) | 0;

    // The Number object overrides the toString method of the Object
    // object
    // The toString method takes an optional radix value
    // A radix (base) of 16 can output hex values 0-f
    color += bit.toString(16);
  };
  return color;
};

// Gets our elements of interest and applies a new inline-style fill
// attribute to each with a value from our randomColor function
const updateColor = () => {
  document.getElementById("logo-bg").style.fill = randomColor();
  document.getElementById("logo-letters").style.fill = randomColor();
}

// Toggles Party Mode
const getPartyStarted = () => {
  // if party mode is off, turn it on and call our updateColor
  // function on a 250ms interval
  if (!partyMode) {
    partyMode = true;
    strobe = setInterval(() => {
      updateColor();
    }, 250);
  }
  // if party mode is on, call our restore function
  else {
    restore();
  }
}

// Turns party mode off, clear the interval function, and restore
// default colors to our svg elements
const restore = () => {
  partyMode = false;
  clearInterval(strobe);
  document.getElementById("logo-bg").style.fill = '#eed94d';
  document.getElementById("logo-letters").style.fill = '#111111';
}
