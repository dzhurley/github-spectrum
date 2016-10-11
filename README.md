# github-spectrum

The `github-spectrum` function finds color codes for any Github language (according to [Github Linguist](https://github.com/github/linguist)) in any format provided by [colorcolor](http://metaloha.github.io/color2color/).

## Install

    npm install github-spectrum

## Usage

```javascript
var spectrum = require('github-spectrum');

var color = spectrum(
	// e.g. 'JavaScript'
	languageName,

	// ('rgba', 'hex', 'hexa', 'rgb', 'hsl', 'hsla', 'hsv')
	// optional, defaults to 'hex'
	type,

	// used by colorcolor when `type` contains an alpha: ('rgba', 'hexa', 'hsla')
	// optional, defaults to false
	calculateOpacity
);
```

## Examples

```javascript
spectrum('js')                         // ''
spectrum('JavaScript')                 // '#f1e05a'
spectrum('JavaScript', 'rgba')         // 'rgba(241,224,90,1)'
spectrum('JavaScript', 'rgba', true)   // 'rgba(233,207,0,0.6471)'
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

### safari
[colorcolor](http://metaloha.github.io/color2color/) doesn't support Safari so neither does `github-spectrum`. A [pull request](https://github.com/metaloha/color2color/pull/13) is currently open to remedy this.
