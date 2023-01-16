// ==UserScript==
// @name         Eurohandball
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Automaticky přesměruje z detailu zápasu do live url.
// @author       Martin Kaprál
// @match        https://www.eurohandball.com/en/matches/*
// @match        https://*.eurohandball.com/*/*/matches/details/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eurohandball.com
// @grant        none
// ==/UserScript==

(function() {
'use strict';
    if (window.location.href.match(/ehfcl/))
    {
var urlLink = window.location.href;
var matchID = urlLink.match(/[0-9]+/g)[2];

window.location.replace("https://ticker.ehfcl.com/Home/Index/" + matchID);

    }
     if (window.location.href.match(/ehfel/))
    {
var urlLink = window.location.href;
var matchID = urlLink.match(/[0-9]+/g)[2];

window.location.replace("https://ticker.ehfcl.com/Home/Index/" + matchID);
    }
    if (window.location.href.match(/www/))
    {
var urlLink = window.location.href;
var matchID = urlLink.match(/[0-9]+/);

window.location.replace("https://ticker.ehfcl.com/Home/Index/" + matchID);
    }
    if (window.location.href.match(/ehfec/))
    {
var urlLink = window.location.href;
var matchID = urlLink.match(/[0-9]+/g)[2];

window.location.replace("https://ticker.ehfcl.com/Home/Index/" + matchID);
    }
})();
