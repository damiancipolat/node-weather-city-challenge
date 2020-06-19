FROM node:10.16.0-alpine
LABEL Maintainer="Damian Cipolat"
ENV APP_DIR weather_api
ENV TZ=America/Buenos_Aires
WORKDIR /usr/app/${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run test
RUN npm prune --production
RUN rm -Rf test
EXPOSE 3000
CMD [ "npm" , "start" ]