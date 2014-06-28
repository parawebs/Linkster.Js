#Linkster.js

---

Javascript plugin for blocking uncertain domains/hosts from a page.

PS : Experimental, but works.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/codehate/linkster.js/master/linkster.min.js
[max]: https://raw.githubusercontent.com/codehate/linkster.js/master/linkster.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="linkster.min.js"></script>
<script>

// Assign hostnames to a arrray

config = [
    'spamer.com',
    'spam.it',
    'kill.me'
];

// Initialize the linkster object
  linkster.init(config);

//That's all done.

</script>
```


## Documentation

Documentation in the development version.

## Examples

Working sample [here][link]
[link]: http://codehate.github.io/Linkster.Js/


## Release History

__(Nothing yet)__