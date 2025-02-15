FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN npm run build --production
RUN npm install -g serve
EXPOSE 3000
CMD serve -s build