const keys = [
    "c-key",
    "d-key",
    "e-key",
    "f-key",
    "g-key",
    "a-key",
    "b-key",
    "high-c-key",
    "c-sharp-key",
    "d-sharp-key",
    "f-sharp-key",
    "g-sharp-key",
    "a-sharp-key",
  ];
  const notes = [];
  keys.forEach(function (key) {
    notes.push(document.getElementById(key));
  });
    
  function keyPlay(event) {
    event.target.style.backgroundColor = "black";
  }
  
  function keyReturn(event) {
    event.target.style.backgroundColor = "";
  }
    
  function note(note) {
    note.onmousedown = keyPlay;
    note.onmouseup = keyReturn;
  }
    
  notes.forEach(note);
  
  let nextOne = document.getElementById("first-next-line");
  let nextTwo = document.getElementById("second-next-line");
  let nextThree = document.getElementById("third-next-line");
  let startOver = document.getElementById("fourth-next-line");
  
  let lastLyric = document.getElementById("column-optional");
  
  nextTwo.hidden = true;
  nextThree.hidden = true;
  startOver.hidden = true;
    
  nextOne.onclick = function () {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
  };
    
  nextTwo.onclick = function () {
    nextThree.hidden = false;
    nextTwo.hidden = true;
    document.getElementById("word-five").innerHTML = "DEAR";
    document.getElementById("word-six").innerHTML = "FRI-";
    lastLyric.style.display = "inline-block";
    document.getElementById("letter-note-three").innerHTML = "G";
    document.getElementById("letter-note-four").innerHTML = "E";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("letter-note-six").innerHTML = "B";
  };
    
  nextThree.onclick = function () {
    startOver.hidden = false;
    nextThree.hidden = true;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("word-three").innerHTML = "BIRTH";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("word-six").innerHTML = "YOU!";
    document.getElementById("letter-note-one").innerHTML = "F";
    document.getElementById("letter-note-two").innerHTML = "F";
    document.getElementById("letter-note-three").innerHTML = "E";
    document.getElementById("letter-note-four").innerHTML = "C";
    document.getElementById("letter-note-five").innerHTML = "D";
    document.getElementById("letter-note-six").innerHTML = "C";
    lastLyric.style.display = "none";
  };
  
  startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById("word-one").innerHTML = "HAP-";
    document.getElementById("letter-note-one").innerHTML = "G";
    document.getElementById("word-two").innerHTML = "PY";
    document.getElementById("letter-note-two").innerHTML = "G";
    document.getElementById("word-three").innerHTML = "BIRTH-";
    document.getElementById("letter-note-three").innerHTML = "A";
    document.getElementById("word-four").innerHTML = "DAY";
    document.getElementById("letter-note-four").innerHTML = "G";
    document.getElementById("word-five").innerHTML = "TO";
    document.getElementById("letter-note-five").innerHTML = "C";
    document.getElementById("word-six").innerHTML = "YOU!";
    document.getElementById("letter-note-six").innerHTML = "B";
  };
  