# Reto técnico en vivo – Mantenimiento de frameworks de automatización

**Duración sugerida:** 60 minutos (25 min Backend · 25 min Frontend · 10 min conversación)

## Contexto

Estos son **tus** frameworks (ServeRest API con Karate DSL y Sauce Demo con Playwright + Cucumber).
Mientras estabas de vacaciones, otro QA del equipo hizo un commit de *refactor*:

> `refactor: optimizar suite y migrar a nuevo contrato`

Desde entonces el pipeline nocturno está en **rojo** en ambas capas. Tu tarea es devolverlo a **verde**.

## Reglas

1. **No se permite** borrar escenarios, marcarlos como `@ignore`, ni debilitar las validaciones
   (por ejemplo, quitar el `match` de schema o el `expect`). El objetivo es arreglar la causa raíz.
2. Puedes usar la documentación oficial (Karate, Playwright, Cucumber) y el navegador (DevTools).
3. **Piensa en voz alta**: explica qué ves, qué hipótesis tienes y cómo la confirmas.
4. Al terminar cada capa, muestra `git diff` y ejecuta la suite completa.

---

## Capa 1 – Backend (Karate DSL · ServeRest)

```bash
cd BackEnd/serverest-api-automation
mvn test
```

**Síntoma reportado por el pipeline:** varios escenarios de registro, búsqueda, actualización y
eliminación fallan. Los escenarios de listado siguen pasando.

**Nota del QA que hizo el refactor:** *"Optimicé la generación de datos para que corra más rápido,
reutilicé el usuario creado en el registro para no crear usuarios de más, y actualicé el schema al
contrato v2 que me pasaron."*

**Entregable:** `mvn test` con **12/12 escenarios en verde**.

---

## Capa 2 – Frontend (Playwright + Cucumber · Sauce Demo)

```bash
cd Frontend/sauce-demo-automation
npm test
```

**Síntoma reportado por el pipeline:** fallan los escenarios de login negativo, el contador del
carrito y la confirmación de compra.

**Nota del QA que hizo el refactor:** *"Migré los selectores a `data-test` porque son más estables,
y convertí los logins fallidos a `Scenario Outline` para que sea data-driven."*

**Entregable:** `npm test` con **6/6 escenarios en verde**.

---

## Conversación final (si queda tiempo)

- ¿Qué harías para que estos problemas **no vuelvan a llegar** al pipeline?
- ¿Qué cambiarías de tu propio diseño original después de ver estos fallos?
