# Rich Text Editor

## Overview

This is a full-featured Javascript WYSIWYG editor.

_Draft.js_ and _Quill_ have great out-of-the-box features but are not that extensible and complex features are difficult to implement or impossible.

That's why this project was created using [Slate.js](https://github.com/ianstormtaylor/slate) which is highly customizable.

## Key Features

- [Table Insertion](#table)
- [HTML Embed](#html-embed)
- [Inserting editable HTML](#editable-html)
- [Internal Blog Linking](#internal-blog-linking)
- [Katex](#katex)
- [Drag & Drop Image Upload](#drag-&-drop) (_backend to be configured_)

## Working

### Table

<img src="https://i.imgur.com/42FI9yF.png">

<img src="https://i.imgur.com/bgFz0ph.png">

Resizable table and images.

### HTML Embed

<img src="https://i.imgur.com/1D3LjMj.png">
Write html and embed it in your document/blog with the live preview of your html available as you write.This cannot be edited using the rich text features of the editor and can only be edited via the HTML mode.

You can also define classes in your global stylesheet and use those classes in this editor.

HTML sanitization is done by [_interweave_](https://www.npmjs.com/package/interweave).

### Editable HTML

<img src="https://i.imgur.com/ua6T7mH.png">

<img src="https://i.imgur.com/r7AAYlN.png">

If you wish to write in html and have the option to edit it later using the rich text features of the editor then this will be useful.

When saving in this format, only the features supported by the editor are kept and the rest is stripped off.
