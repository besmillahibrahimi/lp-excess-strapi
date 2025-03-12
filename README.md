# Strapi Setup Guide

This guide walks you through the steps required to set up and run a Strapi project using `pnpm` as the package manager.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [pnpm](https://pnpm.io/installation)

## Installation & Setup

### 1. Clone the project
Run the following command to clone a the Strapi project:

```sh
git clone https://github.com/csoftz/lp-excess-strapi
```

This will clone the Strapi project with SQLite as the default database.

### 2. Navigate to the Project Directory

```sh
cd lp-excess-strapi
```

### 3. Install Dependencies

Run the following command to install all project dependencies:

```sh
pnpm install
```

### 4. Configure Database (Optional)

If you prefer a database like PostgreSQL, MySQL, or MongoDB, update the `config/database.js` file accordingly. Example for PostgreSQL:

```js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

Create a `.env` file and define database environment variables:

```env
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false
```

### 5. Start Strapi Development Server

Run the following command to start the Strapi server in development mode:

```sh
pnpm develop
```

This will start the Strapi admin panel, typically accessible at:

```
http://localhost:1337/admin
```

### 6. Build & Run in Production Mode

For production usage, build the admin panel and start the server:

```sh
pnpm build
pnpm start
```

## Additional Commands

- **Generate API**: `pnpm strapi generate:api article`
- **Generate Controller**: `pnpm strapi generate:controller article`
- **Generate Service**: `pnpm strapi generate:service article`
- **Run Strapi Console**: `pnpm strapi console`

## Conclusion

You have now successfully set up and run Strapi with `pnpm`. You can customize it further by creating content types, APIs, and extending its functionality according to your project requirements.

For more details, refer to the [official Strapi documentation](https://docs.strapi.io/).