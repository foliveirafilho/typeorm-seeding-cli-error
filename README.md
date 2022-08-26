# Example repo

## Steps to reproduce

```bash
yarn # installing dependencies

docker compose up -d # creating the mysql db

yarn migration-run # to create the user table

yarn seed-run -d src/data-source.ts src/generate-users.seeder.ts

```