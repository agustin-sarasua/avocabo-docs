---
sidebar_position: 2
title: Gestionar Grupos
description: Organiza estudiantes y profesores en grupos para una gestión eficiente de cursos
---

# Gestionar Grupos

Los grupos son esenciales para organizar usuarios y controlar el acceso a cursos. Esta guía explica cómo crear y gestionar grupos efectivamente.

## ¿Qué Son los Grupos?

Los grupos son colecciones de usuarios que te ayudan a:
- **Organizar estudiantes** por clase, grado o cohorte
- **Controlar el acceso a cursos** - asignar cursos a grupos
- **Rastrear progreso** por grupo
- **Simplificar la gestión** - operaciones masivas

---

## Ver Grupos

### Lista de Grupos

En Gestión de Usuarios, los grupos aparecen en:
- **Menú desplegable de filtro de grupo** - Selecciona para filtrar usuarios
- **Barra lateral de grupos** - Acceso rápido a grupos

### Detalles del Grupo

Haz clic en un grupo para ver:
- Nombre y descripción del grupo
- Cantidad de miembros
- Lista de todos los miembros
- Cursos asignados

---

## Crear Grupos

### Nuevo Grupo

1. Haz clic en el botón **Crear Grupo**
2. Ingresa los detalles del grupo:
   - **Nombre** - ej., "7º Grado A", "Español 101"
   - **Descripción** - Detalles opcionales sobre el grupo

3. Haz clic en **Crear**

### Convenciones de Nomenclatura

Los buenos nombres de grupos son claros y consistentes:

| Buenos Ejemplos | Por Qué |
|---------------|-----|
| "7º Grado Sección A" | Grado y sección claros |
| "Español Principiantes 2024" | Año y nivel |
| "Club de Matemáticas - Avanzado" | Actividad y nivel |

| Evitar | Por Qué |
|-------|-----|
| "Grupo 1" | No descriptivo |
| "Clase de Juan" | Dependiente del profesor |
| "Estudiantes Nuevos" | Vago |

---

## Gestionar Miembros del Grupo

### Agregar Usuarios a Grupos

**Método 1: Desde Detalles del Usuario**
1. Selecciona un usuario
2. Haz clic en **Editar**
3. Agrega grupo en el campo Grupos
4. Guarda

**Método 2: Desde Vista de Grupo**
1. Selecciona el filtro de grupo
2. Haz clic en **Agregar Miembros**
3. Busca y selecciona usuarios
4. Confirma

**Método 3: Durante Creación de Usuario**
- Asigna grupo al crear nuevos usuarios
- Selecciona en el formulario de creación masiva

### Eliminar Usuarios de Grupos

1. Ver el grupo
2. Encuentra el usuario
3. Haz clic en el botón eliminar (X)
4. Confirma la eliminación

:::note
Eliminar de un grupo no elimina al usuario, solo su membresía al grupo.
:::

### Mover Usuarios Entre Grupos

1. Elimina del grupo actual
2. Agrega al nuevo grupo

O:
1. Edita detalles del usuario
2. Cambia la asignación de grupo
3. Guarda

---

## Asignar Cursos a Grupos

### ¿Por Qué Asignar Cursos a Grupos?

- Los estudiantes solo ven cursos asignados a su grupo
- Gestiona el acceso eficientemente
- Diferentes cursos para diferentes niveles

### Cómo Asignar

**Desde Detalles del Curso:**
1. Abre el curso
2. Ve a la sección **Grupos**
3. Haz clic en **Gestionar Grupos**
4. Selecciona grupos para agregar
5. Guarda

**Desde Vista de Grupo:**
1. Ver detalles del grupo
2. Ver cursos asignados
3. Agregar nuevas asignaciones de curso

---

## Análisis de Grupos

### Ver Rendimiento del Grupo

Desde detalles del grupo, ver:
- Total de lecciones completadas
- Tasa promedio de finalización
- Mejores rendimientos
- Estudiantes que necesitan atención

### Usar el Asistente de IA

Haz preguntas específicas del grupo:

```
"¿Cómo está rindiendo el Grupo 7A en Ciencias?"
```

```
"Compara el progreso entre 7A y 7B"
```

```
"¿Qué estudiantes en 7A se están quedando atrás?"
```

---

## Eliminar Grupos

### Prerrequisitos

Antes de eliminar, asegúrate:
- ✅ El grupo no tiene miembros (elimina todos primero)
- ✅ Sin asignaciones de curso críticas

### Cómo Eliminar

1. Ver el grupo
2. Elimina todos los miembros
3. Haz clic en **Eliminar Grupo**
4. Confirma la eliminación

:::warning
No puedes eliminar un grupo que aún tiene miembros. Elimina todos los miembros primero.
:::

---

## Mejores Prácticas

### Organización de Grupos

| Hacer | No Hacer |
|----|-------|
| ✅ Un estudiante por grupo (generalmente) | ❌ Estudiantes en muchos grupos |
| ✅ Nombres claros y descriptivos | ❌ Nombres vagos |
| ✅ Limpieza regular | ❌ Mantener grupos viejos vacíos |
| ✅ Documentar propósito del grupo | ❌ Dejar descripción vacía |

### Asignación de Cursos

| Hacer | No Hacer |
|----|-------|
| ✅ Asignar cursos a grupos | ❌ Hacer todos los cursos públicos |
| ✅ Revisar asignaciones regularmente | ❌ Olvidar actualizar |
| ✅ Coincidir nivel del curso con grupo | ❌ Asignaciones aleatorias |

### Mantenimiento

| Cuándo | Acción |
|------|--------|
| **Nuevo año escolar** | Crear nuevos grupos, archivar viejos |
| **Estudiante se une** | Agregar al grupo apropiado |
| **Estudiante se va** | Eliminar del grupo |
| **Cambios de clase** | Actualizar membresía del grupo |

---

## Estructuras Comunes de Grupos

### Por Grado/Año

```
├── 7º Grado
│   ├── 7º Grado Sección A
│   ├── 7º Grado Sección B
│   └── 7º Grado Sección C
├── 8º Grado
│   ├── 8º Grado Sección A
│   └── 8º Grado Sección B
```

### Por Materia/Curso

```
├── Programa de Español
│   ├── Español Principiantes
│   ├── Español Intermedio
│   └── Español Avanzado
├── Programa de Matemáticas
│   ├── Matemáticas Estándar
│   └── Matemáticas Avanzadas
```

### Por Actividad

```
├── Extracurriculares
│   ├── Club de Ciencias
│   ├── Equipo de Debate
│   └── Taller de Arte
```

---

## Solución de Problemas

### Los Estudiantes No Pueden Ver el Curso

Verifica:
1. ✅ El estudiante está en un grupo
2. ✅ El grupo está asignado al curso
3. ✅ El curso está activado
4. ✅ Las lecciones están activadas

### No Puedo Eliminar Grupo

**Error: "El grupo tiene usuarios"**
- Elimina todos los miembros primero
- Luego intenta eliminar de nuevo

### Estudiantes Incorrectos en Grupo

1. Revisa miembros actuales
2. Elimina estudiantes incorrectos
3. Agrega estudiantes correctos
4. Verifica acceso al curso

---

## Próximos Pasos

- [Entender las Métricas](/docs/dashboard/metrics)
- [Usar el Asistente de IA](/docs/dashboard/ai-assistant)
- [Configuración de la Escuela](/docs/dashboard/school-settings)

