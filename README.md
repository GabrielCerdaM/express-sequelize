
# API REST contruida en Express-Sequelize

Este proyecto utiliza **Express**, **PostGreSql**, **Sequelize** y **Docker** para la construcción de un API REST. Está diseñado para gestionar la información de usuarios, clientes, servicios y pagos.

## 🚀 Características

- Administración, autentificación y autorización de usuarios
- Administración de clientes (🔧⚙️ en proceso)
- Administración de servicios (🔧⚙️ en proceso)
- Módulo de pagos (🔧⚙️ en proceso)

## Requerimientos
- Docker >= 27.3.1
- Node >= 22.11

## 🛠️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GabrielCerdaM/express-sequelize.git

2. ⚙️ Crear archivo .env
    ```bash
    touch .env

## .env 
    PORT=3000
    POSTGRES_PORT=
    POSTGRES_DB=
    POSTGRES_USER=
    POSTGRES_PASSWORD=
    POSTGRES_HOST=
    JWT_SECRET=

2.  🐳 Construye y levanta los contenedores
    ```bash
    docker-compose up -d
    ```

#### Esto hará lo siguiente:

- Construirá tu imagen de Node.js desde el Dockerfile

- Levantará tu backend en http://localhost:3000

- Iniciará PostgreSQL en el puerto 5432

- Habilitará pgAdmin en http://localhost:5050

#### Una vez ejecutado el comando, el servidor estará disponible en http://localhost:3000 o de acuerdo a la variable definida en .env

# Rutas Disponibles

### Autentificación
| Método | Ruta           | Descripción              | Middleware              | query | Payload          | Respuesta       |
|--------|----------------|--------------------------|------------------|--------|------------------|-----------------|
| GET   | `/api/v1/auth/login` | Inicia sesión de usuario | [ ] | - | `{ email, pass }`| `{ token, user }`|
| GET   | `/api/v1/auth/send-email` | Solicitud token restablecimiento de contraseña | [ ] | ?email= | `{ email }`| `{ message }`|
| POST   | `/api/v1/auth/reset-password` | Solicitud restablecimiento de contraseña | [ ] | ?token= | `{ email }`| `{ boolean }`|

### Usuarios

| Método | Ruta | Descripción | Middlewares | query | Payload | Respuesta |
|----|----|----|----|-|----|----|
| GET   | `/api/v1/users/` | Obtener usuarios | [ Authentication, Authorization ] | - | `{}`| `{ users }`|
| GET   | `/api/v1/users/:id` | Obtener usuario por identificador | [ Authentication, Authorization ] | - | `{ email, pass }`| `{ user }`|
| POST   | `/api/v1/users/` | Crear un nuevo usuario | [ Authentication, Authorization ] | - | `{ email, password, role }`| `{ user }`|
| PATCH   | `/api/v1/users/:id` | Actualizar usuario por identificador | [ Authentication, Authorization ] | - | `{ email, password, role }`| `{ user }`|
| Delete | `/api/v1/users/:id` | Eliminar usuario | [ Authentication, Authorization ] | - | `{}`| `{ boolean }`|