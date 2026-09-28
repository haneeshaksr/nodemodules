const add=(a, b) => {
    return a + b;
};
const sub=(a, b) => {
    return a - b;
};
const mul=(a, b) => {
    return a * b;
};
const div=(a, b) => {
    if(b===0){
        throw new Error("Division by zero is not allowed.");
    }   
    return a / b;
};
module.exports.add = add;
module.exports.sub=sub;
module.exports.mul=mul;
module.exports.div=div;
