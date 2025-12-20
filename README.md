# Ahorcado – Proyecto Angular con TDD, ATDD, Jest, ESLint, CodeQL y SonarCloud

Este proyecto implementa el clásico juego del **Ahorcado** utilizando **Angular**, con un enfoque completo en **Prácticas Ágiles**, **TDD**, **ATDD**, **CI/CD**, análisis estático con **SonarCloud**, seguridad con **CodeQL** y pruebas end‑to‑end con **Cypress**.

---

##  Tecnologías principales

* **Angular**
* **TypeScript**
* **Jest** para pruebas unitarias (TDD)
* **Cypress** para pruebas end‑to‑end (ATDD)
* **ESLint** para análisis de estilo y reglas
* **CodeQL** para análisis de seguridad
* **SonarCloud** para análisis de calidad y cobertura
* **GitHub Actions** para CI/CD
* **Vercel** para deploy automático

---

## Estructura del proyecto

```
src/
 ├── app/
 │   ├── components/
 ├── resources/
     └── languages/ # Archivos JSON con palabras por idioma y dificultad
     └── models/  # Clase Ahorcado

```

---

## Estrategia de Testing

### TDD – Pruebas unitarias (Jest)

* Se asegura que cada método esté cubierto.
* Las pruebas incluyen:

  * Selección de palabra aleatoria
  * Normalización y validación de letras
  * Control de intentos
  * Estados del juego (win/lose)

Ejecutar:

```bash
npm run test
```

### ATDD – Pruebas end‑to‑end (Cypress)

* Validación del flujo completo tal como lo usaría un usuario.
* Verifica:

  * Inicio del juego
  * Interacción con la interfaz
  * Actualización de errores e interfaz
  * Fin de partida

Ejecutar:

```bash
npm run cy:open
```

---

## Calidad del código – SonarCloud y CodeQL

El repositorio está integrado con **SonarCloud** y **CodeQL** mediante GitHub Actions.

### Incluye métricas como:

* Cobertura de tests (unitarios) # Con cypress no es compatible a priori, se dificulto la configuración, pero se tiene el coverage de cypress mismo
* Code smells
* Duplicaciones
* Seguridad y vulnerabilidades (CodeQL)

---
## CI/CD con GitHub Actions + Vercel

### Pipeline incluye:

* Instalación de dependencias
* ESLint
* Tests unitarios (Jest)
* Tests E2E (Cypress)
* Análisis SonarCloud y CodeQL
* Vercel Deploy **Bloqueo de deploy si los Actions fallan**

El deploy a Vercel solo ocurre si:

* Los tests pasan
* El análisis de SonarCloud y CodeQL no falla

---

## Archivos JSON dinámicos

Las palabras del ahorcado se cargan dinámicamente:

```ts
const { default: lista } = await import(`../languages/${idioma}-${dificultad}-words.json`);
```

Permite agregar nuevos idiomas/dificultades sin modificar el código.

---

## Ejecución del proyecto

Desarrollo:

```bash
npm start
```

Build producción:

```bash
npm run build
```

---

## Funcionalidades del juego

* Elección aleatoria de palabras
* Soporte multi‑idioma y multi‑dificultad
* Control visual de errores
* Validación del input (incluye Ñ)
* Mensajes de victoria y derrota
* Reinicio del juego

---

## Cobertura

Incluye cobertura tanto de **unit tests (Jest)** como de **Cypress**.
Se genera un único `lcov.info` mergeado. O bien en cada Actions correspondiente se crea su .rar con su coverage (Dentro del .rar --> index.html para visualización)

Visualizar reporte:

```bash
npm run test:coverage      # Pruebas unitarias
npm run cypress:coverage   # Pruebas e2e
```


