# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-parameters`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:15-1:17 (fn)
			}
			body: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:31-1:33
			}
			head: JSFunctionHead {
				async: true
				generator: false
				hasHoistedVars: false
				params: [
					JSBindingAssignmentPattern {
						left: JSBindingIdentifier {
							name: "x"
							meta: JSPatternMeta {
								loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:18-1:19
							}
							loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:18-1:19 (x)
						}
						right: JSAwaitExpression {
							argument: JSNumericLiteral {
								value: 2
								loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:28-1:29
							}
							loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:22-1:29
						}
						loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:18-1:29
					}
				]
				loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:17-1:30
			}
			loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:0-1:33
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
				message: RAW_MARKUP {value: "await is not allowed in async function parameters"}
			}
			location: {
				language: "js"
				path: UIDPath<es2017/async-functions/await-inside-parameters/input.js>
				end: Position 1:27
				start: Position 1:28
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2017/async-functions/await-inside-parameters/input.js>
	loc: SourceLocation es2017/async-functions/await-inside-parameters/input.js 1:0-1:33
}
```

### `diagnostics`

```

 es2017/async-functions/await-inside-parameters/input.js:1:28 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ await is not allowed in async function parameters

    async function fn(x = await 2) {}
                                ^


```
