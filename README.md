# Override Marko Core Tag

This is an example of overriding the Marko core `a` tag to enforce a tabnabbing fix on external links.
This is done in an effort to prevent tabnabbing.

## Installation

```bash
npm install --save
```

## Usage
**src:**
```marko

<a href="..." target="_blank">
    ...
</a>
```
**dist:**
<a href="..." target="_blank" rel="noopener noreferrer">
    ...
</a>
```
