/**
 * Reflective Object-Oriented Traversal Search (Roots.js)
 * Roots is a function that recursively traverses an object and its prototype chain.
 * It searches for properties and values that match a given regular expression.
 *
 * @param {Object} obj - The object to be traversed.
 * @param {RegExp} regex - The regular expression to match against property keys and string values.
 * @param {string} path - The current property path (used internally for recursion).
 * @param {number} depth - The current depth of recursion (used to prevent infinite loops).
 * @param {Set} visited - A set of already visited objects (used to prevent infinite loops).
 */
function Roots(obj, regex, path = '', depth = 0, visited = new Set()) {
    // Prevent infinite loops by limiting the depth and avoiding revisiting objects
    if (depth > 100 || visited.has(obj)) return;
    visited.add(obj);

    // Traverse the prototype chain
    let proto = Object.getPrototypeOf(obj);
    if (proto && proto !== Object.prototype) {
        Roots(proto, regex, path + '.__proto__', depth + 1, visited);
    }

    // Traverse the object's own properties
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            let formattedKey = isNaN(key) ? '[' + JSON.stringify(key) + ']' : '[' + key + ']';
            let newPath = path ? `${path}${formattedKey}` : key;

            // Test the key against the regex
            if (regex.test(key)) {
                console.log(`Found matching key: ${newPath}`);
            }

            let value;
            try {
                value = obj[key];
            } catch (e) {
                continue; // Ignore properties that throw when accessed
            }

            // Test string values against the regex
            if (typeof value === 'string' && regex.test(value)) {
                console.log(`Found matching value in property: ${newPath}`);
            } else if (typeof value === 'object' && value !== null) {
                // Recurse into non-null objects
                Roots(value, regex, newPath, depth + 1, visited);
            }
        }
    }
}
