# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 315`

### `ast`

```javascript
JSRoot {
	body: [
		JSForOfStatement {
			await: false
			body: JSExpressionStatement {
				expression: JSCallExpression {
					arguments: [
						JSReferenceIdentifier {
							name: "x"
							loc: SourceLocation es2015/uncategorised/315/input.js 1:30-1:31 (x)
						}
					]
					callee: JSReferenceIdentifier {
						name: "process"
						loc: SourceLocation es2015/uncategorised/315/input.js 1:22-1:29 (process)
					}
					loc: SourceLocation es2015/uncategorised/315/input.js 1:22-1:32
				}
				loc: SourceLocation es2015/uncategorised/315/input.js 1:22-1:33
			}
			left: JSVariableDeclaration {
				kind: "const"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation es2015/uncategorised/315/input.js 1:11-1:12 (x)
						}
						loc: SourceLocation es2015/uncategorised/315/input.js 1:11-1:12
					}
				]
				loc: SourceLocation es2015/uncategorised/315/input.js 1:5-1:12
			}
			right: JSReferenceIdentifier {
				name: "list"
				loc: SourceLocation es2015/uncategorised/315/input.js 1:16-1:20 (list)
			}
			loc: SourceLocation es2015/uncategorised/315/input.js 1:0-1:33
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/315/input.js>
	loc: SourceLocation es2015/uncategorised/315/input.js 1:0-1:33
}
```

### `diagnostics`

```

```
