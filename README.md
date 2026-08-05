# Playwright SauceDemo Framework
Framework de automatización desarrollado con Playwright y TypeScript utilizando buenas prácticas como Page Object Model (POM), Fixtures y Helpers.

El proyecto automatiza distintos escenarios funcionales sobre la aplicación SauceDemo y ejecuta las pruebas en Chromium, Firefox y WebKit.

Además, cuenta con Integración Continua mediante GitHub Actions para ejecutar automáticamente la suite de pruebas en cada push al repositorio.

## Tecnologías utilizadas

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions

## Arquitectura

El proyecto sigue el patrón Page Object Model (POM), separando la lógica de interacción con cada página de los casos de prueba.

También utiliza:

- Fixtures para gestionar datos de prueba.
- Helpers para reutilizar acciones comunes.
- Assertions de Playwright para validar resultados.

## 📂 Estructura del proyecto

```text
pages/
fixtures/
tests/
utils/
.github/workflows/
```

- **pages/** → Contiene las clases Page Object Model con la lógica de interacción de cada pantalla.
- **fixtures/** → Almacena los datos de prueba utilizados por los tests.
- **tests/** → Contiene los casos de prueba automatizados.
- **utils/** → Incluye funciones auxiliares reutilizables, como el helper de login.
- **.github/workflows/** → Configuración de GitHub Actions para ejecutar automáticamente la suite de pruebas.

## ✅ Casos de prueba automatizados

| Escenario | Estado |
|-----------|--------|
| Login exitoso | ✅ |
| Login con usuario bloqueado | ✅ |
| Agregar producto al carrito | ✅ |
| Verificar carrito | ✅ |
| Eliminar producto del carrito | ✅ |

## ▶️ Ejecución del proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar todas las pruebas:

```bash
npx playwright test
```

Abrir el reporte HTML:

```bash
npx playwright show-report
```

## 🚀 Integración Continua

El proyecto utiliza GitHub Actions para ejecutar automáticamente la suite de pruebas en cada push y Pull Request sobre la rama principal, garantizando que los cambios no afecten el correcto funcionamiento del framework.

## 📌 Próximas mejoras

- Automatizar el flujo completo de Checkout.
- Incorporar pruebas de API con Playwright.
- Agregar ejecución por tags.
- Parametrizar más escenarios de prueba.

## 👨‍💻 Autor

**Nicolás Sacco**

QA Automation Junior

- LinkedIn: https://www.linkedin.com/in/nicolás-sacco-35a0452a8
- GitHub: https://github.com/NicolasSacco3