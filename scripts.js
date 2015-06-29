///<reference path="bower/DefinitelyTyped/jquery/jquery.d.ts" />
function vote(candidate, callback) { }
vote("BigPig", (function (result) {
    if (result == "BigPig") {
        console.log(result);
    }
}));
function add(friend) {
    var name = friend.name;
}
add({ name: 'Vik' });
add({ name: 'Vik', favoriteColor: 'blue' });
var MakePoint;
var MakePoint = function () {
    return {
        x: 5,
        y: 7
    };
};
var f;
var sameType = f;
var nope = sameType;
f = function () { return 'foo'; };
function getX(p) {
    return p.x;
}
//# sourceMappingURL=scripts.js.map