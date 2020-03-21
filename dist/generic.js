"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Ortem' }, { age: 18 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('Привет TypeScript'));
