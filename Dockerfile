FROM mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /pw-tests

# Copying package files and installing dependencies
COPY package*.json ./
RUN npm ci

# Copying the rest of the files
COPY . .

CMD ["npm", "run", "test"]