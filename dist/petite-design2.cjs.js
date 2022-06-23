'use strict';

// petite designer
function setStyleUsingSelector(selector, options) {
  var elements = document.querySelectorAll(selector); // detect shadow type

  if (options.shadow_type === 'hard') {
    options.shadow_type = '0px';
  } else {
    options.shadow_type = '15px';
  }

  elements.forEach(function (element) {
    // add shadow to the element 
    element.style.boxShadow = "10px 10px ".concat(options.shadow_type, " rgba(0,0,0,0.12)"); // set padding

    if (options.padding) {
      element.style.padding = '1em';
    } // set margin


    if (options.margin) {
      element.style.margin = '1em';
    } // set backgrond color


    if (options.backgroundColor) {
      element.style.backgroundColor = options.backgroundColor;
    }
  });
}

function addEventUsingSelector(selector, event, callback) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    // add event listener
    element.addEventListener(event, callback);
  });
}

function hideUsingSelector(selector) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function (element) {
    // hide element by display property
    element.style.display = 'none';
  });
}

if (typeof exports != 'undefined') {
  exports.setStyleUsingSelector = setStyleUsingSelector;
  exports.addEventUsingSelector = addEventUsingSelector;
  exports.hideUsingSelector = hideUsingSelector;
}
