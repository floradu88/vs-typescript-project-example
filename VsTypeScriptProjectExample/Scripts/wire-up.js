/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="hello-world.ts" />
var World = MyFirstModule.World;
var world;
$(document).ready(function () {
    try {
        var greeter = new MyFirstModule.World("Hello, world!");
        document.body.innerHTML = greeter.sayHello();
    }
    catch (e) {
    }
});
//# sourceMappingURL=wire-up.js.map