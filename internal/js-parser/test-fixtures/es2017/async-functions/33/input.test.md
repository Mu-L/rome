# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 33`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "const"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation es2017/async-functions/33/input.js 1:6-1:9 (foo)
						}
						init: JSFunctionExpression {
							body: JSBlockStatement {
								body: [
									JSExpressionStatement {
										expression: JSAwaitExpression {
											argument: JSReferenceIdentifier {
												name: "baz"
												loc: SourceLocation es2017/async-functions/33/input.js 2:8-2:11 (baz)
											}
											loc: SourceLocation es2017/async-functions/33/input.js 2:2-2:11
										}
										loc: SourceLocation es2017/async-functions/33/input.js 2:2-2:12
									}
								]
								directives: []
								loc: SourceLocation es2017/async-functions/33/input.js 1:43-3:1
							}
							head: JSFunctionHead {
								async: true
								generator: false
								hasHoistedVars: false
								params: [
									JSBindingObjectPattern {
										properties: [
											JSBindingObjectPatternProperty {
												key: JSStaticPropertyKey {
													value: JSIdentifier {
														name: "async"
														loc: SourceLocation es2017/async-functions/33/input.js 1:29-1:34 (async)
													}
													loc: SourceLocation es2017/async-functions/33/input.js 1:29-1:34
												}
												value: JSBindingIdentifier {
													name: "bar"
													loc: SourceLocation es2017/async-functions/33/input.js 1:36-1:39 (bar)
												}
												loc: SourceLocation es2017/async-functions/33/input.js 1:29-1:39
											}
										]
										meta: JSPatternMeta {
											loc: SourceLocation es2017/async-functions/33/input.js 1:27-1:41
										}
										loc: SourceLocation es2017/async-functions/33/input.js 1:27-1:41
									}
								]
								loc: SourceLocation es2017/async-functions/33/input.js 1:26-1:42
							}
							loc: SourceLocation es2017/async-functions/33/input.js 1:12-3:1
						}
						loc: SourceLocation es2017/async-functions/33/input.js 1:6-3:1
					}
				]
				loc: SourceLocation es2017/async-functions/33/input.js 1:0-3:2
			}
			loc: SourceLocation es2017/async-functions/33/input.js 1:0-3:2
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2017/async-functions/33/input.js>
	loc: SourceLocation es2017/async-functions/33/input.js 1:0-4:0
}
```

### `diagnostics`

```

```
