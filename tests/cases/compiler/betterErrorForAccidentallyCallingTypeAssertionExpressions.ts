declare function foo(): string;

foo()(1 as number).toString();

foo()   (1 as number).toString();

foo()
(1 as number).toString();

foo()   
    (1 as number).toString();
