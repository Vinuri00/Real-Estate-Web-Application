FROM node:21.6.2

# Set the working directory
WORKDIR /app/client
 
# Copy the application code to the container

COPY . .

# Install dependencies
RUN yarn
RUN yarn build

# Expose the port on which the application will run
EXPOSE 5000

# Start the application
CMD ["yarn", "preview"]
