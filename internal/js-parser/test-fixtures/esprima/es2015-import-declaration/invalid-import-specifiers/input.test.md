# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-import-declaration > invalid-import-specifiers`

### `ast`

```javascript
JSRoot {
	body: [
		JSImportDeclaration {
			namedSpecifiers: [
				JSImportSpecifier {
					imported: JSIdentifier {
						name: "from"
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:12-1:16 (from)
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "from"
							loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:12-1:16 (from)
						}
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:12-1:16
					}
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:12-1:16
				}
				JSImportSpecifier {
					imported: JSIdentifier {
						name: ""
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:17-1:22 ()
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: ""
							loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:17-1:22 ()
						}
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:17-1:22
					}
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:17-1:22
				}
				JSImportSpecifier {
					imported: JSIdentifier {
						name: ""
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:22-1:23 ()
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: ""
							loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:22-1:23 ()
						}
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:22-1:23
					}
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:22-1:23
				}
			]
			defaultSpecifier: JSImportDefaultSpecifier {
				local: JSImportSpecifierLocal {
					name: JSBindingIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:7-1:10 (foo)
					}
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:7-1:10
				}
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:0-1:10
			}
			source: JSStringLiteral {
				value: ""
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:0-1:23
			}
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:0-1:23
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
						text: [
							RAW_MARKUP {value: "Expected the opening "}
							"import specifiers"
							RAW_MARKUP {value: " character <emphasis>"}
							"{"
							RAW_MARKUP {value: "</emphasis>"}
						]
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, "f", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-import-declaration/invalid-import-specifiers/input.js>
				end: Position 1:11
				start: Position 1:12
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: []
	path: UIDPath<esprima/es2015-import-declaration/invalid-import-specifiers/input.js>
	loc: SourceLocation esprima/es2015-import-declaration/invalid-import-specifiers/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-import-declaration/invalid-import-specifiers/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━

  ✖ Unexpected character f

    import foo, from "bar";
                ^

  ℹ Expected the opening import specifiers character {


```
