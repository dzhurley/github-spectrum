# github-spectrum

The `github-spectrum` function finds color codes for any Github language (according to [Github Linguist](https://github.com/github/linguist)) in either their native HEX format or RGBA

## Install

    npm install github-spectrum

## Usage

```javascript
var spectrum = require('github-spectrum');

var color = spectrum(
	// e.g. 'JavaScript'
	languageName,

    // 'rgba' or 'hex', defaults to 'hex'
	type
);
```

## Examples

Language names are case insensitive and also check through language `aliases` as specified per entry in [Github Linguist](https://github.com/github/linguist). If a language is not found, either `'#cccccc'` or `'rgba(204,204,204,1)'` will be returned by default.

```javascript
spectrum('js')                         // '#f1e05a'
spectrum('JavaScript')                 // '#f1e05a'
spectrum('JavaScript', 'rgba')         // 'rgba(241,224,90,1)'
spectrum('JavaScript Is Rad')          // '#cccccc'
spectrum('JavaScript Is Rad', 'rgba')  // 'rgba(204,204,204,1)'
```

## Gotchas:

### json
As `github-spectrum` relies on loading a JSON file with `require()`, webpack setups need to include the [json-loader](https://github.com/webpack/json-loader). One way is to include it in the `preLoaders`:

```javascript
...
preLoaders: [
    {
        test: /.json$/,
        loader: 'json'
    }
]
...
```
