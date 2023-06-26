# Stage 1: Build stage
FROM node:18 AS build
WORKDIR /app

# Copy only package.json and yarn-lock.json to install dependencies
COPY package.json yarn.lock ./

# Set ENV from docker-compose build args
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG MEILISEARCH_HOST
ARG MEILISEARCH_API_KEY
ARG NEXT_PUBLIC_SEARCH_INDEX_NAME

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Production stage
FROM node:18 AS production
WORKDIR /app

# Modules
COPY --from=build /app/node_modules /app/node_modules

# Copy package.json from the build stage
COPY --from=build /app/package.json /app/package.json

# Copy built application from previous stage
COPY --from=build /app/.next ./.next

# Src files
COPY . .

# Set the environment variable to production
ENV NODE_ENV production

ENTRYPOINT ["./entrypoint.sh"]