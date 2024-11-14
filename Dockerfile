FROM node:21-slim

WORKDIR /app

# Install bash (if needed) and Yarn
RUN apt-get update && apt-get install -y bash && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies with Yarn
COPY *.json yarn.lock /app/
RUN yarn install

# Copy the application code
COPY ./src /app/src
COPY ./public /app/public

EXPOSE 3000

CMD ["yarn", "start"]
