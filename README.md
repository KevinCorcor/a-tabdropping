# Override Marko <a> tag in order to prevent Tabnabbing

This is an example of overriding the Marko core `a` tag to enforce a tabnabbing fix on external links.
This is done in an effort to prevent tabnabbing.

## Installation

```bash
npm install a-tabdropping --save
```

## Usage
**src:**
```html

<a href="..." target="_blank">
    ...
</a>
```
**dist:**
```html
<a href="..." target="_blank" rel="noopener noreferrer">
    ...
</a>
```
