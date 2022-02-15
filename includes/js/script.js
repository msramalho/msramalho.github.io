"use strict";

/**
 * duplicate left-side details into mobile view container
 */

let sideBarClone = document.getElementById("sideBarBody").cloneNode(true);
document.getElementById("duplicateOfSideBar").append(sideBarClone);

/**
 * Lazy load for iframes that have a "data-src" instead of "src"
 */
$('iframe').toArray().forEach(x => $(x).attr("src", $(x).attr("data-src")))