# Step 1: Use Node.js image as base
FROM node:16

# Step 2: Create and set working directory
WORKDIR /usr/src/app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the server files
COPY . .

# Step 5: Expose the server port and start the application
EXPOSE 5000
CMD ["node", "server.js"]
