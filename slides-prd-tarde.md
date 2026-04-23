# Slides PRD Tarde — GitHub Copilot Dev Days Ciudad del Este

> **8 slides para pegar en Gamma.app**
> Copiá TODO este archivo (desde el primer `---` de abajo) y pegalo en Gamma → importará como 8 slides.
> Presentación de la tarde (arranca ~13:30, después del almuerzo).
> Tema: PRD genérico aplicado al dominio "portafolio personal" — plantilla que cada asistente adapta con sus datos.

---

# 📋 ¿Qué es un PRD?

## Product Requirements Document

Un **documento corto** que responde 4 preguntas antes de escribir una sola línea de código:

1. **¿Qué** vamos a construir?
2. **¿Para quién?**
3. **¿Por qué** vale la pena hacerlo?
4. **¿Cómo** sabremos si funcionó?

> Hoy escribiremos uno para **tu portafolio** — y después lo adaptarás a cada proyecto que emprendas.

---

# 🎯 Objetivo y Problema

### Objetivo
Crear un portafolio personal que sirva como **carta de presentación profesional online**, pública y editable.

### Problema que resuelve
Desarrolladores, diseñadores y profesionales TI **necesitan un canal propio** donde mostrar su trabajo sin depender de LinkedIn, Instagram o un CV en PDF estático.

Un portafolio resuelve:
- ✅ Visibilidad profesional 24/7
- ✅ Control total del mensaje y del diseño
- ✅ Prueba tangible de habilidades reales

---

# 👥 Usuarios / Audiencia

### Usuario primario
**Vos** — el dueño del portafolio, quien lo construye y mantiene.

### Visitantes (quienes lo consumen)

- 🎯 **Reclutadores técnicos** — buscan validar tu perfil en 30 segundos.
- 💼 **Clientes potenciales** — quieren contratar un servicio o freelance.
- 🤝 **Comunidad tech** — colegas, colaboradores, curiosos.
- 🎓 **Vos dentro de 1 año** — para ver cuánto creciste.

---

# 🧱 Features / Requisitos

### Must-have (MVP de hoy)
- Sección **Hero** con nombre, rol y foto
- Sección **Sobre mí** (bio corta)
- Galería de **Proyectos** (mínimo 3)
- Lista de **Skills** / Tecnologías
- Sección **Contacto** (email + LinkedIn + GitHub)

### Nice-to-have (próximas iteraciones)
- Modo oscuro / claro
- Animaciones al hacer scroll
- Idioma español / inglés
- Blog o sección de artículos
- Formulario de contacto funcional

---

# 🔲 Alcance (Scope)

### ✅ In-scope (lo que SÍ hacemos hoy)
- Portafolio estático en HTML + CSS + JS
- 5 secciones principales
- Responsive (mobile + desktop)
- Deploy público vía **Vercel**
- Repositorio en GitHub

### ❌ Out-of-scope (lo que NO hacemos hoy)
- Backend o base de datos
- Sistema de login
- CMS para editar sin código
- Integraciones con APIs externas
- Dashboard de analíticas propio

---

# 📊 Métricas de éxito

### ¿Cómo sabemos si el portafolio funciona?

- 📈 **Visitas mensuales** — target: 100+ en el primer mes.
- 💬 **Mensajes de contacto recibidos** — target: 2+ al mes.
- 🔗 **Click-through a proyectos** — target: 30% de los visitantes.
- 🕐 **Tiempo en la página** — target: más de 45 segundos.
- ⭐ **Feedback cualitativo** — qué impresión dejó tu portafolio.

> **Sin métricas no hay mejora.** Lo que no se mide, no se optimiza.

---

# 🛠️ Stack técnico

| Capa | Tecnología |
|---|---|
| **Estructura** | HTML5 semántico |
| **Estilos** | CSS3 con variables custom |
| **Interacción** | JavaScript vanilla |
| **Versionado** | Git + GitHub |
| **Editor** | VS Code |
| **IA** | GitHub Copilot |
| **Hosting** | Vercel (plan gratuito) |
| **Dominio** | `tu-nombre.vercel.app` |

**Costo total: $0.**

---

# 🤖 Cómo escribir este PRD con Copilot

### Prompt de ejemplo para Copilot Chat

```
#README.md  Escribime un PRD para mi portafolio personal
con estas secciones: Objetivo, Usuarios, Features, Alcance,
Métricas y Stack. Formato Markdown. Tono claro y directo.
```

### Qué hacer después
1. Copilot genera el borrador completo en segundos.
2. Lo **revisás y editás con tus datos reales** (tu audiencia, tus features).
3. Lo guardás como `PRD.md` en tu repo.
4. Cada feature nueva ↔ actualizás el PRD.

> El PRD es **un documento vivo** — no se escribe una sola vez y se olvida.
