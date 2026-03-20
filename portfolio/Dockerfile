
# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app



# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install



# Copy rest of the app
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
