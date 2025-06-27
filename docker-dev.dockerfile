FROM oven/bun:1
WORKDIR /usr/src/app
COPY package.json ./
COPY bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
EXPOSE 3000
