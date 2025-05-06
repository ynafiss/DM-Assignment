import '@testing-library/jest-dom';

// Add TextEncoder polyfill if needed
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}