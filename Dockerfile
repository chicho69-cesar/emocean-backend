FROM node:19-alpine3.15 as installer
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:19-alpine3.15 as runner
WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .

EXPOSE 8080
ENV NODE_ENV=production

CMD ["node", "app.js"]
