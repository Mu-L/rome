# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 555`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "foo"
				loc: SourceLocation core/uncategorised/555/input.js 1:9-1:12 (foo)
			}
			body: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation core/uncategorised/555/input.js 5:2-6:1
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: [
					JSBindingIdentifier {
						name: "first"
						meta: JSPatternMeta {
							loc: SourceLocation core/uncategorised/555/input.js 2:4-2:9
						}
						loc: SourceLocation core/uncategorised/555/input.js 2:4-2:9 (first)
					}
					JSBindingIdentifier {
						name: "third"
						meta: JSPatternMeta {
							loc: SourceLocation core/uncategorised/555/input.js 4:4-4:9
						}
						loc: SourceLocation core/uncategorised/555/input.js 4:4-4:9 (third)
					}
				]
				rest: JSBindingIdentifier {
					name: "second"
					meta: JSPatternMeta {
						loc: SourceLocation core/uncategorised/555/input.js 3:7-3:13
					}
					loc: SourceLocation core/uncategorised/555/input.js 3:7-3:13 (second)
				}
				loc: SourceLocation core/uncategorised/555/input.js 1:13-5:1
			}
			loc: SourceLocation core/uncategorised/555/input.js 1:0-6:1
		}
		JSEmptyStatement {
			loc: SourceLocation core/uncategorised/555/input.js 6:1-6:2
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
				message: RAW_MARKUP {value: "The rest element has to be the last element when destructuring"}
			}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/555/input.js>
				end: Position 3:13
				start: Position 3:13
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/555/input.js>
	loc: SourceLocation core/uncategorised/555/input.js 1:0-7:0
}
```

### `diagnostics`

```

 core/uncategorised/555/input.js:3:13 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The rest element has to be the last element when destructuring

    1 │ function foo (·
    2 │     first,
  > 3 │     ...second,
      │              ^
    4 │     third,
    5 │ ) {


```
