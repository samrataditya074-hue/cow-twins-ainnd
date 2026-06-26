const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove unused React imports
      content = content.replace(/import React from 'react';\r?\n/g, '');
      content = content.replace(/import React, \{/g, 'import {');

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Fixed React imports');
