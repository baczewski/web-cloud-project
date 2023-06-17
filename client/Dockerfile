FROM node:latest

RUN mkdir /home/client
WORKDIR /home/client
COPY ./package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]