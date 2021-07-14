# Snapshot report for `test/no-useless-spread.mjs`

The actual snapshot is saved in `no-useless-spread.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## Invalid #1
      1 | const array = [...[a]]

> Output

    `␊
      1 | const array = [a]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[a]]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #2
      1 | const object = {...{a}}

> Output

    `␊
      1 | const object = {a}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {...{a}}␊
        |                 ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #3
      1 | foo(...[a])

> Output

    `␊
      1 | foo(a)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[a])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #4
      1 | new Foo(...[a])

> Output

    `␊
      1 | new Foo(a)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[a])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #5
      1 | const array = [...[a,]]

> Output

    `␊
      1 | const array = [a]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[a,]]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #6
      1 | const object = {...{a,}}

> Output

    `␊
      1 | const object = {a}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {...{a,}}␊
        |                 ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #7
      1 | foo(...[a,])

> Output

    `␊
      1 | foo(a)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[a,])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #8
      1 | new Foo(...[a,])

> Output

    `␊
      1 | new Foo(a)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[a,])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #9
      1 | const array = [...[a,],]

> Output

    `␊
      1 | const array = [a,]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[a,],]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #10
      1 | const object = {...{a,},}

> Output

    `␊
      1 | const object = {a,}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {...{a,},}␊
        |                 ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #11
      1 | foo(...[a,],)

> Output

    `␊
      1 | foo(a,)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[a,],)␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #12
      1 | new Foo(...[a,],)

> Output

    `␊
      1 | new Foo(a,)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[a,],)␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #13
      1 | const array = [...(( [a] ))]

> Output

    `␊
      1 | const array = [ a ]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...(( [a] ))]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #14
      1 | const object = {...(( {a} ))}

> Output

    `␊
      1 | const object = { a }␊
    `

> Error 1/1

    `␊
    > 1 | const object = {...(( {a} ))}␊
        |                 ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #15
      1 | foo(...(( [a] )))

> Output

    `␊
      1 | foo( a )␊
    `

> Error 1/1

    `␊
    > 1 | foo(...(( [a] )))␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #16
      1 | new Foo(...(( [a] )))

> Output

    `␊
      1 | new Foo( a )␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...(( [a] )))␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #17
      1 | const array = [...[]]

> Output

    `␊
      1 | const array = []␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[]]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #18
      1 | const object = {...{}}

> Output

    `␊
      1 | const object = {}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {...{}}␊
        |                 ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #19
      1 | foo(...[])

> Output

    `␊
      1 | foo()␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #20
      1 | new Foo(...[])

> Output

    `␊
      1 | new Foo()␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #21
      1 | const array = [...[,]]

> Output

    `␊
      1 | const array = []␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[,]]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #22
      1 | foo(...[,])

> Output

    `␊
      1 | foo(undefined)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[,])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #23
      1 | new Foo(...[,])

> Output

    `␊
      1 | new Foo(undefined)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[,])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #24
      1 | const array = [...[,,]]

> Output

    `␊
      1 | const array = [,]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[,,]]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #25
      1 | foo(...[,,])

> Output

    `␊
      1 | foo(undefined,undefined)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[,,])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #26
      1 | new Foo(...[,,])

> Output

    `␊
      1 | new Foo(undefined,undefined)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[,,])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #27
      1 | const array = [...[a, , b,]]

> Output

    `␊
      1 | const array = [a, , b]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[a, , b,]]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #28
      1 | foo(...[a, , b,])

> Output

    `␊
      1 | foo(a, undefined, b)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[a, , b,])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #29
      1 | new Foo(...[a, , b,])

> Output

    `␊
      1 | new Foo(a, undefined, b)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[a, , b,])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #30
      1 | const array = [...[a, , b,],]

> Output

    `␊
      1 | const array = [a, , b,]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[a, , b,],]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #31
      1 | foo(...[a, , b,],)

> Output

    `␊
      1 | foo(a, undefined, b,)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[a, , b,],)␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #32
      1 | new Foo(...[a, , b,],)

> Output

    `␊
      1 | new Foo(a, undefined, b,)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[a, , b,],)␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #33
      1 | foo(...[,, ,(( a )), ,,(0, b), ,,])

> Output

    `␊
      1 | foo(undefined,undefined, undefined,(( a )), undefined,undefined,(0, b), undefined,undefined)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[,, ,(( a )), ,,(0, b), ,,])␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #34
      1 | const array = [a, ...[a, b]]

> Output

    `␊
      1 | const array = [a, a, b]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [a, ...[a, b]]␊
        |                   ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #35
      1 | const object = {a, ...{a, b}}

> Output

    `␊
      1 | const object = {a, a, b}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {a, ...{a, b}}␊
        |                    ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #36
      1 | foo(a, ...[a, b])

> Output

    `␊
      1 | foo(a, a, b)␊
    `

> Error 1/1

    `␊
    > 1 | foo(a, ...[a, b])␊
        |        ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #37
      1 | new Foo(a, ...[a, b])

> Output

    `␊
      1 | new Foo(a, a, b)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(a, ...[a, b])␊
        |            ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #38
      1 | const array = [...[a, b], b,]

> Output

    `␊
      1 | const array = [a, b, b,]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [...[a, b], b,]␊
        |                ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #39
      1 | const object = {...{a, b}, b,}

> Output

    `␊
      1 | const object = {a, b, b,}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {...{a, b}, b,}␊
        |                 ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #40
      1 | foo(...[a, b], b,)

> Output

    `␊
      1 | foo(a, b, b,)␊
    `

> Error 1/1

    `␊
    > 1 | foo(...[a, b], b,)␊
        |     ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #41
      1 | new Foo(...[a, b], b,)

> Output

    `␊
      1 | new Foo(a, b, b,)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(...[a, b], b,)␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #42
      1 | const array = [a, ...[a, b], b,]

> Output

    `␊
      1 | const array = [a, a, b, b,]␊
    `

> Error 1/1

    `␊
    > 1 | const array = [a, ...[a, b], b,]␊
        |                   ^^^ Spread an array literal in array literal is unnecessary.␊
    `

## Invalid #43
      1 | const object = {a, ...{a, b}, b,}

> Output

    `␊
      1 | const object = {a, a, b, b,}␊
    `

> Error 1/1

    `␊
    > 1 | const object = {a, ...{a, b}, b,}␊
        |                    ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #44
      1 | foo(a, ...[a, b], b,)

> Output

    `␊
      1 | foo(a, a, b, b,)␊
    `

> Error 1/1

    `␊
    > 1 | foo(a, ...[a, b], b,)␊
        |        ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #45
      1 | new Foo(a, ...[a, b], b,)

> Output

    `␊
      1 | new Foo(a, a, b, b,)␊
    `

> Error 1/1

    `␊
    > 1 | new Foo(a, ...[a, b], b,)␊
        |            ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #46
      1 | ({a:1, ...{a: 2}})

> Output

    `␊
      1 | ({a:1, a: 2})␊
    `

> Error 1/1

    `␊
    > 1 | ({a:1, ...{a: 2}})␊
        |        ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #47
      1 | ({...{a:1}, ...{a: 2}})

> Output

    `␊
      1 | ({a:1, a: 2})␊
    `

> Error 1/2

    `␊
    > 1 | ({...{a:1}, ...{a: 2}})␊
        |   ^^^ Spread an object literal in object literal is unnecessary.␊
    `

> Error 2/2

    `␊
    > 1 | ({...{a:1}, ...{a: 2}})␊
        |             ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #48
      1 | ({
      2 | 	get a() {},
      3 | 	set a(v) {},
      4 | 	...{
      5 | 		get a() {}
      6 | 	}
      7 | })

> Output

    `␊
      1 | ({␊
      2 | 	get a() {},␊
      3 | 	set a(v) {},␊
      4 | 	␊
      5 | 		get a() {}␊
      6 | 	␊
      7 | })␊
    `

> Error 1/1

    `␊
      1 | ({␊
      2 | 	get a() {},␊
      3 | 	set a(v) {},␊
    > 4 | 	...{␊
        | 	^^^ Spread an object literal in object literal is unnecessary.␊
      5 | 		get a() {}␊
      6 | 	}␊
      7 | })␊
    `

## Invalid #49
      1 | ({[a]:1, ...{[a]: 2}})

> Output

    `␊
      1 | ({[a]:1, [a]: 2})␊
    `

> Error 1/1

    `␊
    > 1 | ({[a]:1, ...{[a]: 2}})␊
        |          ^^^ Spread an object literal in object literal is unnecessary.␊
    `

## Invalid #50
       1 | const object = {
       2 | 	a: 1,
       3 |
       4 | 	...{
       5 | 		testKeys() {
       6 | 			console.assert(Object.keys(this).length === 2)
       7 | 		}
       8 | 	}
       9 | }
      10 | object.testKeys();

> Output

    `␊
       1 | const object = {␊
       2 | 	a: 1,␊
       3 |␊
       4 | 	␊
       5 | 		testKeys() {␊
       6 | 			console.assert(Object.keys(this).length === 2)␊
       7 | 		}␊
       8 | 	␊
       9 | }␊
      10 | object.testKeys();␊
    `

> Error 1/1

    `␊
       1 | const object = {␊
       2 | 	a: 1,␊
       3 |␊
    >  4 | 	...{␊
         | 	^^^ Spread an object literal in object literal is unnecessary.␊
       5 | 		testKeys() {␊
       6 | 			console.assert(Object.keys(this).length === 2)␊
       7 | 		}␊
       8 | 	}␊
       9 | }␊
      10 | object.testKeys();␊
    `

## Invalid #51
       1 | new Foo(
       2 | 	foo(
       3 | 		a,
       4 | 		...[a, b],
       5 | 		b,
       6 | 	),
       7 | 	...[
       8 | 		a,
       9 | 		...[
      10 | 			a,
      11 | 			b,
      12 | 		],
      13 | 		b,
      14 | 	],
      15 | 	{
      16 | 		a: [...[a, b]],
      17 | 		...{
      18 | 			a,
      19 | 			b,
      20 | 		},
      21 | 	}
      22 | )

> Output

    `␊
       1 | new Foo(␊
       2 | 	foo(␊
       3 | 		a,␊
       4 | 		a, b,␊
       5 | 		b,␊
       6 | 	),␊
       7 | 	␊
       8 | 		a,␊
       9 | 		␊
      10 | 			a,␊
      11 | 			b␊
      12 | 		,␊
      13 | 		b␊
      14 | 	,␊
      15 | 	{␊
      16 | 		a: [a, b],␊
      17 | 		␊
      18 | 			a,␊
      19 | 			b␊
      20 | 		,␊
      21 | 	}␊
      22 | )␊
    `

> Error 1/5

    `␊
       1 | new Foo(␊
       2 | 	foo(␊
       3 | 		a,␊
    >  4 | 		...[a, b],␊
         | 		^^^ Spread an array literal in arguments is unnecessary.␊
       5 | 		b,␊
       6 | 	),␊
       7 | 	...[␊
       8 | 		a,␊
       9 | 		...[␊
      10 | 			a,␊
      11 | 			b,␊
      12 | 		],␊
      13 | 		b,␊
      14 | 	],␊
      15 | 	{␊
      16 | 		a: [...[a, b]],␊
      17 | 		...{␊
      18 | 			a,␊
      19 | 			b,␊
      20 | 		},␊
      21 | 	}␊
      22 | )␊
    `

> Error 2/5

    `␊
       1 | new Foo(␊
       2 | 	foo(␊
       3 | 		a,␊
       4 | 		...[a, b],␊
       5 | 		b,␊
       6 | 	),␊
    >  7 | 	...[␊
         | 	^^^ Spread an array literal in arguments is unnecessary.␊
       8 | 		a,␊
       9 | 		...[␊
      10 | 			a,␊
      11 | 			b,␊
      12 | 		],␊
      13 | 		b,␊
      14 | 	],␊
      15 | 	{␊
      16 | 		a: [...[a, b]],␊
      17 | 		...{␊
      18 | 			a,␊
      19 | 			b,␊
      20 | 		},␊
      21 | 	}␊
      22 | )␊
    `

> Error 3/5

    `␊
       1 | new Foo(␊
       2 | 	foo(␊
       3 | 		a,␊
       4 | 		...[a, b],␊
       5 | 		b,␊
       6 | 	),␊
       7 | 	...[␊
       8 | 		a,␊
    >  9 | 		...[␊
         | 		^^^ Spread an array literal in array literal is unnecessary.␊
      10 | 			a,␊
      11 | 			b,␊
      12 | 		],␊
      13 | 		b,␊
      14 | 	],␊
      15 | 	{␊
      16 | 		a: [...[a, b]],␊
      17 | 		...{␊
      18 | 			a,␊
      19 | 			b,␊
      20 | 		},␊
      21 | 	}␊
      22 | )␊
    `

> Error 4/5

    `␊
       1 | new Foo(␊
       2 | 	foo(␊
       3 | 		a,␊
       4 | 		...[a, b],␊
       5 | 		b,␊
       6 | 	),␊
       7 | 	...[␊
       8 | 		a,␊
       9 | 		...[␊
      10 | 			a,␊
      11 | 			b,␊
      12 | 		],␊
      13 | 		b,␊
      14 | 	],␊
      15 | 	{␊
    > 16 | 		a: [...[a, b]],␊
         | 		    ^^^ Spread an array literal in array literal is unnecessary.␊
      17 | 		...{␊
      18 | 			a,␊
      19 | 			b,␊
      20 | 		},␊
      21 | 	}␊
      22 | )␊
    `

> Error 5/5

    `␊
       1 | new Foo(␊
       2 | 	foo(␊
       3 | 		a,␊
       4 | 		...[a, b],␊
       5 | 		b,␊
       6 | 	),␊
       7 | 	...[␊
       8 | 		a,␊
       9 | 		...[␊
      10 | 			a,␊
      11 | 			b,␊
      12 | 		],␊
      13 | 		b,␊
      14 | 	],␊
      15 | 	{␊
      16 | 		a: [...[a, b]],␊
    > 17 | 		...{␊
         | 		^^^ Spread an object literal in object literal is unnecessary.␊
      18 | 			a,␊
      19 | 			b,␊
      20 | 		},␊
      21 | 	}␊
      22 | )␊
    `

## Invalid #52
      1 | const baz = [2];
      2 | call(foo, ...[bar, ...baz]);

> Output

    `␊
      1 | const baz = [2];␊
      2 | call(foo, bar, ...baz);␊
    `

> Error 1/1

    `␊
      1 | const baz = [2];␊
    > 2 | call(foo, ...[bar, ...baz]);␊
        |           ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #53
      1 | Promise.all(...[...iterable])

> Output

    `␊
      1 | Promise.all(...iterable)␊
    `

> Error 1/1

    `␊
    > 1 | Promise.all(...[...iterable])␊
        |             ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #54
      1 | new Map(...[...iterable])

> Output

    `␊
      1 | new Map(...iterable)␊
    `

> Error 1/1

    `␊
    > 1 | new Map(...[...iterable])␊
        |         ^^^ Spread an array literal in arguments is unnecessary.␊
    `

## Invalid #1
      1 | const map = new Map([...iterable])

> Output

    `␊
      1 | const map = new Map(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const map = new Map([...iterable])␊
        |                     ^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #2
      1 | const weakMap = new WeakMap([...iterable])

> Output

    `␊
      1 | const weakMap = new WeakMap(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const weakMap = new WeakMap([...iterable])␊
        |                             ^^^^^^^^^^^^^ \`new WeakMap(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #3
      1 | const set = new Set([...iterable])

> Output

    `␊
      1 | const set = new Set(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const set = new Set([...iterable])␊
        |                     ^^^^^^^^^^^^^ \`new Set(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #4
      1 | const weakSet = new WeakSet([...iterable])

> Output

    `␊
      1 | const weakSet = new WeakSet(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const weakSet = new WeakSet([...iterable])␊
        |                             ^^^^^^^^^^^^^ \`new WeakSet(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #5
      1 | const typed = new BigUint64Array([...iterable], byteOffset, length)

> Output

    `␊
      1 | const typed = new BigUint64Array(iterable, byteOffset, length)␊
    `

> Error 1/1

    `␊
    > 1 | const typed = new BigUint64Array([...iterable], byteOffset, length)␊
        |                                  ^^^^^^^^^^^^^ \`new BigUint64Array(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #6
      1 | const typed = new BigUint64Array([...iterable], ...args)

> Output

    `␊
      1 | const typed = new BigUint64Array(iterable, ...args)␊
    `

> Error 1/1

    `␊
    > 1 | const typed = new BigUint64Array([...iterable], ...args)␊
        |                                  ^^^^^^^^^^^^^ \`new BigUint64Array(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #7
      1 | const promise = Promise.all([...iterable])

> Output

    `␊
      1 | const promise = Promise.all(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const promise = Promise.all([...iterable])␊
        |                             ^^^^^^^^^^^^^ \`Promise.all(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #8
      1 | const promise = Promise.allSettled([...iterable])

> Output

    `␊
      1 | const promise = Promise.allSettled(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const promise = Promise.allSettled([...iterable])␊
        |                                    ^^^^^^^^^^^^^ \`Promise.allSettled(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #9
      1 | const promise = Promise.any([...iterable])

> Output

    `␊
      1 | const promise = Promise.any(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const promise = Promise.any([...iterable])␊
        |                             ^^^^^^^^^^^^^ \`Promise.any(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #10
      1 | const promise = Promise.race([...iterable])

> Output

    `␊
      1 | const promise = Promise.race(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const promise = Promise.race([...iterable])␊
        |                              ^^^^^^^^^^^^^ \`Promise.race(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #11
      1 | const array = Array.from([...iterable])

> Output

    `␊
      1 | const array = Array.from(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const array = Array.from([...iterable])␊
        |                          ^^^^^^^^^^^^^ \`Array.from(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #12
      1 | const typed = BigUint64Array.from([...iterable])

> Output

    `␊
      1 | const typed = BigUint64Array.from(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const typed = BigUint64Array.from([...iterable])␊
        |                                   ^^^^^^^^^^^^^ \`BigUint64Array.from(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #13
      1 | const object = Object.fromEntries([...iterable])

> Output

    `␊
      1 | const object = Object.fromEntries(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const object = Object.fromEntries([...iterable])␊
        |                                   ^^^^^^^^^^^^^ \`Object.fromEntries(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #14
      1 | for (const foo of [...iterable]);

> Output

    `␊
      1 | for (const foo of iterable);␊
    `

> Error 1/1

    `␊
    > 1 | for (const foo of [...iterable]);␊
        |                   ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.␊
    `

## Invalid #15
      1 | async () => {for await (const foo of [...iterable]);}

> Output

    `␊
      1 | async () => {for await (const foo of iterable);}␊
    `

> Error 1/1

    `␊
    > 1 | async () => {for await (const foo of [...iterable]);}␊
        |                                      ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.␊
    `

## Invalid #16
      1 | const map = new Map([...iterable,])

> Output

    `␊
      1 | const map = new Map(iterable)␊
    `

> Error 1/1

    `␊
    > 1 | const map = new Map([...iterable,])␊
        |                     ^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #17
      1 | for (const foo of [...iterable]);

> Output

    `␊
      1 | for (const foo of iterable);␊
    `

> Error 1/1

    `␊
    > 1 | for (const foo of [...iterable]);␊
        |                   ^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.␊
    `

## Invalid #18
      1 | const map = new Map([...iterable,],)

> Output

    `␊
      1 | const map = new Map(iterable,)␊
    `

> Error 1/1

    `␊
    > 1 | const map = new Map([...iterable,],)␊
        |                     ^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #19
      1 | const map = new Map([...(( iterable ))])

> Output

    `␊
      1 | const map = new Map((( iterable )))␊
    `

> Error 1/1

    `␊
    > 1 | const map = new Map([...(( iterable ))])␊
        |                     ^^^^^^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #20
      1 | for (const foo of [...(( iterable ))]);

> Output

    `␊
      1 | for (const foo of (( iterable )));␊
    `

> Error 1/1

    `␊
    > 1 | for (const foo of [...(( iterable ))]);␊
        |                   ^^^^^^^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.␊
    `

## Invalid #21
      1 | const map = new Map((( [...(( iterable ))] )))

> Output

    `␊
      1 | const map = new Map((( (( iterable )) )))␊
    `

> Error 1/1

    `␊
    > 1 | const map = new Map((( [...(( iterable ))] )))␊
        |                        ^^^^^^^^^^^^^^^^^^^ \`new Map(…)\` accepts iterable as argument, it's unnecessary to convert to an array.␊
    `

## Invalid #22
      1 | for (const foo of (( [...(( iterable ))] )));

> Output

    `␊
      1 | for (const foo of (( (( iterable )) )));␊
    `

> Error 1/1

    `␊
    > 1 | for (const foo of (( [...(( iterable ))] )));␊
        |                      ^^^^^^^^^^^^^^^^^^^ \`for…of\` can iterate over iterable, it's unnecessary to convert to an array.␊
    `

## Invalid #23
      1 | function * fn() {
      2 | 	yield * [...iterable];
      3 | }

> Output

    `␊
      1 | function * fn() {␊
      2 | 	yield * iterable;␊
      3 | }␊
    `

> Error 1/1

    `␊
      1 | function * fn() {␊
    > 2 | 	yield * [...iterable];␊
        | 	        ^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.␊
      3 | }␊
    `

## Invalid #24
      1 | function * fn() {
      2 | 	yield * [...iterable,];
      3 | }

> Output

    `␊
      1 | function * fn() {␊
      2 | 	yield * iterable;␊
      3 | }␊
    `

> Error 1/1

    `␊
      1 | function * fn() {␊
    > 2 | 	yield * [...iterable,];␊
        | 	        ^^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.␊
      3 | }␊
    `

## Invalid #25
      1 | function * fn() {
      2 | 	yield * (( [...iterable] ));
      3 | }

> Output

    `␊
      1 | function * fn() {␊
      2 | 	yield * (( iterable ));␊
      3 | }␊
    `

> Error 1/1

    `␊
      1 | function * fn() {␊
    > 2 | 	yield * (( [...iterable] ));␊
        | 	           ^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.␊
      3 | }␊
    `

## Invalid #26
      1 | function * fn() {
      2 | 	yield * (( [...(( iterable ))] ));
      3 | }

> Output

    `␊
      1 | function * fn() {␊
      2 | 	yield * (( (( iterable )) ));␊
      3 | }␊
    `

> Error 1/1

    `␊
      1 | function * fn() {␊
    > 2 | 	yield * (( [...(( iterable ))] ));␊
        | 	           ^^^^^^^^^^^^^^^^^^^ \`yield*\` can delegate iterable, it's unnecessary to convert to an array.␊
      3 | }␊
    `