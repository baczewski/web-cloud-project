FROM node:alpine AS build
WORKDIR /client
COPY package.json .
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /client/build /usr/share/nginx/html
