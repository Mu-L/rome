# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-grouping > migrated_0000`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 16
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 15
          index: 15
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: BinaryExpression {
        operator: '+'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 15
            index: 15
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        right: NumericLiteral {
          value: 3
          format: undefined
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 15
              index: 15
              line: 1
            }
            start: Object {
              column: 14
              index: 14
              line: 1
            }
          }
        }
        left: BinaryExpression {
          operator: '+'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 11
              index: 11
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
          left: NumericLiteral {
            value: 1
            format: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 2
                index: 2
                line: 1
              }
              start: Object {
                column: 1
                index: 1
                line: 1
              }
            }
          }
          right: NumericLiteral {
            value: 2
            format: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 8
                index: 8
                line: 1
              }
              start: Object {
                column: 7
                index: 7
                line: 1
              }
            }
          }
        }
      }
    }
  ]
}
```