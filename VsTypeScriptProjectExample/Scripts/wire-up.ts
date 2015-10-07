/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="hello-world.ts" />
import World = MyFirstModule.World;
var world: MyFirstModule.World;

$(document).ready(() => {
    try {
        var greeter = new MyFirstModule.World("Hello, world!");

        document.body.innerHTML = greeter.sayHello();
    } catch (e) {
    }
});