cache.js

Deep namespacing cache function for JavaScript

Allows setting and getting deep namespaced properties in a storage object.

Instead of this:

if ( obj.people && obj.people.students && obj.people.students.john_doe ){
    obj.people.students.john_doe.age = 15;
}

You can do this:

cache('obj.people.students.john_doe.age', 15); // Sets the value, and returns it

Regardless of whether or not any of those inner objects actually exist.

For retrieving data, simply pass a namespace as the only argument:

cache('obj.people.students.john_doe.age') // Returns the value (or undefined)

To inspect the entire cache, simply call the cache function without any arguments:

cache() // Returns the entire cache object