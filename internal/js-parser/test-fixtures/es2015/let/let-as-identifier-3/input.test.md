# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > let > let-as-identifier-3`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSBinaryExpression {
				operator: "instanceof"
				left: JSReferenceIdentifier {
					name: "let"
					loc: SourceLocation es2015/let/let-as-identifier-3/input.js 1:0-1:3 (let)
				}
				right: JSReferenceIdentifier {
					name: "Foo"
					loc: SourceLocation es2015/let/let-as-identifier-3/input.js 1:15-1:18 (Foo)
				}
				loc: SourceLocation es2015/let/let-as-identifier-3/input.js 1:0-1:18
			}
			loc: SourceLocation es2015/let/let-as-identifier-3/input.js 1:0-1:18
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/let/let-as-identifier-3/input.js>
	loc: SourceLocation es2015/let/let-as-identifier-3/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
