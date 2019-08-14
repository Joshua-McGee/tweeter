$(document).ready(function() {
  // --- our code goes here ---
  console.log("Jquery composer-char-counter is being loaded");

  $("#a-tweet").on('keyup', function(event) {
    // this gets our textboxt value's length
    let LengthOfText = $(this).val().length;
    // we then look at the sibling class .counter and set the text to be 140 - LengthOfText
    let charCountOK = $(this).siblings('.counter').text(140 - LengthOfText);
    let charCountColor = charCountOK;

    if (LengthOfText > 140) {
      //return console.log('im less than 0');
      let charCountNotOk = $(this).siblings(".counter").addClass("red-counter");
      charCountColor = charCountNotOk;
    } 
    if (charCountColor === charCountOK && LengthOfText < 140) {
      charCountColor = $(this).siblings(".counter").removeClass("red-counter");
    }
    return charCountColor;
    
  });
});
