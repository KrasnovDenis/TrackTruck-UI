FROM node:latest as build

WORKDIR /usr/local/src/monitoring-client

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE 3000

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["yarn", "start"]



