# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > invalid-yield-generator-member-expression`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "g"
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:10-1:11 (g)
			}
			body: JSBlockStatement {
				body: [
					JSReturnStatement {
						argument: JSYieldExpression {
							delegate: false
							loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:23-1:28
						}
						loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:16-1:28
					}
					JSExpressionStatement {
						expression: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:28-1:29
						}
						loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:28-1:29
					}
					JSExpressionStatement {
						expression: JSReferenceIdentifier {
							name: "x"
							loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:29-1:30 (x)
						}
						loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:29-1:31
					}
				]
				directives: []
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:14-1:33
			}
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: []
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:11-1:13
			}
			loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:0-1:33
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-yield/invalid-yield-generator-member-expression/input.js>
				end: Position 1:28
				start: Position 1:28
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-yield/invalid-yield-generator-member-expression/input.js>
	loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-member-expression/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-yield/invalid-yield-generator-member-expression/input.js:1:28 parse(js) ━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    function *g() { return yield.x; }
                                ^


```
