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


CMD ["node", "./.output/server/index.mjs"]