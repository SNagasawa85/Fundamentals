console.log(hello);                                   
var hello = 'world';          
// logs undefined, the variable is not assigned.

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// logs magnet, the variable is declared inside the funciton and the funciton is hoisted

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// logs super cool, the funciton is never called.

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// logs chicken, half-chicken.  the variable is reassigned but never re logged in console

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// will error, mean is not a function.

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// undefined, genre is not assigned. then disco, rewind is never called

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// logs san jose, seattle, burbank, burbank

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}