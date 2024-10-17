function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HjdoX4hjnM":
        Script1();
        break;
      case "5XKF7wpLT43":
        Script2();
        break;
      case "6oRtlknwFMm":
        Script3();
        break;
      case "695OYckH3LZ":
        Script4();
        break;
      case "6jUXrJ6uKb9":
        Script5();
        break;
      case "6p4UpjGhd7v":
        Script6();
        break;
      case "65RSVdHduzH":
        Script7();
        break;
      case "6V6DCLpS23V":
        Script8();
        break;
      case "6kA5CV08Kiw":
        Script9();
        break;
      case "6OgW1N44TWb":
        Script10();
        break;
      case "6om28CrgCXj":
        Script11();
        break;
      case "5c3jZpXMSIi":
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

  try {
    // Retrieve values from Storyline variables, with fallbacks to prevent null errors
    var NameEntryDicteeJulien = player.GetVar('NameEntryDicteeJulien') || '';
    var EmailEntryDicteeJulien = player.GetVar('EmailEntryDicteeJulien') || '';
    var DicteeDicteeJulien = player.GetVar('DicteeDicteeJulien') || '';

    // Log values to verify they are correctly retrieved
    console.log('Name:', NameEntryDicteeJulien);
    console.log('Email:', EmailEntryDicteeJulien);
    console.log('Dictee:', DicteeDicteeJulien);

    // Append the values to the form data
    formData.append('entry.1291506743', NameEntryDicteeJulien); // 'Nom' field
    formData.append('entry.683010111', EmailEntryDicteeJulien); // 'Courriel' field
    formData.append('entry.1810203126', DicteeDicteeJulien); // 'Dictée' field

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
