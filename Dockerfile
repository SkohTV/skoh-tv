# Base distro
FROM oven/bun:latest AS base


# Fetch deps stage
FROM base AS deps

WORKDIR /website
COPY . .

RUN bun install --frozen-lockfile 



# Build stage
FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /website
COPY --from=deps /website/node_modules node_modules
COPY . .

RUN bun run build 



# Release stage
FROM base AS release

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /website
COPY --from=builder /website/public ./public
COPY --from=builder /website/.next/standalone ./
COPY --from=builder /website/.next/static ./.next/static

EXPOSE 5000
ENV PORT 5000
ENTRYPOINT ["bun", "/website/server.js"]
