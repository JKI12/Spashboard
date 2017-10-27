FROM node:8.0

RUN npm install -g pm2

WORKDIR /opt/app/Spotboard

COPY node_modules node_modules

COPY dist ./dist

COPY package.json .

EXPOSE 3000

WORKDIR /opt/app/Spotboard/dist/server

CMD ["pm2-docker", "main.js"]