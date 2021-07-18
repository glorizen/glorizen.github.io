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
