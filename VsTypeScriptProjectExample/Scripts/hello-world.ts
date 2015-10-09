// hello-world.ts
module MyFirstModule {
    export class World {
        public constructor(public message: string) {}

        public sayHello() {
            return "<h1>" + this.message + "</h1>";
        }
    };
}