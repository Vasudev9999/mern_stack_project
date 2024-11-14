# Step 1: Use Node.js image as base
FROM node:16

# Step 2: Create and set working directory
WORKDIR /usr/src/app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the client files
COPY . .

# Step 5: Build the React application
RUN npm run build

# Step 6: Install and use serve to serve the build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
