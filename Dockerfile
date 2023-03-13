FROM node:lts-buster

RUN mkdir -p /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN  npm run build
ENV PATH ./node_modules/.bin/:$PATH