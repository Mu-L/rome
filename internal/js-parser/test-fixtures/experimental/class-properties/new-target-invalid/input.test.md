# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-properties > new-target-invalid`

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
							loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:4-1:5 (x)
						}
						init: JSMetaProperty {
							meta: JSIdentifier {
								name: "new"
								loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:8-1:11 (new)
							}
							property: JSIdentifier {
								name: "target"
								loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:12-1:18 (target)
							}
							loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:8-1:18
						}
						loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:4-1:18
					}
				]
				loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:0-1:19
			}
			loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:0-1:19
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
				message: RAW_MARKUP {value: "new.target can only be used in functions or class properties"}
			}
			location: {
				language: "js"
				path: UIDPath<experimental/class-properties/new-target-invalid/input.js>
				end: Position 1:18
				start: Position 1:8
			}
		}
	]
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<experimental/class-properties/new-target-invalid/input.js>
	loc: SourceLocation experimental/class-properties/new-target-invalid/input.js 1:0-2:0
}
```

### `diagnostics`

```

 experimental/class-properties/new-target-invalid/input.js:1:8 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ new.target can only be used in functions or class properties

    var x = new.target;
            ^^^^^^^^^^


```
