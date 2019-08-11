FROM node:10.16.0-alpine

LABEL Author Victor Martins Bicudo

WORKDIR /usr/src/app

COPY . .

RUN npm install \
 && npm run build

EXPOSE 80

CMD ["npm", "start"]
