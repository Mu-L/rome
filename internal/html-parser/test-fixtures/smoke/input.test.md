# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/html-parser/index.test.ts --update-snapshots` to update.

## `smoke`

### `ast`

```javascript
HTMLRoot {
	body: [
		HTMLElement {
			attributes: []
			children: [
				HTMLElement {
					attributes: [
						HTMLAttribute {
							name: HTMLIdentifier {
								name: "placeholder"
								loc: SourceLocation smoke/input.html 3:8-3:19
							}
							value: HTMLString {
								value: "ok"
								loc: SourceLocation smoke/input.html 3:20-3:24
							}
							loc: SourceLocation smoke/input.html 3:8-3:24
						}
					]
					children: []
					selfClosing: true
					name: HTMLIdentifier {
						name: "input"
						loc: SourceLocation smoke/input.html 3:2-3:7
					}
					loc: SourceLocation smoke/input.html 3:1-3:26
				}
				HTMLText {
					value: "yesiamatextdocumentasdfhahahaok"
					loc: SourceLocation smoke/input.html 4:1-14:6
				}
				HTMLElement {
					attributes: []
					children: [
						HTMLElement {
							attributes: []
							children: [
								HTMLElement {
									attributes: []
									children: [
										HTMLText {
											value: "lol"
											loc: SourceLocation smoke/input.html 14:24-14:27
										}
									]
									selfClosing: false
									name: HTMLIdentifier {
										name: "span"
										loc: SourceLocation smoke/input.html 14:19-14:23
									}
									loc: SourceLocation smoke/input.html 14:18-14:34
								}
							]
							selfClosing: false
							name: HTMLIdentifier {
								name: "span"
								loc: SourceLocation smoke/input.html 14:13-14:17
							}
							loc: SourceLocation smoke/input.html 14:12-14:41
						}
					]
					selfClosing: false
					name: HTMLIdentifier {
						name: "span"
						loc: SourceLocation smoke/input.html 14:7-14:11
					}
					loc: SourceLocation smoke/input.html 14:6-14:48
				}
				HTMLElement {
					attributes: []
					children: [
						HTMLText {
							value: "mate"
							loc: SourceLocation smoke/input.html 16:7-16:11
						}
					]
					selfClosing: false
					name: HTMLIdentifier {
						name: "yeah"
						loc: SourceLocation smoke/input.html 16:2-16:6
					}
					loc: SourceLocation smoke/input.html 16:1-16:18
				}
			]
			leadingComments: ["0"]
			selfClosing: false
			name: HTMLIdentifier {
				name: "foo"
				loc: SourceLocation smoke/input.html 2:1-2:4
			}
			loc: SourceLocation smoke/input.html 2:0-19:6
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " I am a comment "
			loc: SourceLocation smoke/input.html 1:0-1:23
		}
		CommentBlock {
			id: "1"
			value: " I am another comment "
			loc: SourceLocation smoke/input.html 17:1-17:30
		}
	]
	corrupt: false
	diagnostics: []
	path: UIDPath<smoke/input.html>
	loc: SourceLocation smoke/input.html 1:0-19:6
}
```

### `diagnostics`

```

```
