# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > tuple-rest-valid`

### `ast`

```javascript
JSRoot {
	body: [
		TSTypeAlias {
			id: JSBindingIdentifier {
				name: "Unbounded"
				loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:5-1:14 (Unbounded)
			}
			right: TSTupleType {
				elementTypes: [
					TSTupleElement {
						optional: false
						typeAnnotation: TSRestType {
							argument: TSTypeReference {
								typeName: JSReferenceIdentifier {
									name: "A"
									loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:21-1:22 (A)
								}
								loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:21-1:22
							}
							loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:18-1:22
						}
						loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:18-1:22
					}
					TSTupleElement {
						optional: false
						typeAnnotation: TSRestType {
							argument: TSTypeReference {
								typeName: JSReferenceIdentifier {
									name: "B"
									loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:27-1:28 (B)
								}
								loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:27-1:28
							}
							loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:24-1:28
						}
						loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:24-1:28
					}
					TSTupleElement {
						optional: false
						typeAnnotation: TSBooleanKeywordTypeAnnotation {
							loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:30-1:37
						}
						loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:30-1:37
					}
				]
				loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:17-1:38
			}
			loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:0-1:39
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/types/tuple-rest-valid/input.ts>
	loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:0-2:0
}
```

### `diagnostics`

```

```
