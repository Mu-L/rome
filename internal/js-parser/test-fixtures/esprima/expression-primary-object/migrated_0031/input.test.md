# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0031`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "var"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:18-1:19 (x)
						}
						init: JSObjectExpression {
							properties: [
								JSObjectMethod {
									kind: "get"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "i"
											loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:28-1:29 (i)
										}
										loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:28-1:29
									}
									body: JSBlockStatement {
										body: []
										directives: []
										loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:32-1:34
									}
									head: JSFunctionHead {
										async: false
										generator: false
										hasHoistedVars: false
										params: []
										loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:29-1:31
									}
									loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:24-1:34
								}
								JSObjectMethod {
									kind: "get"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "i"
											loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:40-1:41 (i)
										}
										loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:40-1:41
									}
									body: JSBlockStatement {
										body: []
										directives: []
										loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:44-1:46
									}
									head: JSFunctionHead {
										async: false
										generator: false
										hasHoistedVars: false
										params: []
										loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:41-1:43
									}
									loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:36-1:46
								}
							]
							loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:22-1:48
						}
						loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:18-1:48
					}
				]
				loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:14-1:48
			}
			loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:14-1:48
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: [
		JSDirective {
			value: "use strict"
			loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:0-1:13
		}
	]
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/expression-primary-object/migrated_0031/input.js>
	loc: SourceLocation esprima/expression-primary-object/migrated_0031/input.js 1:0-1:48
}
```

### `diagnostics`

```

```
