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

```javascript
spectrum('js')                         // ''
spectrum('JavaScript')                 // '#f1e05a'
spectrum('JavaScript', 'rgba')         // 'rgba(241,224,90,1)'
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
