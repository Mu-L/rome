# `parse.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/markup/parse.test.ts --update-snapshots` to update.

## `should not parse string escapes`

### `0`

```javascript
RAW_MARKUP {value: "<filelink target=\"C:\\Users\\sebmck\\file.ts\" />"}
```

### `1`

```javascript
[
	Tag {
		name: "info"
		children: [Text {value: "[MemoryFileSystem] Adding new project directory C:\\Users\\sebmck\\rome", source: true}]
		attributes: Consumer<{}>
	}
]
```

### `2`

```javascript
[
	Text {value: "  <info>[MemoryFileSystem] Adding new project directory C:\\Users\\Sebastian\\rome\\</info>\n        ", source: true}
	Tag {
		name: "error"
		children: [
			Tag {
				name: "emphasis"
				children: [Text {value: "^", source: true}]
				attributes: Consumer<{}>
			}
		]
		attributes: Consumer<{}>
	}
	Text {value: " ", source: true}
]
```
