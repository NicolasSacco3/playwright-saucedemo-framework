# Playwright SauceDemo Framework

Framework de automatización de pruebas desarrollado con **Playwright y TypeScript**, aplicando buenas prácticas de automatización como **Page Object Model (POM), Fixtures, Helpers, Assertions y parametrización de datos**.

El proyecto automatiza distintos escenarios funcionales sobre la aplicación **SauceDemo** y ejecuta las pruebas en **Chromium, Firefox y WebKit**.

Actualmente cuenta con **24 pruebas automatizadas**, incluyendo escenarios positivos y negativos de Login, Inventory, Cart y Checkout.

Además, cuenta con **Integración Continua mediante GitHub Actions**, ejecutando automáticamente la suite de pruebas ante cambios en la rama principal.

---

## 🛠️ Tecnologías utilizadas

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions

---

## 🏗️ Arquitectura

El proyecto utiliza el patrón **Page Object Model (POM)**, separando la lógica de interacción con la interfaz de los casos de prueba.

También utiliza:

- **Fixtures** → Para gestionar y reutilizar datos de prueba.
- **Helpers** → Para encapsular funcionalidades comunes y evitar duplicación de código.
- **Assertions** → Para validar los resultados esperados de cada prueba.
- **Tags** → Para clasificar y ejecutar grupos específicos de pruebas, como `@smoke` y `@regression`.
- **Parametrización** → Para ejecutar un mismo escenario utilizando diferentes datos de prueba.

---

## 📂 Estructura del proyecto

```text
pages/
├── LoginPage.ts
├── InventoryPage.ts
├── CartPage.ts
└── CheckoutPage.ts

fixtures/
└── users.ts

tests/
├── login.spec.ts
├── inventory.spec.ts
├── cart.spec.ts
├── cart-remove.spec.ts
└── checkout.spec.ts

utils/
└── loginHelper.ts

.github/
└── workflows/
    └── playwright.yml
