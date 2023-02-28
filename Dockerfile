FROM node:18-alpine AS base

FROM base AS deps-runner
WORKDIR /app
COPY ./project/package.json .
RUN npm i --omit=dev

FROM base AS deps
WORKDIR /app
COPY --from=deps-runner /app/package.json .
COPY --from=deps-runner /app/node_modules ./node_modules
RUN npm i

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./project .
RUN npm run build

FROM base AS runner
WORKDIR /app
COPY --from=deps-runner /app/package.json .
COPY --from=deps-runner /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
EXPOSE 3000
CMD npm run start
