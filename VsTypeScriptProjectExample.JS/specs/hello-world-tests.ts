/// <chutzpah_reference path="../scripts/typings/jquery/jquery.d.ts" />
﻿/// <chutzpah_reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="./../../../vstypescriptprojectexample/scripts/hello-world.ts" />
/// <reference path="./../../vstypescriptprojectexample/scripts/hello-world.ts" />

describe("World", () => {
    describe("Hello world Tests", () => {
        it("should_say_hello_world", () => {
            var message = "Hello, world!";
            const world = new MyFirstModule.World(message);

            expect(world.sayHello()).toBe("<h1>" + message + "</h1>");
        });
    });
});