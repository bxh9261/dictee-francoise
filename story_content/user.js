function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hwU7deF9m8":
        Script1();
        break;
      case "6KKhlzWBKxS":
        Script2();
        break;
      case "6HoIp9FgZD5":
        Script3();
        break;
      case "5mRjQK7bEGQ":
        Script4();
        break;
      case "6Eg4dSJCeo2":
        Script5();
        break;
      case "5fnN00zH3Yh":
        Script6();
        break;
      case "6prUt0tql0z":
        Script7();
        break;
      case "5tpFpax4Hes":
        Script8();
        break;
      case "6ce6PEkNb81":
        Script9();
        break;
      case "5eelRUyjiMh":
        Script10();
        break;
      case "6Fw9dcsV0bo":
        Script11();
        break;
      case "6mtMfqBjHGs":
        Script12();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function submitGoogleForm() {
  // Ensure the Storyline player object is available
  var player = GetPlayer();

  if (!player) {
    console.error('Storyline player not available!');
    return;
  }

  // Retrieve values from Storyline variables with fallbacks
  var NameEntryDicteeFrancoise = player.GetVar('NameEntryDicteeFrancoise') || '';
  var EmailEntryDicteeFrancoise = player.GetVar('EmailEntryDicteeFrancoise') || '';
  var DicteeDicteeFrancoise = player.GetVar('DicteeDicteeFrancoise') || '';

  console.log('Name:', NameEntryDicteeFrancoise);
  console.log('Email:', EmailEntryDicteeFrancoise);
  console.log('Dictee:', DicteeDicteeFrancoise);

  // If variables are empty, stop and log an error
  if (!NameEntryDicteeFrancoise && !EmailEntryDicteeFrancoise && !DicteeDicteeFrancoise) {
    console.error('Variables are empty. Please ensure they are set correctly in Storyline.');
    return;
  }

  // Submit the form using the Google Apps Script Web App URL
  fetch('https://script.google.com/macros/s/AKfycbwjSGjdnt58dqi8yF-Cv0xpF7Uv8OEaUsxa_i0U_esFsLEX2nzn0T7zAT-_eti9Y4eD/exec', {
    method: 'POST',
    mode: 'no-cors', // Prevent CORS issues
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'entry.1291506743': NameEntryDicteeFrancoise, // Name field
      'entry.683010111': EmailEntryDicteeFrancoise, // Email field
      'entry.1810203126': DicteeDicteeFrancoise     // Dictee field
    })
  })
  .then(response => {
    console.log('Form submitted successfully!');
  })
  .catch(error => {
    console.error('Error submitting the form:', error);
  });
}

// Add a timeout to ensure the player and variables are ready
setTimeout(submitGoogleForm, 2000);


}

window.Script2 = function()
{
  var specialCharacter = "À";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);


}

window.Script3 = function()
{
  var specialCharacter = "à";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script4 = function()
{
  var specialCharacter = "É";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script5 = function()
{
  var specialCharacter = "Ê";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script6 = function()
{
  var specialCharacter = "é";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script7 = function()
{
  var specialCharacter = "è";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script8 = function()
{
  var specialCharacter = "ê";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script9 = function()
{
  var specialCharacter = "ë";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script10 = function()
{
  var specialCharacter = "û";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script11 = function()
{
  var specialCharacter = "ù";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

window.Script12 = function()
{
  var specialCharacter = "ç";
var currentValue = GetPlayer().GetVar("DicteeDicteeFrancoise");
GetPlayer().SetVar("DicteeDicteeFrancoise", currentValue + specialCharacter);

}

};
