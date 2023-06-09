# Etapa de construcción
FROM node:latest as build

WORKDIR /app

COPY package.json ./

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY ngnix/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4001

CMD ["nginx","-g","daemon off;"]