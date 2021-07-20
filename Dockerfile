FROM node:14-alpine

WORKDIR /app

COPY package.json /app/
RUN yarn install && yarn cache clean --force
COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]