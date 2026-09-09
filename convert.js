const fs = require('fs');
let html = fs.readFileSync('old-vanilla/index.html', 'utf8');

// Extract body contents
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.log('No body found');
  process.exit(1);
}
let bodyContent = bodyMatch[1];

// Remove script tags from the body
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Basic JSX conversions
let jsx = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
  .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
  .replace(/<circle([^>]*[^\/])>/g, '<circle$1 />')
  .replace(/<polygon([^>]*[^\/])>/g, '<polygon$1 />')
  .replace(/<line([^>]*[^\/])>/g, '<line$1 />')
  .replace(/<polyline([^>]*[^\/])>/g, '<polyline$1 />')
  .replace(/style="([^"]*)"/g, (match, p1) => {
    // Strip inline styles to prevent JSX errors
    return ''; 
  });

const pageContent = `
import React from 'react';

export default function Home() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;
fs.writeFileSync('app/page.js', pageContent);
console.log('Done!');
