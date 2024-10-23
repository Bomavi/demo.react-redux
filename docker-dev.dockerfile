FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "./"]
COPY ["yarn.lock", "./"]
RUN ["yarn", "--silent"]
COPY . .
EXPOSE 3000
