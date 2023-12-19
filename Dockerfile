FROM node:20.9.0-alpine3.18

WORKDIR /usr/src

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
