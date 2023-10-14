#  Reflective Object-Oriented Traversal Search (Roots)

Roots is a function that recursively traverses an object and its prototype chain. It searches for properties and values that match a given regular expression.

## Example

```js
Roots(app, /obsidian/, 'app')
```

Output:

```txt
Found matching value in property: app["stack"][0]["renderer"]["previewEl"].__proto__.__proto__.__proto__.__proto__["constructorWin"]["siteInfo"]["host"]
Found matching value in property: app["stack"][0]["renderer"]["previewEl"].__proto__.__proto__.__proto__.__proto__["constructorWin"]["Prism"]["filename"]
Found matching value in property: app["stack"][0]["renderer"]["sections"][14]["html"]
Found matching value in property: app["stack"][0]["renderer"]["lastText"]
Found matching value in property: app["stack"][0]["renderer"]["text"]
Found matching value in property: app["site"]["host"]
```
