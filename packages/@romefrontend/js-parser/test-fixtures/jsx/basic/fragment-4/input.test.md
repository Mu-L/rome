# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > fragment-4`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "input.jsx"
		end: Object {
			column: 0
			index: 50
			line: 8
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.jsx"
				end: Object {
					column: 3
					index: 49
					line: 7
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSXFragment {
				loc: Object {
					filename: "input.jsx"
					end: Object {
						column: 3
						index: 49
						line: 7
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				children: Array [
					JSXText {
						value: "\n  "
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 2
								index: 5
								line: 2
							}
							start: Object {
								column: 2
								index: 2
								line: 1
							}
						}
					}
					JSXFragment {
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 5
								index: 45
								line: 6
							}
							start: Object {
								column: 2
								index: 5
								line: 2
							}
						}
						children: Array [
							JSXText {
								value: "\n    "
								loc: Object {
									filename: "input.jsx"
									end: Object {
										column: 4
										index: 12
										line: 3
									}
									start: Object {
										column: 4
										index: 7
										line: 2
									}
								}
							}
							JSXFragment {
								loc: Object {
									filename: "input.jsx"
									end: Object {
										column: 7
										index: 39
										line: 5
									}
									start: Object {
										column: 4
										index: 12
										line: 3
									}
								}
								children: Array [
									JSXText {
										value: "\n      super deep\n    "
										loc: Object {
											filename: "input.jsx"
											end: Object {
												column: 4
												index: 36
												line: 5
											}
											start: Object {
												column: 6
												index: 14
												line: 3
											}
										}
									}
								]
							}
							JSXText {
								value: "\n  "
								loc: Object {
									filename: "input.jsx"
									end: Object {
										column: 2
										index: 42
										line: 6
									}
									start: Object {
										column: 7
										index: 39
										line: 5
									}
								}
							}
						]
					}
					JSXText {
						value: "\n"
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 0
								index: 46
								line: 7
							}
							start: Object {
								column: 5
								index: 45
								line: 6
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```