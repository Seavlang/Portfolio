# FROM node:latest

# RUN mkdir -p /app

# WORKDIR /app

# COPY . .

# RUN npm install

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "start"]

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_SKIP_ESLINT=true
ENV RESEND_API_KEY=your_api_key_here

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]