FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Set production environment and memory limits
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=512"

# Optimize for single process in container
ENV NITRO_PRESET=node-server
ENV NUXT_INSTANCE_COUNT=1

# Expose the port
EXPOSE 7000

# Use a process manager to handle crashes
RUN npm install -g pm2
CMD ["pm2-runtime", "./.output/server/index.mjs", "--instances", "1", "--exp-backoff-restart-delay=100"]