FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./

RUN bun install

COPY . .

EXPOSE 3132

CMD ["bun", "run", "src/index.ts"]