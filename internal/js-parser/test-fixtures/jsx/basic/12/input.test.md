# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 12`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSXElement {
				attributes: []
				children: [
					JSXElement {
						attributes: []
						children: []
						selfClosing: true
						name: JSXIdentifier {
							name: "br"
							loc: SourceLocation jsx/basic/12/input.jsx 1:6-1:8
						}
						loc: SourceLocation jsx/basic/12/input.jsx 1:5-1:11
					}
					JSXText {
						value: "7x invalid-js-identifier"
						loc: SourceLocation jsx/basic/12/input.jsx 1:11-1:35
					}
				]
				selfClosing: false
				name: JSXIdentifier {
					name: "div"
					loc: SourceLocation jsx/basic/12/input.jsx 1:1-1:4
				}
				loc: SourceLocation jsx/basic/12/input.jsx 1:0-1:41
			}
			loc: SourceLocation jsx/basic/12/input.jsx 1:0-1:41
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: ["jsx"]
	path: UIDPath<jsx/basic/12/input.jsx>
	loc: SourceLocation jsx/basic/12/input.jsx 1:0-1:41
}
```

### `diagnostics`

```

```
