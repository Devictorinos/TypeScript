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
//add({favoriteColor: 'blue'});
add({ name: 'Vik', favoriteColor: 'blue' });
// $.get('http://example.com', function(data: string) {
//     $("div").text(data);
// });
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
var CPoint = (function () {
    function CPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return CPoint;
})();
getX(new CPoint(0, 0)); // Ok, fields match
getX({ x: 5, y: 6, color: 'red' }); // Extra fields Ok
