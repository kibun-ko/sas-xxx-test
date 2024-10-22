FROM node:20-slim AS base

ARG PORT=3000

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

RUN npm install pm2 -g
RUN corepack enable

WORKDIR /src

FROM base AS build

COPY --link package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY --link . .
RUN pnpm run build

FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
COPY --from=build /src/ecosystem.config.cjs /src/

EXPOSE ${PORT}

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
