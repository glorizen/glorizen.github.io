// function to show buttons in old posts e.g. Detective Conan.
function showSpoiler(obj) {
  var randinner = obj.parentNode.getElementsByTagName("div")[0];
  if (randinner.style.display == "none") randinner.style.display = "";
  else randinner.style.display = "none";
}

function createSpoiler(nameArray) {
  // ==== ID Formatting ====
  // Base ID: 1080
  // Link ID: btn1080
  // Pane ID: pane1080

  nameArray.forEach((elem, idx) => {
    // initialization
    if (idx !== 0) {
      jQuery('#btn' + elem).fadeTo(0, 0.4);
      jQuery('#pane' + elem).hide();
    }
    // event handling
    jQuery('#btn' + elem).click(function (event) {
      event.preventDefault();
      nameArray.forEach(currElem => {
        if (jQuery('#pane' + currElem).is(':visible')) {
          jQuery('#btn' + currElem).fadeTo('fast', 0.4, function () {
            jQuery('#btn' + elem).fadeTo('fast', 1.0);
          });
          jQuery('#pane' + currElem).fadeOut('medium', function () {
            jQuery('#pane' + elem).slideDown('slow');
          });
          return false;
        }
      });
    });
  });
};

function imageShift(code, newImageLink) {
    const keys = [];
    const origImageLink = jQuery('#cover').attr('src');
    (new Image()).src = newImageLink; // preload the hidden image
    jQuery(document).keydown(function(event) {
            keys.push( event.keyCode );
            if ( keys.toString().indexOf(code) >= 0 ) {
                // do something when the konami code is executed
                jQuery('#cover').stop().fadeOut(function() {
                    const link = jQuery('#cover').attr('src') == origImageLink ? newImageLink : origImageLink;
                    jQuery('#cover').attr('src', link).fadeIn();
                });
                // empty the array containing the key sequence entered by the user
                keys.length = 0;
                // cache limiter
                if ( keys.toString().length >= code.length ) keys.shift();
            }
        }
    );
};
