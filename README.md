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

### Internal Blog Linking

<img src="https://i.imgur.com/bv3ycLI.png">

Use this to add a unique ID to whatever you want to create an internal link to.

<img src="https://i.imgur.com/h8F9Uhg.png">

When creating a link add the uniqueID created in the link field (#\<uniqueID>)

### Katex

<img src="https://i.imgur.com/6Ns7CP5.png">

It uses react-katex to display math formulas.

### Drag & Drop

<img src="https://i.imgur.com/73SDe76.png">

Drag and Drop the images or browse to upload the images.  
You can also add an image via the URL .

## Installing Dependencies

To install all the required dependencies run this command

```
npm install
```

## Getting Started

To run the application run this command.

```
npm start
```
