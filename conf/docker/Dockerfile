FROM node:10.16.2-alpine

LABEL Author Victor Martins Bicudo

WORKDIR /usr/src/app

COPY . .

RUN npm ci \
    && npm run build

EXPOSE 80

CMD ["npm", "start"]
