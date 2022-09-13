// let generateButton = document.getElementById("generate-Button");
function generatePass() {
  document.getElementById("alert").textContent = "Click to copy to clipboard";
  let passChars = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "u",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "?",
        "+",
        "@",
        "!",
        "&",
        "$",
        "£",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ];
    let passwordLength = document.getElementById("sliderRange").value;
    let password = [];
    for (i = 0; i < 4; i++) {
        for (let r = 0; r < passwordLength; r++){
            let randomNumber = Math.floor(Math.random()*passChars.length);
            password += passChars[randomNumber];
            document.getElementById(`password-${i+1}`).textContent = password;
            // password2.textContent = password;
            // password3.textContent = password;
            // password4.textContent = password;
        }
    password = []
    }
}

function slider() {
  let sliderRange = document.getElementById("sliderRange");
  let output = document.getElementById("slider-val");
  output.textContent = sliderRange.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
sliderRange.oninput = function() {
  output.textContent = sliderRange.value;
}
}



function copyToClipBoard1() {
  /* Get the text field */
  let pass1 = document.getElementById("password-1");
  /* Select the text field */
  pass1.textContent;
  // pass1.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text insi3e the text field */
  navigator.clipboard.writeText(pass1.textContent);
  /* Alert the copied text */
  document.getElementById("alert").value = "Copied to clipboard!";
  document.getElementById("alert").style.color = "red";
}

function copyToClipBoard2() {
  let pass2 = document.getElementById("password-2");
  //Select the text field
  pass2.textContent;
   // Copy the text inside the text field
  navigator.clipboard.writeText(pass2.textContent);
  /* Alert the copied text */
  document.getElementById("alert").value = "Copied to clipboard!";
  document.getElementById("alert").style.color = "red";
}

function copyToClipBoard3() {
  //Select the text field
  let pass3 = document.getElementById("password-3");
  pass3.textContent;
   // Copy the text inside the text field
  navigator.clipboard.writeText(pass3.textContent);
  /* Alert the copied text */
  document.getElementById("alert").value = "Copied to clipboard!";
  document.getElementById("alert").style.color = "red";
}

function copyToClipBoard4() {
  //Select the text field
  let pass4 = document.getElementById("password-4");
  pass4.textContent;
   // Copy the text inside the text field
  navigator.clipboard.writeText(pass4.textContent);
  /* Alert the copied text */
  document.getElementById("alert").value = "Copied to clipboard!";
  document.getElementById("alert").style.color = "red";
}
