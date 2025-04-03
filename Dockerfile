# Build Stage
FROM node:22-alpine AS build
WORKDIR /app

# Copy package.json and lockfile
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . ./

# Build the project
RUN npm run build

# Production Stage
FROM node:22-alpine
WORKDIR /app

# Copy only the built output from the build stage
COPY --from=build /app/.output/ ./
# Expose the port
EXPOSE 7000

# Start the application
CMD ["node", "./server/index.mjs"]