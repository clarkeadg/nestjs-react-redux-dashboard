# Nest.js React Redux Dashboard
This was made using Node.js version: 18.14.2

## Backend Project

### Install
```
cd backend
npm install
```

### Setup ENV file
- Copy the file example.env to .env
- Change settings for DB connection, jwt secret, and initial user login

### Setup Database
- Run this command to migrate the database
```
npx prisma migrate dev
```

- Run this command to seed the database
```
npx prisma db seed
```

### Run Project
```
npm run start:dev
```

### Run Tests
```
npm run test
npm run test:e2e
```

## Frontend Project

### Install
```
cd frontend
npm install
```

### Run Project
```
npm run dev
```

### Run Tests
```
npm run test
```