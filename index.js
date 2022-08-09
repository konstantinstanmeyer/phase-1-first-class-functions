const { returns } = require("chai-spies");

function receivesAFunction (cb) {
    return cb();
}

function returnsANamedFunction() {
    let randomValue;
    return function aNamedFunction() {
        console.log`Hello ${randomValue}`;
    };
}

function returnsAnAnonymousFunction() {
    let randomValue;
    return function() {
        console.log`Hello ${randomValue}`;
    };
}