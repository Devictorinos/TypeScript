
///<reference path="bower/DefinitelyTyped/jquery/jquery.d.ts" />



function vote(candidate: string, callback: (result: string) => any) {}


vote("BigPig", (function(result: string) {
    if(result == "BigPig") {
        console.log(result);
    }
}));



interface Friend {
    name: string;
    favoriteColor?: string;
}

function add(friend: Friend) {
    var name = friend.name;
}

add({name: 'Vik'});
//add({favoriteColor: 'blue'});
add({name: 'Vik', favoriteColor: 'blue'});

interface JQuery {
    text(context: string);
}

interface JQueryStatic {
    get(url: string, callback: (data: string) => any);
    (query: string): JQuery;
}

declare var $: JQueryStatic;

// $.get('http://example.com', function(data: string) {
//     $("div").text(data);
// });


var MakePoint:() => {
    x: number; y: number;
}

var MakePoint = function () { 
    return {
        x: 5,
        y: 7
    };
}


var f: {(): string;};
var sameType: () => string =f;
var nope: () => string = sameType;
 f = () => 'foo';
 //f = () => 5;//error

interface Point {
    x: number;
    y: number;
}

function getX(p: Point) {
    return p.x;
}

class CPoint {

    x:number;
    y:number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

getX(new CPoint(0, 0));// Ok, fields match
getX({x:5, y:6, color: 'red'});// Extra fields Ok
//getX({ x: 0 });// Error: supplied parameter does not match

