function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qeu1NOg7qi":
        Script1();
        break;
      case "6oINbauhtaL":
        Script2();
        break;
      case "5xmV4bZGbqa":
        Script3();
        break;
      case "60rIwAf1mqT":
        Script4();
        break;
      case "5phHvBEEKug":
        Script5();
        break;
      case "6OswmaL3Lda":
        Script6();
        break;
      case "5pv11H2veaL":
        Script7();
        break;
      case "5jMqHzNYqRL":
        Script8();
        break;
      case "5ybGvmk6eTE":
        Script9();
        break;
      case "6L6OYJnh28E":
        Script10();
        break;
      case "6RC9i6wWDhs":
        Script11();
        break;
      case "5sNfe5IMDzF":
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
  var NameEntryDicteeJulien = player.GetVar('NameEntryDicteeJulien') || '';
  var EmailEntryDicteeJulien = player.GetVar('EmailEntryDicteeJulien') || '';
  var DicteeDicteeJulien = player.GetVar('DicteeDicteeJulien') || '';

  console.log('Name:', NameEntryDicteeJulien);
  console.log('Email:', EmailEntryDicteeJulien);
  console.log('Dictee:', DicteeDicteeJulien);

  // If variables are empty, stop and log an error
  if (!NameEntryDicteeJulien && !EmailEntryDicteeJulien && !DicteeDicteeJulien) {
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
      'entry.1291506743': NameEntryDicteeJulien, // Name field
      'entry.683010111': EmailEntryDicteeJulien, // Email field
      'entry.1810203126': DicteeDicteeJulien     // Dictee field
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
