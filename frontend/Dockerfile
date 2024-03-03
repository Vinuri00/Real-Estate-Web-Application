FROM node:18.18.2-alpine3.18

# Set the working directory
WORKDIR /app/client
 
# Copy the application code to the container
 
COPY . .
 
# Install dependencies
RUN yarn
RUN yarn build
 
# Start the application
CMD ["yarn", "dev"]