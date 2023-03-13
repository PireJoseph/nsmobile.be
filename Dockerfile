FROM node:lts-buster

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN rm -rf .dist
RUN rm -rf node_modules

CMD [ "/bin/bash", "prod.sh" ]