# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > object-binding-pattern-invalid-rest-in-object-pattern`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSArrowFunctionExpression {
				body: JSNumericLiteral {
					value: 0
					loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:14-1:15
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: [
						JSBindingObjectPattern {
							properties: [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "a"
											loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:2-1:3 (a)
										}
										loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:2-1:3
									}
									value: JSBindingIdentifier {
										name: "a"
										loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:2-1:3 (a)
									}
									loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:2-1:3
								}
							]
							rest: JSBindingIdentifier {
								name: "b"
								loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:7-1:8 (b)
							}
							loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:1-1:9
						}
					]
					loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:0-1:13
				}
				loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:0-1:15
			}
			loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:0-1:16
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js>
	loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-invalid-rest-in-object-pattern/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
