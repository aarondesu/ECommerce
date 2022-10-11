# ECommerce ( WIP )

A template for Ecommerce site written using PERN(Postgress, Express, React, Node) stack. The React portion was generated using [Vite ](https://vitejs.dev/). The PostgresSQL and CDN is handled using [Supabase](https://supabase.com/) an open source alternative to Google's Firebase.

## Requirements

In order to run the project, the following are needed:

```
Node = ^v18.x

Yarn = ^v3.x ( yarn set version berry)

```

A supabase account project is also required to run the project

[The Open Source Firebase Alternative | Supabase](https://supabase.com/)

### .env example

Read the .env.example file located at the root directory for information about required environment variables.

## Building

To build the project, just run the following command:

`yarn build`

To build individual packages:

`yarn workspace @ecommerce/<package_name> build`

Make sure to clean the project in every build to remove unnecessary artifacts

`yarn clean`

## Running

### Development

To `watch` the project ( Concurrently runs both projects at the same terminal - not recommended ):

`yarn watch`

To `watch` each individual packages:

`yarn workspace @ecommerce/<package_name> watch`

or

`yarn watch:<package_name> watch`

### Production

To `start` the project after building (not recommended):

`yarn start`

To `start`each individual packages:

`yarn workspace @ecommerce/<package_name> start`

or

`yarn watch:<package_name> start`

## Linting

In order to create consistent codebase, it is recommend to lint the project using ESLINT

To `lin` the project :

`yarn lint`

To `format` the project:

`yarn format`
