// hello-world.ts
var MyFirstModule;
(function (MyFirstModule) {
    var World = (function () {
        function World(message) {
            this.message = message;
        }
        World.prototype.sayHello = function () {
            return "<h1>" + this.message + "</h1>";
        };
        return World;
    })();
    MyFirstModule.World = World;
    ;
})(MyFirstModule || (MyFirstModule = {}));
