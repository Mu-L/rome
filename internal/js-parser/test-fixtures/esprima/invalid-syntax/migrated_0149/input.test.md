# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0149`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "hello"
				loc: SourceLocation esprima/invalid-syntax/migrated_0149/input.js 1:2-1:7 (hello)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0149/input.js 1:2-1:7
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
				message: RAW_MARKUP {value: "Unterminated comment"}
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0149/input.js>
				end: Position 1:0
				start: Position 1:0
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0149/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0149/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0149/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated comment

    /*hello
    ^


```
