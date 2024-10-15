FROM node:14-alpine
Workdir /app
COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"]
