# Snapshot report for `test/no-object-as-default-parameter.js`

The actual snapshot is saved in `no-object-as-default-parameter.js.snap`.

Generated by [AVA](https://avajs.dev).

## no-object-as-default-parameter - #1

> Snapshot 1

    `␊
    Error 1/1:␊
    > 1 | function abc(foo = {a: 123}) {}␊
        |              ^^^ Do not use an object literal as default for parameter `foo`.␊
    `

## no-object-as-default-parameter - #2

> Snapshot 1

    `␊
    Error 1/1:␊
    > 1 | const abc = (foo = {a: false}) => {};␊
        |              ^^^ Do not use an object literal as default for parameter `foo`.␊
    `