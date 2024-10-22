# Sas-XXX

## Local Setup

### Pre-Requisites

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

### Set the env variables

1. Copy example file:
    ```bash
   cp .env.example .env
   ```
2. Fill empty values

### Build docker-compose

```bash
docker compose build
```

### Launch the stack

```bash
docker compose up -d
```
