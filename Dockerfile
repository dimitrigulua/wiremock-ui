FROM node:21-alpine3.19

WORKDIR /app
RUN apk --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.19/main add bash

COPY *.json yarn.lock ./
RUN yarn install

COPY /src /app/src
COPY /public /app/public

EXPOSE 3000

CMD ["yarn", "start"]
