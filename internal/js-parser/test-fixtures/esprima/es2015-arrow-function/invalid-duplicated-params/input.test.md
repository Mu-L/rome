# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > invalid-duplicated-params`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSArrowFunctionExpression {
				body: JSReferenceIdentifier {
					name: "y"
					loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:10-1:11 (y)
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: [
						JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:1-1:2 (x)
						}
						JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:4-1:5 (x)
						}
					]
					loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:0-1:9
				}
				loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:0-1:11
			}
			loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:0-1:12
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
						location: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:4-1:5 (x)
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Argument <emphasis>"}, "x", RAW_MARKUP {value: "</emphasis> name clash in strict mode"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-arrow-function/invalid-duplicated-params/input.js>
				end: Position 1:5
				start: Position 1:4
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-arrow-function/invalid-duplicated-params/input.js>
	loc: SourceLocation esprima/es2015-arrow-function/invalid-duplicated-params/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-arrow-function/invalid-duplicated-params/input.js:1:4 parse(js) ━━━━━━━━━━━━━━━━━━━━

  ✖ Argument x name clash in strict mode

  ℹ Defined already here

    (x, x) => y;
        ^


```
