"use strict"

let db = require("./db-calls.js");
let writeType = require("./type");

let parkTypes = {};

let writeTypeToDOM = () => {
    db.fetchTypes()
        .then((result) => {
            parkTypes = result
            parkTypes.forEach(key => {
                document.getElementById("attractionTypes").innerHTML += writeType.writeType(key.name);
            })
        })
};

module.exports = writeTypeToDOM