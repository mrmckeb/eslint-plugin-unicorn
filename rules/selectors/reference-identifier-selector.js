'use strict';
const not = require('./negation');
const matches = require('./matches-any');

const nonReferenceSelectors = [
	// `foo.Identifier`
	'MemberExpression[computed=false] > .property',
	// `function Identifier() {}`
	'FunctionDeclaration > .id',
	// `const foo = function Identifier() {}`
	'FunctionExpression > .id',
	// `class Identifier() {}`
	'ClassDeclaration > .id',
	// `const foo = class Identifier() {}`
	'ClassExpression > .id',
	// TODO: remove `ClassProperty` when `babel` and `typescript` support `PropertyDefinition`
	'ClassProperty[computed=false] > .key',
	// `class Foo {Identifier = 1}`
	'PropertyDefinition[computed=false] > .key',
	// `class Foo {Identifier() {}}`
	'MethodDefinition[computed=false] > .key',
	// `const Identifier = 1`
	'VariableDeclarator > .id',
	// `const foo = {Identifier: 1}`
	'ObjectExpression > Property[shorthand=false][computed=false].properties > .key',
	// `const {Identifier} = {}`
	// `const {Identifier: foo} = {}`
	'ObjectPattern > Property[computed=false].properties > .key',
	// `const {Identifier} = {}`
	// `const {foo: Identifier} = {}`
	'ObjectPattern > Property.properties > .value',
	// `const [Identifier] = []`
	'ArrayPattern > .elements',
	// `function foo(Identifier) {}`
	// `const foo = function(Identifier) {}`
	// `const foo = (Identifier) => {}`
	':function > .params',
	/*
		```
		Identifier: for (const foo of bar) {
			continue Identifier;
			break Identifier;
		}
		```
	*/
	'LabeledStatement > .label',
	'ContinueStatement > .label',
	'BreakStatement > .label',
	// `export {Identifier as foo}`
	'ExportSpecifier > .local',
	// `export {foo as Identifier}`
	'ExportSpecifier > .exported',
	// `export * as Identifier from 'foo'`
	'ExportAllDeclaration > .exported',
	// `import {foo as Identifier} from 'foo'`
	'ImportSpecifier > .local',
	// `import {Identifier as foo} from 'foo'`
	'ImportSpecifier > .imported',
	// `import * as Identifier from 'foo'`
	'ImportNamespaceSpecifier > .local',
	// `import Identifier from 'foo'`
	'ImportDefaultSpecifier > .local',

	// TypeScript
	'TSDeclareFunction > .id',
	'TSEnumMember > .id',
	'TSPropertySignature > .key'
];

function referenceIdentifierSelector(nameOrNames = []) {
	const names = Array.isArray(nameOrNames) ? nameOrNames : [nameOrNames];

	return [
		'Identifier',
		matches(names.map(name => `[name="${name}"]`)),
		not(nonReferenceSelectors)
	].join('');
}

module.exports = referenceIdentifierSelector;