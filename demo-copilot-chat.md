# 🎬 Demo Interna — Copilot Chat en VS Code

> **Guion corto (5–7 min) para mostrar en vivo durante la Sesión 1.**
> Uso interno del organizador (Michael). Los slides públicos **no muestran** este detalle — esto es el "cómo lo presentás".

---

## 🧩 Preparación antes de empezar

- [ ] VS Code abierto con un proyecto `mi-portafolio-demo` precargado
- [ ] Los 4 archivos ya creados: `index.html`, `style.css`, `script.js`, `README.md` (vacíos o con contenido mínimo)
- [ ] Copilot ya autenticado (chequear que el ícono no esté rojo)
- [ ] **Zoom de VS Code a ~140%** para que se lea desde el fondo del salón
- [ ] Cerrar notificaciones del sistema antes de proyectar
- [ ] Tener Live Server instalado y probado

---

## 1️⃣ Abrir Copilot Chat *(30 seg)*

**Qué mostrar:**
- Ícono de Copilot en la barra lateral izquierda de VS Code
- Atajo alternativo: `Ctrl + Alt + I`
- Se abre el panel a la derecha

**Qué decir:**
> *"Este panel es Copilot Chat. No es autocompletado — es un **copiloto conversacional**. Le pedís lo que quieras, en español, y te responde con código, explicaciones o ideas."*

---

## 2️⃣ Cargar archivos con `#` como contexto *(1 min)*

**Qué tipear en el chat:**

```
#index.html
```

→ Mostrar que aparece un **chip** con el archivo adjunto antes del mensaje.

**Qué decir:**
> *"El `#` es la clave de todo. Le dice a Copilot: **mirá este archivo específico** antes de contestarme. Sin `#`, Copilot adivina. Con `#`, trabaja con contexto real."*

**Otros ejemplos a mostrar rápido:**
- `#style.css` → carga el CSS
- `#codebase` → Copilot considera **todo el proyecto**
- `#file` → te abre el selector de archivos

---

## 3️⃣ Cambiar el modelo de LLM *(45 seg)*

**Qué mostrar:**
- En la parte **inferior** del panel de Chat hay un **selector de modelo**.
- Click y mostrás las opciones disponibles:
  - **GPT-4.1 / GPT-5** (OpenAI)
  - **Claude Sonnet / Opus** (Anthropic)
  - **Gemini** (Google)

**Qué decir:**
> *"Este selector es lo más nuevo de Copilot. Ya no es un solo modelo — es un **ring de IAs**. Cada una es buena en cosas distintas: Claude suele ser más preciso en código largo; GPT es más rápido; Gemini es fuerte en razonamiento. Podés elegir el cerebro según la tarea."*

---

## 4️⃣ Primer prompt — generar base HTML *(2 min)*

**Qué tipear:**

```
#index.html  Generá la estructura base de un portafolio personal
con 5 secciones: Hero, Sobre mí, Proyectos, Skills y Contacto.
HTML5 semántico. Sin estilos todavía. Textos en español.
```

**Qué mostrar:**
1. Copilot genera el HTML completo dentro del chat
2. Click en el botón **"Apply in editor"** → aplica el cambio directo al archivo
3. `Ctrl + S` para guardar
4. Click derecho en `index.html` → **"Open with Live Server"** → se ve en el navegador

**Qué decir:**
> *"En 20 segundos tenés una base que escribirla a mano te hubiera llevado 15 minutos. Pero fijate: **vos decidiste las secciones, el idioma, que sea semántico**. Copilot no lee la mente — obedece instrucciones precisas."*

---

## 5️⃣ Segundo prompt — estilizar con CSS *(1 min)*

**Qué tipear:**

```
#style.css #index.html  Estilá el portafolio con CSS moderno.
Usá variables CSS, tipografía limpia, modo oscuro por defecto
y diseño responsive mobile-first.
```

**Qué mostrar:**
- Copilot genera el CSS considerando el HTML ya existente.
- Apply → guardar → refrescar navegador.

**Qué decir:**
> *"Fijate que le pasé **dos archivos como contexto**. Copilot ve el HTML, ve el CSS vacío, y genera algo que encaja con lo que ya hay. Eso es **context engineering** básico — y es la habilidad más importante para trabajar con IA hoy."*

---

## 6️⃣ Cierre — por qué esto cambia todo *(30 seg)*

**Qué decir:**
> *"Lo que vieron en 5 minutos son **las 3 habilidades claves** de Copilot hoy:*
>
> 1. ***Chat conversacional*** *en tu idioma.*
> 2. ***Contexto explícito*** *con `#`.*
> 3. ***Elección de modelo*** *según la tarea.*
>
> *El resto es tu creatividad. Ahora les toca a ustedes — tienen hasta las 12:00 para tener su base funcionando."*

---

## 🚨 Troubleshooting en vivo

| Problema | Solución rápida |
|---|---|
| Copilot no responde | Revisar el estado del chat (ícono superior). Re-login si hace falta. |
| No aparece el selector de modelo | Actualizar la extensión de Copilot a la última versión. |
| Live Server no abre | Click derecho en `index.html` → **"Open with Live Server"**. |
| El HTML no se ve bien | Revisar que el archivo esté guardado (`Ctrl + S`). |
| Wi-Fi lento | Pedir a los asistentes que cierren streaming y descargas. |

---

## ⏱️ Timing total de la demo: 5–7 minutos

> Mañana hay más demos durante el **laboratorio de las 11:00**. Esta es solo la introducción del *cómo* — el resto lo hacen los asistentes con sus propias manos.
