#!/bin/bash 
export HOST=0.0.0.0;
export PORT=3000;
export NODE_ENV=production;

npm install -y 
npm run build

node dist/server/entry.mjs;