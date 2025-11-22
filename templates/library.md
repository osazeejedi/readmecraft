# {{projectName}}

<div align="center">

![npm version](https://img.shields.io/npm/v/{{projectName}}.svg)
![npm downloads](https://img.shields.io/npm/dm/{{projectName}}.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/{{projectName}}.svg)

**{{description}}**

[Installation](#installation) • [Usage](#usage) • [API](#api) • [Examples](#examples) • [Contributing](#contributing)

</div>

## ✨ Features

- 🚀 Lightweight and fast
- 📦 Zero dependencies
- 🎯 TypeScript support
- 🌐 Works in Node.js and browsers
- ⚡ Tree-shakeable
- 📝 Fully documented

## 📦 Installation

### NPM

```bash
npm install {{projectName}}
```

### Yarn

```bash
yarn add {{projectName}}
```

### PNPM

```bash
pnpm add {{projectName}}
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/{{projectName}}@latest/dist/index.min.js"></script>
```

## 🚀 Usage

### ES Modules

```javascript
import {{projectName}} from '{{projectName}}';

// Use the library
const result = {{projectName}}.doSomething();
console.log(result);
```

### CommonJS

```javascript
const {{projectName}} = require('{{projectName}}');

// Use the library
{{projectName}}.doSomething();
```

### Browser (UMD)

```html
<script src="path/to/{{projectName}}.js"></script>
<script>
  // Library is available as global variable
  {{projectName}}.doSomething();
</script>
```

## 📖 API Reference

### Methods

#### `init(options)`
Initialize the library with configuration options.

**Parameters:**
- `options` (Object) - Configuration object
  - `debug` (Boolean) - Enable debug mode
  - `timeout` (Number) - Request timeout in ms

**Returns:** Instance

**Example:**
```javascript
const instance = {{projectName}}.init({
  debug: true,
  timeout: 5000
});
```

#### `doSomething(param)`
Main functionality method.

**Parameters:**
- `param` (String|Object) - Input parameter

**Returns:** Result object

**Example:**
```javascript
const result = {{projectName}}.doSomething('input');
```

### Properties

#### `version`
Returns the library version.

```javascript
console.log({{projectName}}.version); // "1.0.0"
```

## 💡 Examples

### Basic Example

```javascript
import {{projectName}} from '{{projectName}}';

// Initialize
const instance = {{projectName}}.init();

// Use
const result = instance.doSomething('test');
console.log(result);
```

### Advanced Example

```javascript
import {{projectName}} from '{{projectName}}';

// Configure with options
const instance = {{projectName}}.init({
  debug: true,
  onError: (error) => console.error(error),
  timeout: 3000
});

// Chain methods
instance
  .doSomething('step1')
  .then(result => instance.doMore(result))
  .then(final => console.log(final))
  .catch(error => console.error(error));
```

### TypeScript Example

```typescript
import {{projectName}}, { Options, Result } from '{{projectName}}';

const options: Options = {
  debug: false,
  timeout: 5000
};

const instance = {{projectName}}.init(options);
const result: Result = instance.doSomething('input');
```

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

## 🔧 Configuration

Create a `{{projectName}}.config.js` file:

```javascript
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  timeout: 10000,
  retries: 3
};
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📊 Performance

- Bundle size: ~5KB minified + gzipped
- Zero dependencies
- Tree-shakeable for optimal bundle size
- Lazy-loadable modules

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 License

MIT © {{year}} {{author}}

## 🔗 Related Projects

- [similar-project-1](https://github.com/example/project1)
- [similar-project-2](https://github.com/example/project2)

## 📮 Support

- 📧 Email: support@{{projectName}}.com
- 💬 [Discord](https://discord.gg/{{projectName}})
- 🐦 [Twitter](https://twitter.com/{{projectName}})
- 📖 [Documentation](https://docs.{{projectName}}.com)
