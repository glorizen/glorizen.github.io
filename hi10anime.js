// function to show buttons in old posts e.g. Detective Conan.
function showSpoiler(obj) {
  var randinner = obj.parentNode.getElementsByTagName("div")[0];
  if (randinner.style.display == "none") randinner.style.display = "";
  else randinner.style.display = "none";
}

jQuery(function($) {
  // ==== ID Formatting ====
  // Base ID: 1080
  // Link ID: btn1080
  // Pane ID: pane1080
  var SpoilerHelper = {
    create: function (nameArray) {
      $.each(nameArray, function (x, baseID) {
        // initialization
        if (x !== 0) {
          $('#btn' + baseID).fadeTo(0, 0.4);
          $('#pane' + baseID).hide();
        }
        // event handling
        $('#btn' + baseID).click(function (event) {
          event.preventDefault();
          $.each(nameArray, function (y, currID) {
            if ($('#pane' + currID).is(':visible')) {
              $('#btn' + currID).fadeTo('fast', 0.4, function () {
                $('#btn' + baseID).fadeTo('fast', 1.0);
              });
              $('#pane' + currID).fadeOut('medium', function () {
                $('#pane' + baseID).slideDown('slow');
              });
              return false;
            }
          });
        });
      });
    }
  };
  SpoilerHelper.create(['S3', 'S1', 'S2', 'Movies']);
  SpoilerHelper.create(['S1a', 'S1b']);
  SpoilerHelper.create(['S2a', 'S2b']);
});
