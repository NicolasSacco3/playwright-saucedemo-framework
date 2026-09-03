# Playwright SauceDemo Framework

![CI Status](https://github.com/NicolasSacco3/playwright-saucedemo-framework/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088ff?style=flat&logo=githubactions&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

Framework de automatización E2E desarrollado con **Playwright y TypeScript**, aplicando buenas prácticas como **Page Object Model (POM)**, **Fixtures**, **Helpers** y **parametrización de datos**.

El proyecto automatiza escenarios funcionales sobre la aplicación **SauceDemo** y ejecuta las pruebas en **3 navegadores**: Chromium, Firefox y WebKit.

**24 pruebas automatizadas** | **CI/CD con GitHub Actions** | **Cross-browser Testing**

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cobertura de Pruebas](#cobertura-de-pruebas)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Integración Continua](#integración-continua)
- [Próximas Mejoras](#próximas-mejoras)
- [Autor](#autor)

---

## Descripción

Este proyecto es un framework de automatización de pruebas diseñado para validar las funcionalidades principales de la aplicación SauceDemo, incluyendo:

- **Login**: Validación de credenciales válidas, inválidas y usuarios bloqueados
- **Inventario**: Visualización de productos, agregado al carrito y ordenamiento
- **Carrito**: Agregar, eliminar productos y validación de cantidades
- **Checkout**: Flujo completo de compra con validación de campos

---

## Stack Tecnológico

| Categoría | Tecnología | Propósito |
|-----------|------------|-----------|
| **Testing** | Playwright | Ejecución de pruebas E2E |
| **Lenguaje** | TypeScript | Type safety y mejor IDE support |
| **Runtime** | Node.js | Ejecución del framework |
| **Patrón** | Page Object Model | Separación de concerns |
| **CI/CD** | GitHub Actions | Integración continua |
| **Control** | Git/GitHub | Versionamiento |

---

## Arquitectura

El proyecto sigue el patrón **Page Object Model (POM)**, separando la lógica de interacción con cada página de los casos de prueba.

### Componentes Principales

| Componente | Descripción |
|------------|-------------|
| **Pages** | Clases que encapsulan la interacción con cada pantalla |
| **Fixtures** | Datos de prueba parametrizados y reutilizables |
| **Helpers** | Funciones auxiliares para acciones comunes |
| **Assertions** | Validaciones de resultados esperados |
| **Tags** | Clasificación de pruebas (@smoke, @regression) |

---

## Estructura del Proyecto

```
playwright-saucedemo-framework/
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/
│   └── users.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   ├── cart.spec.ts
│   ├── cart-remove.spec.ts
│   └── checkout.spec.ts
│
├── utils/
│   └── loginHelper.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md
```

### Descripción de Carpetas

| Carpeta | Contenido |
|---------|-----------|
| `pages/` | Page Objects con la lógica de interacción de cada pantalla |
| `fixtures/` | Datos de prueba utilizados por los tests |
| `tests/` | Casos de prueba automatizados |
| `utils/` | Funciones auxiliares reutilizables |
| `.github/workflows/` | Configuración de CI/CD |

---

## Cobertura de Pruebas

### Resumen General

| Métrica | Valor |
|---------|-------|
| **Total de pruebas** | 24 |
| **Navegadores** | Chromium, Firefox, WebKit |
| **Cobertura de módulos** | Login, Inventory, Cart, Checkout |

### Pruebas por Módulo

| Módulo | Pruebas | Tipos de Prueba |
|--------|---------|-----------------|
| **Login** | 6 | Positivos, negativos, credenciales inválidas, usuario bloqueado |
| **Inventory** | 5 | Visualización, agregado al carrito, ordenamiento |
| **Cart** | 8 | Agregar, eliminar, validación de cantidades, vaciar carrito |
| **Checkout** | 5 | Flujo completo, validación de campos, datos inválidos |
| **Total** | **24** | Smoke + Regression |

### Tags Disponibles

| Tag | Descripción | Uso |
|-----|-------------|-----|
| `@smoke` | Pruebas críticas del flujo principal | Ejecución rápida en CI |
| `@regression` | Pruebas completas de regresión | Ejecución completa |

---

## Cómo Ejecutar

### Prerrequisitos

- Node.js 18+ instalado
- Git instalado

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/NicolasSacco3/playwright-saucedemo-framework.git

# 2. Entrar al directorio
cd playwright-saucedemo-framework

# 3. Instalar dependencias
npm install

# 4. Instalar navegadores de Playwright
npx playwright install
```

### Ejecución de Pruebas

```bash
# Ejecutar todas las pruebas (3 navegadores)
npx playwright test

# Ejecutar solo en Chromium
npx playwright test --project=chromium

# Ejecutar solo en Firefox
npx playwright test --project=firefox

# Ejecutar solo en WebKit
npx playwright test --project=webkit
```

### Ejecución por Tags

```bash
# Ejecutar solo pruebas smoke
npx playwright test --grep @smoke

# Ejecutar solo pruebas de regression
npx playwright test --grep @regression
```

### Ver Reporte

```bash
# Abrir reporte HTML en el navegador
npx playwright show-report
```

---

## Integración Continua

El proyecto utiliza **GitHub Actions** para ejecutar automáticamente la suite de pruebas en cada:

- **Push** a la rama `main`
- **Pull Request** a la rama `main`

### Pipeline de CI/CD

```
Push/PR → Checkout → Install Node → Install Deps → Install Browsers → Run Tests
```

### Artefactos Generados

- **Reporte HTML**: Disponible en GitHub Actions después de cada ejecución
- **Screenshots**: Capturados automáticamente en caso de fallo
- **Videos**: Grabados en caso de fallo (retienen en retry)
- **Traces**: Disponibles en el primer retry para debugging

---

## Configuración del Proyecto

### playwright.config.ts

| Configuración | Valor | Descripción |
|---------------|-------|-------------|
| `fullyParallel` | true | Ejecución paralela de tests |
| `retries` | 2 (CI) / 0 (local) | Reintentos automáticos |
| `workers` | 1 (CI) / auto (local) | Workers paralelos |
| `reporter` | html | Reporte HTML |
| `trace` | on-first-retry | Trace en primer retry |
| `screenshot` | only-on-failure | Screenshots en fallos |
| `video` | retain-on-failure | Videos en fallos |

---

## Próximas Mejoras

- [ ] Automatizar flujo completo de Checkout
- [ ] Incorporar pruebas de API con Playwright
- [x] Agregar ejecución por tags
- [ ] Parametrizar más escenarios de prueba
- [ ] Agregar testing mobile (Mobile Chrome, Mobile Safari)
- [ ] Implementar Allure Reporter para reportes avanzados
- [ ] Agregar tests de performance con Lighthouse

---

## Autor

**Nicolás Sacco** - QA Automation Tester Junior

| Contacto | Link |
|----------|------|
| **LinkedIn** | [linkedin.com/in/nicolás-sacco-35a0452a8](https://www.linkedin.com/in/nicolás-sacco-35a0452a8) |
| **GitHub** | [github.com/NicolasSacco3](https://github.com/NicolasSacco3) |
| **Email** | sacconicolasf@gmail.com |

---

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
