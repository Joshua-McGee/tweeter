$(document).ready(function() {
  // --- our code goes here ---
  console.log("Jquery composer-char-counter is being loaded");

  $("#a-tweet").on('keyup', function(event) {
    // this gets our textboxt value's length
    let lengthOfText = $(this).val().length;
    // we then look at the sibling class .counter and set the text to be 140 - LengthOfText
    const charCountOK = $(this).siblings('.counter').text(140 - lengthOfText);
    let charCountColor = charCountOK;

    if (lengthOfText > 140) {
      //return console.log('im less than 0');
      const charCountNotOk = $(this).siblings(".counter").addClass("red-counter");
      charCountColor = charCountNotOk;
    } 
     else if (charCountColor === charCountOK) {
      charCountColor = $(this).siblings(".counter").removeClass("red-counter");
    }
    return charCountColor;
    
  });
});
