# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 400`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "t"
				loc: SourceLocation core/uncategorised/400/input.js 1:9-1:10 (t)
			}
			body: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation core/uncategorised/400/input.js 1:17-1:20
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: [
					JSBindingIdentifier {
						name: "null"
						meta: JSPatternMeta {
							loc: SourceLocation core/uncategorised/400/input.js 1:11-1:15
						}
						loc: SourceLocation core/uncategorised/400/input.js 1:11-1:15 (null)
					}
				]
				loc: SourceLocation core/uncategorised/400/input.js 1:10-1:16
			}
			loc: SourceLocation core/uncategorised/400/input.js 1:0-1:20
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
				message: [RAW_MARKUP {value: "Unexpected keyword <emphasis>"}, "null", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/400/input.js>
				end: Position 1:15
				start: Position 1:11
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/400/input.js>
	loc: SourceLocation core/uncategorised/400/input.js 1:0-1:20
}
```

### `diagnostics`

```

 core/uncategorised/400/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected keyword null

    function t(null) { }
               ^^^^


```
