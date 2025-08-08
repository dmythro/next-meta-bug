FROM oven/bun:alpine AS build

WORKDIR /usr/src/app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# FROM oven/bun:alpine AS release
FROM node:24-alpine AS release
WORKDIR /app

COPY --from=build /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static
COPY --from=build /usr/src/app/public ./public

EXPOSE 3000
# CMD ["bun", "server.js"]
CMD ["node", "server.js"]
