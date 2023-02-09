FROM node:18-alpine
WORKDIR /Nauuna-API
COPY package.json .
RUN npm install
COPY . .
CMD npm start