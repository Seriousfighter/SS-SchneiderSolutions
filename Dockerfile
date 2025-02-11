FROM node:20-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built files and dependencies
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=7000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=7000

# Expose the port
EXPOSE 7000

# Start the application
CMD ["node", "./.output/server/index.mjs"]