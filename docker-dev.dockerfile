FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN ["npm", "install", "--silent"]
COPY . .
EXPOSE 3000
