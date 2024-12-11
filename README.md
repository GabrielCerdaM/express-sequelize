
# API REST contruida en Express-Sequelize

Este proyecto utiliza **Express**, **PostGreSql**, **Sequelize** y **Docker** para la construcción de un API REST. Está diseñado para gestionar la información de usuarios, clientes, servicios y pagos.

## 🚀 Características

- Gestión de:
    - usuarios (autorización y autentificación) ✅
    - clientes (🔧⚙️ en proceso)
    - servicios (🔧⚙️ en proceso)
    - pagos (🔧⚙️ en proceso)

## 🛠️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GabrielCerdaM/express-sequelize.git

2. ⚙️ Crear archivo .env
    ```bash
    touch .env

## .env 
    PORT=
    POSTGRES_PORT=
    POSTGRES_DB=
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_HOST=
    JWT_SECRET=
z
2. 🧰 Instalación de dependencias

    ```bash
    npm install

3. 🐳 Construye los contenedores
    ```bash
    docker-compose up -d

4. ▶️ Iniciar servidor
    ```bash
    npm run dev

## La API estará disponible en http://localhost:3000

