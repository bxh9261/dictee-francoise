function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5knkfNSIchH":
        Script1();
        break;
      case "5yuzGezUwpM":
        Script2();
        break;
      case "5q3N8qcde3g":
        Script3();
        break;
      case "6PpGCQrB73u":
        Script4();
        break;
      case "5zqEtMVCmPA":
        Script5();
        break;
      case "6Y924bP5KDs":
        Script6();
        break;
      case "5X4pEm0z3hA":
        Script7();
        break;
      case "6hz2v14KGHz":
        Script8();
        break;
      case "5pPyYt4Uwnc":
        Script9();
        break;
      case "5jXSadPCtSb":
        Script10();
        break;
      case "6Qrs4rVvV4c":
        Script11();
        break;
      case "5VAGNcrTKaH":
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
  // The form URL for submission (keep '/formResponse' at the end)
  var formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScdcbTlB_a37L9GAvdne6NhGugbLWgJv_LZnApj40A-Y22eUw/formResponse';

  // Create the FormData object to hold the values that will be sent
  var formData = new FormData();

	console.log('Player object:', player);
	if (!player) {
	  console.error('Player object is not available.');
	  return;
	}

  try {
    // Retrieve values from Storyline variables, with fallbacks to prevent null errors
    var NameEntryDicteeJulien = player.GetVar('NameEntryDicteeFrancoise') || '';
    var EmailEntryDicteeJulien = player.GetVar('EmailEntryDicteeFrancoise') || '';
    var DicteeDicteeJulien = player.GetVar('DicteeDicteeFrancoise') || '';

    // Log values to verify they are correctly retrieved
    console.log('Name:', NameEntryDicteeFrancoise);
    console.log('Email:', EmailEntryDicteeFrancoise);
    console.log('Dictee:', DicteeDicteeFrancoise);

    // Append the values to the form data
    formData.append('entry.1291506743', NameEntryDicteeFrancoise); // 'Nom' field
    formData.append('entry.683010111', EmailEntryDicteeFrancoise); // 'Courriel' field
    formData.append('entry.1810203126', DicteeDicteeFrancoise); // 'Dictée' field

    // Submit the form using fetch API
    fetch(formURL, {
      method: 'POST',
      mode: 'no-cors', // Prevent CORS issues
      body: formData
    })
    .then(response => {
      // Check if response status is OK (though in no-cors mode, it won't provide full details)
      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.warn('Form submission may have encountered an issue.');
      }
    })
    .catch(error => {
      console.error('Error submitting the form: ', error);
    });

  } catch (error) {
    // Catch and log any unexpected errors
    console.error('Error processing form data: ', error);
  }
}

// Trigger this function when needed within Storyline, such as after clicking a button
submitGoogleForm();


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
