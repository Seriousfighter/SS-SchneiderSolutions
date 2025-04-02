FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy project files
COPY . .

# Build the application
RUN npm run build


# Expose the port
EXPOSE 7000

# Start the application
CMD ["node", "./.output/server/index.mjs"]