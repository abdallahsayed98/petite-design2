(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["petite-design2"] = {}));
})(this, (function (exports) { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var src = createCommonjsModule(function (module, exports) {
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

	  {
	    exports.setStyleUsingSelector = setStyleUsingSelector;
	    exports.addEventUsingSelector = addEventUsingSelector;
	    exports.hideUsingSelector = hideUsingSelector;
	  }
	});
	var src_1 = src.setStyleUsingSelector;
	var src_2 = src.addEventUsingSelector;
	var src_3 = src.hideUsingSelector;

	exports.addEventUsingSelector = src_2;
	exports["default"] = src;
	exports.hideUsingSelector = src_3;
	exports.setStyleUsingSelector = src_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
