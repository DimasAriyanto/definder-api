FROM node:20.9.0-alpine3.18

WORKDIR /usr/src

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT: "8080"
ENV DB_CONNECTION: "postgres"
ENV DB_HOST: "db"
ENV DB_DATABASE: "definder"
ENV DB_USERNAME: "developer"
ENV DB_PASSWORD: "123dimas"
ENV JWT_SECRET_KEY: "secret"

EXPOSE 8080

CMD ["npm", "run", "start"]
