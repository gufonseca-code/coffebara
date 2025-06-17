FROM node:23-slim

WORKDIR /app

COPY package*.json ./
RUN npm install -g nodemon \
    && npm install

VOLUME ["/app"]

COPY . .

EXPOSE 5000
CMD ["nodemon", "src/index.js"]