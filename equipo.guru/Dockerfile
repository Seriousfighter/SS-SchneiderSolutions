# Usa una imagen ligera de Node.js
FROM node:20-alpine

WORKDIR /app

# Copiar archivos clave para aprovechar caché de Docker
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir el proyecto Nuxt
RUN npm run build

# Exponer el puerto por defecto (se puede cambiar en .env)
EXPOSE 7000

# Iniciar la aplicación con variables de entorno
CMD ["sh", "-c", "node .output/server/index.mjs"]
