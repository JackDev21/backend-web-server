# Web Server

Este proyecto es una práctica para crear un servidor web simple utilizando Node.js y Express. El servidor sirve contenido estático desde una carpeta pública

## Requisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd web-server
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.template`:
    ```sh
    cp .env.template .env
    ```
2. Edita el archivo `.env` y configura las variables de entorno necesarias:
    ```env
    PORT=3000
    PUBLIC_PATH=public
    ```

## Uso

Para iniciar el servidor en modo desarrollo, ejecuta:
```sh
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- `public/`: Contiene los archivos estáticos (HTML, CSS, JS).
- `src/`: Contiene el código fuente del servidor.
  - `config/`: Configuración del entorno.
    - `env.js`: Configuración de variables de entorno.
  - `server/`: Código del servidor.
    - `server.js`: Configuración y arranque del servidor.
  - `app.js`: Punto de entrada principal del servidor.
