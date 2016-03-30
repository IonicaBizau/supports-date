"use strict";

let supports = null;

/**
 * supportsDate
 * Checks if the date input is supported by the browser.
 *
 * @name supportsDate
 * @function
 * @returns {Boolean} `true` if the date input is supported. `false` otherwise.
 */
// http://stackoverflow.com/a/10199306/1420197
module.exports = function supportsDate() {

    if (supports !== null) { return supports; }

    let input = document.createElement("input");
    input.setAttribute("type", "date");

    let notADateValue = "not-a-date";
    input.setAttribute("value", notADateValue);

    supports = input.value !== notADateValue;
    return supports;
};
