# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 145`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSObjectExpression {
				properties: [
					JSObjectMethod {
						kind: "get"
						key: JSComputedPropertyKey {
							value: JSReferenceIdentifier {
								name: "x"
								loc: SourceLocation es2015/uncategorised/145/input.js 1:7-1:8 (x)
							}
							loc: SourceLocation es2015/uncategorised/145/input.js 1:6-1:9
						}
						body: JSBlockStatement {
							body: []
							directives: []
							loc: SourceLocation es2015/uncategorised/145/input.js 1:12-1:14
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: []
							loc: SourceLocation es2015/uncategorised/145/input.js 1:9-1:11
						}
						loc: SourceLocation es2015/uncategorised/145/input.js 1:2-1:14
					}
					JSObjectMethod {
						kind: "set"
						key: JSComputedPropertyKey {
							value: JSReferenceIdentifier {
								name: "x"
								loc: SourceLocation es2015/uncategorised/145/input.js 1:21-1:22 (x)
							}
							loc: SourceLocation es2015/uncategorised/145/input.js 1:20-1:23
						}
						body: JSBlockStatement {
							body: []
							directives: []
							loc: SourceLocation es2015/uncategorised/145/input.js 1:27-1:29
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: [
								JSBindingIdentifier {
									name: "v"
									meta: JSPatternMeta {
										loc: SourceLocation es2015/uncategorised/145/input.js 1:24-1:25
									}
									loc: SourceLocation es2015/uncategorised/145/input.js 1:24-1:25 (v)
								}
							]
							loc: SourceLocation es2015/uncategorised/145/input.js 1:23-1:26
						}
						loc: SourceLocation es2015/uncategorised/145/input.js 1:16-1:29
					}
				]
				loc: SourceLocation es2015/uncategorised/145/input.js 1:1-1:30
			}
			loc: SourceLocation es2015/uncategorised/145/input.js 1:0-1:31
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/145/input.js>
	loc: SourceLocation es2015/uncategorised/145/input.js 1:0-1:31
}
```

### `diagnostics`

```

```
