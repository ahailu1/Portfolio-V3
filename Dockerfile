FROM node:16.13.0

RUN mkdir -p /var/www/portfoliov3/

WORKDIR /var/www/portfoliov3/

COPY . .

EXPOSE 4000

RUN npm install

CMD ["npm", "start"]