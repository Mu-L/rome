# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0243`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:9-1:10 (a)
			}
			body: JSBlockStatement {
				body: [
					JSFunctionDeclaration {
						id: JSBindingIdentifier {
							name: "b"
							loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:38-1:39 (b)
						}
						body: JSBlockStatement {
							body: []
							directives: []
							loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:46-1:49
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: [
								JSBindingIdentifier {
									name: "t"
									meta: JSPatternMeta {
										loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:40-1:41
									}
									loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:40-1:41 (t)
								}
								JSBindingIdentifier {
									name: "t"
									meta: JSPatternMeta {
										loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:43-1:44
									}
									loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:43-1:44 (t)
								}
							]
							loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:39-1:45
						}
						loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:29-1:49
					}
					JSEmptyStatement {
						loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:49-1:50
					}
				]
				directives: [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:15-1:28
					}
				]
				loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:13-1:52
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: []
				loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:10-1:12
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:0-1:52
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {
						location: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:43-1:44 (t)
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Argument <emphasis>"}, "t", RAW_MARKUP {value: "</emphasis> name clash in strict mode"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0243/input.js>
				end: Position 1:44
				start: Position 1:43
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0243/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0243/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0243/input.js:1:43 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Argument t name clash in strict mode

  ℹ Defined already here

    function a() { "use strict"; function b(t, t) { }; }
                                               ^


```
