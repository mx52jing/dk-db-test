FROM node:12-alpine
WORKDIR /app
COPY package.json /app
RUN npm i
COPY ./ /app
EXPOSE 3001
CMD EGG_SERVER_ENV=prod npm start
