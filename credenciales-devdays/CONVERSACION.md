# Credenciales GitHub Copilot Dev Days — Registro de Conversacion

**Fecha:** 2026-04-21
**Proyecto:** Credenciales para evento GitHub Copilot Dev Days

---

## Solicitud inicial

Crear credenciales en HTML para el evento de GitHub:
- Tamano: 11 cm x 7,16 cm — 9 por hoja (3 columnas x 3 filas, desperdicio cero)
- Logo GitHub desde los SVGs locales (`githubcopilot-text.svg`, `mark-github-24.svg`)
- Espacio en blanco para nombres de participantes
- Hoja blanco y negro para imprimir
- Modo premium

## Iteracion 1 — Fondo negro (descartado)

Se creo la primera version con fondo negro y texto blanco. El usuario aclaro que queria fondo BLANCO para imprimir sin gastar tinta, no fondo negro literal.

## Iteracion 2 — Fondo blanco con bordes premium

Se cambio a fondo blanco con:
- Doble borde negro interior
- Esquinas decorativas
- Patron diagonal de fondo
- Linea superior gruesa
- Textos en gris (#777, #999, #aaa)

**Feedback del usuario:** Quitar los bordes negros gruesos y los colores grises. Dejar solo detalles minimalistas. La linea de corte debe ser finisima.

## Iteracion 3 — Minimalista limpio

Se eliminaron todos los bordes decorativos, esquinas, patrones. Solo quedo:
- Borde de corte de 0.3px
- Logo + texto GithubCopilot
- Titulo del evento
- Linea para nombre
- Separadores finos
- Todos los textos en negro (#1a1a1a), sin grises

**Feedback del usuario:** Agregar triangulos pequenos en las esquinas, hacerlo vertical, y actualizar con el contexto real del evento.

## Iteracion 4 — Version final

Credenciales verticales (7.16cm x 11cm) con:
- 4 triangulos pequenos negros (12px) en cada esquina
- Linea de corte ultra fina (0.2px #ddd)
- Logo GitHub (octocat) + texto "GithubCopilot"
- Evento: "GitHub Copilot Dev Days"
- Subtitulo: "Evento Oficial"
- Linea para escribir nombre del participante
- Etiqueta "Participante"
- Info: 25 de Abril, 2026 | Ciudad del Este, Paraguay | Mi LAB - Plaza City
- Pie: 08:00-17:00 | Gratuito
- 9 credenciales por hoja (3 col x 3 filas)
- JS clona el template para generar las 9

---

## Archivos generados

| Archivo | Descripcion |
|---------|-------------|
| `credenciales-github.html` | HTML final con 9 credenciales verticales |
| `githubcopilot-text.svg` | Logo texto "GithubCopilot" (SVG inline en el HTML) |
| `mark-github-24.svg` | Icono octocat de GitHub (SVG inline en el HTML) |

## Datos del evento

- **Evento:** GitHub Copilot Dev Days
- **Tipo:** Evento oficial autorizado de GitHub, avalado por el programa global
- **Fecha:** Sabado 25 de Abril, 2026
- **Horario:** 08:00 - 17:00 (PY, GMT-3)
- **Lugar:** Mi LAB - Hub de Innovacion Colaborativo, Plaza City, Km 8, Ciudad del Este 7000, Paraguay
- **Modalidad:** Presencial
- **Costo:** 100% Gratuito
- **Niveles:** Todos los niveles
- **Organizador:** Michael Sahlmann (voluntario, pro bono)
- **Cupos:** Agotados (lista de espera disponible)

## Instrucciones de impresion

1. Abrir `credenciales-github.html` en el navegador
2. Clic en "Imprimir" o Ctrl+P
3. Seleccionar "Ajustar a pagina" en las opciones de escala
4. Tamano de pagina personalizado: 21.48 x 33 cm (o ajustar a A4/Carta)
5. Recortar por las lineas finas entre credenciales
