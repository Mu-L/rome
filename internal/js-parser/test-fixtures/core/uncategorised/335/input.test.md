# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 335`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSBinaryExpression {
				operator: "/"
				left: JSBinaryExpression {
					operator: "+"
					left: JSObjectExpression {
						properties: [
							JSObjectProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "a"
										loc: SourceLocation core/uncategorised/335/input.js 1:2-1:3 (a)
									}
									loc: SourceLocation core/uncategorised/335/input.js 1:2-1:3
								}
								value: JSArrayExpression {
									elements: [
										JSNumericLiteral {
											value: 1
											loc: SourceLocation core/uncategorised/335/input.js 1:6-1:7
										}
									]
									loc: SourceLocation core/uncategorised/335/input.js 1:5-1:8
								}
								loc: SourceLocation core/uncategorised/335/input.js 1:2-1:8
							}
						]
						loc: SourceLocation core/uncategorised/335/input.js 1:1-1:9
					}
					right: JSArrayExpression {
						elements: []
						loc: SourceLocation core/uncategorised/335/input.js 1:10-1:12
					}
					loc: SourceLocation core/uncategorised/335/input.js 1:1-1:12
				}
				right: JSNumericLiteral {
					value: 2
					loc: SourceLocation core/uncategorised/335/input.js 1:16-1:17
				}
				loc: SourceLocation core/uncategorised/335/input.js 1:0-1:17
			}
			loc: SourceLocation core/uncategorised/335/input.js 1:0-1:17
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/335/input.js>
	loc: SourceLocation core/uncategorised/335/input.js 1:0-1:17
}
```

### `diagnostics`

```

```
