FROM  --platform=linux/amd64 node:22 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY src ./src
COPY prisma ./prisma

RUN npm ci
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

FROM --platform=linux/amd64 node:22-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/prisma ./prisma

ENTRYPOINT [ "sh", "-c", "echo Starting app && node dist/main.js" ]