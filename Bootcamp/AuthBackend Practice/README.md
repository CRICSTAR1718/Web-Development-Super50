# AuthBackend

Express + Drizzle (Postgres) + JWT (stored in httpOnly cookie)

## Endpoints
- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`

## Environment
Copy `.env.example` to `.env` and fill in:
- `DATABASE_URL`
- `JWT_SECRET`

## DB setup
This project expects a `users` table with columns matching `drizzle/schema.js`.

If you want to use Drizzle migrations, create a migration from `drizzle/schema.js`.

## Quick test (manual)
### Health
```bash
curl http://localhost:6101/health
```

### Register
```bash
curl -i -X POST http://localhost:6101/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"a@example.com","username":"adeel","password":"password123"}'
```

### Login
```bash
curl -i -X POST http://localhost:6101/auth/login \
  -H "Content-Type: application/json" \
  -d '{"emailOrUsername":"adeel","password":"password123"}' \
  -c cookies.txt
```

### Logout
```bash
curl -i -X POST http://localhost:6101/auth/logout \
  -b cookies.txt
```

