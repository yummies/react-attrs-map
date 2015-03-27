'use strict';

var data = require('./data');

/**
 * Filter react props allowed only for a specific tag.
 *
 * @see https://facebook.github.io/react/docs/tags-and-attributes.html
 * @see https://facebook.github.io/react/docs/events.html
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 *
 * @param {String} tag
 * @return {Array}
 */
module.exports = function(tag) {
    var out = [];

    Object.keys(data).forEach(function(prop) {
        if (data[prop].indexOf(tag) >= 0) {
            out.push(prop);
        }
    });

    return out;
};
