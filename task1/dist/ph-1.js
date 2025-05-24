"use strict";
{
    function formatString(input, toUpper = true) {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }
    formatString("Hello");
    formatString("Hello", true);
    formatString("Hello", false);
}
