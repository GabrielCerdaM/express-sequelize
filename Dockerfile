# Etapa 1: build de dependencias
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Etapa 2: imagen final más liviana
FROM node:20-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
