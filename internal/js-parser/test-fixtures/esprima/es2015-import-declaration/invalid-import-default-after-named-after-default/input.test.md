# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-import-declaration > invalid-import-default-after-named-after-default`

### `ast`

```javascript
JSRoot {
	body: [
		JSImportDeclaration {
			namedSpecifiers: [
				JSImportSpecifier {
					imported: JSIdentifier {
						name: "bar"
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:13-1:16 (bar)
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "bar"
							loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:13-1:16 (bar)
						}
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:13-1:16
					}
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:13-1:16
				}
			]
			defaultSpecifier: JSImportDefaultSpecifier {
				local: JSImportSpecifierLocal {
					name: JSBindingIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:7-1:10 (foo)
					}
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:7-1:10
				}
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:0-1:10
			}
			source: JSStringLiteral {
				value: ""
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:0-1:17
			}
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:0-1:17
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:17-1:18
			}
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:17-1:18
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "foo"
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:19-1:22 (foo)
			}
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:19-1:22
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "from"
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:23-1:27 (from)
			}
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:23-1:27
		}
		JSExpressionStatement {
			expression: JSStringLiteral {
				value: "foo"
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:28-1:33
			}
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:28-1:34
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Expected keyword <emphasis>"}, "from", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js>
				end: Position 1:17
				start: Position 1:17
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: []
	path: UIDPath<esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js>
	loc: SourceLocation esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-import-declaration/invalid-import-default-after-named-after-default/input.js:1:17
parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected keyword from

    import foo, {bar}, foo from "foo";
                     ^


```
