# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-left-hand-side > migrated_0004`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSCallExpression {
				arguments: []
				callee: JSMemberExpression {
					object: JSNewExpression {
						arguments: []
						callee: JSReferenceIdentifier {
							name: "foo"
							loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:4-1:7 (foo)
						}
						loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:0-1:9
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "bar"
							loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:10-1:13 (bar)
						}
						loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:10-1:13 (bar)
					}
					loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:0-1:13
				}
				loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:0-1:15
			}
			loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:0-1:15
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/expression-left-hand-side/migrated_0004/input.js>
	loc: SourceLocation esprima/expression-left-hand-side/migrated_0004/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
