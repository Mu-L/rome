# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > errors > attribute-empty-expression`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSXElement {
				attributes: [
					JSXAttribute {
						name: JSXIdentifier {
							name: "bar"
							loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:5-1:8
						}
						value: JSXExpressionContainer {
							expression: JSXEmptyExpression {
								loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:10-1:10
							}
							loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:9-1:11
						}
						loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:5-1:11
					}
				]
				children: []
				selfClosing: true
				name: JSXIdentifier {
					name: "foo"
					loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:1-1:4
				}
				loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:0-1:14
			}
			loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:0-1:14
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "JSX attribute cannot be an empty expression"}
			}
			location: {
				language: "js"
				path: UIDPath<jsx/errors/attribute-empty-expression/input.jsx>
				end: Position 1:11
				start: Position 1:9
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: ["jsx"]
	path: UIDPath<jsx/errors/attribute-empty-expression/input.jsx>
	loc: SourceLocation jsx/errors/attribute-empty-expression/input.jsx 1:0-2:0
}
```

### `diagnostics`

```

 jsx/errors/attribute-empty-expression/input.jsx:1:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ JSX attribute cannot be an empty expression

    <foo bar={} />
             ^^


```
