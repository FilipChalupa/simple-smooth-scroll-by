# Simple smooth scrollBy [![npm](https://img.shields.io/npm/v/simple-smooth-scroll-by.svg)](https://www.npmjs.com/package/simple-smooth-scroll-by) [![Dependencies](https://img.shields.io/david/FilipChalupa/simple-smooth-scroll-by.svg)](https://www.npmjs.com/package/simple-smooth-scroll-by?activeTab=dependencies) ![npm type definitions](https://img.shields.io/npm/types/simple-smooth-scroll-by.svg)

Smoothly scrolls by x and y pixels. [Demo](https://filipchalupa.cz/simple-smooth-scroll-by/demo).

Detects native support of [smooth scroll-behavior](https://caniuse.com/css-scroll-behavior) and fallbacks to tiny reimplementation using `requestAnimationFrame` loop.

## Installation

```bash
npm install simple-smooth-scroll-by
```

## How to use

### JavaScript:

```javascript
import { scrollBy } from 'simple-smooth-scroll-by'

scrollBy(window, 0, 200) // Scroll right by 200px

// or

const container = document.querySelector('#container')
scrollBy(container, 100, 0) // Scroll down by 100px
```
