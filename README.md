## HT Clinic Fisioterapia

Panel web para la gestión de clínicas de fisioterapia: pacientes, citas y consultas. El proyecto ha sido migrado de Next.js a Vite + React Router.

### Stack
- React 19 + TypeScript
- Vite 5
- React Router 7
- Tailwind CSS 4 + Radix UI + shadcn/ui
- Ant Design (tematizado)
- Zustand/Zod/React Hook Form, etc.

### Requisitos
- Node.js >= 18
- Yarn 1.x

### Instalación
```bash
yarn install
```

### Scripts
- Desarrollo (puerto 3000):
  ```bash
  yarn start:dev
  ```
- Desarrollo local por .env.local:
  ```bash
  yarn start:local
  ```
- Producción (serve en 3001):
  ```bash
  yarn start:prod
  ```
- Test (serve en 3002):
  ```bash
  yarn start:test
  ```
- Build por entorno:
  ```bash
  yarn build:dev
  yarn build:prod
  yarn build:test
  ```
- Preview del build (Vite):
  ```bash
  yarn preview

### Licencia
Propietaria. Todos los derechos reservados.

