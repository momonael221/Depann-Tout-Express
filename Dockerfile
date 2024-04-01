FROM node:16.16.0

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install
RUN yarn install

# Copy the rest of the source code
COPY . .

# Build the app
RUN yarn build

# Expose the app's port
EXPOSE $PORT

# Set the command to start the app
CMD ["yarn", "preview"]