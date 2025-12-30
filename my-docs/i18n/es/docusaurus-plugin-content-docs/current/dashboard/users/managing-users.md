---
sidebar_position: 1
title: Gestionar Usuarios
description: Guía completa para gestionar estudiantes, profesores y cuentas de usuario en PragmaTeach
---

# Gestionar Usuarios

La gestión de usuarios es esencial para organizar tu entorno educativo. Esta guía cubre la creación, edición y gestión de todos los tipos de usuarios en PragmaTeach.

## Acceder a la Gestión de Usuarios

1. Navega a **Usuarios** en la barra lateral
2. Verás la pantalla de Gestión de Usuarios

:::note Acceso de Administrador
Las características de gestión de usuarios solo están disponibles para administradores.
:::

---

## Roles de Usuario

PragmaTeach admite cuatro roles de usuario:

| Rol | Nivel de Acceso | Uso Típico |
|------|--------------|-------------|
| **Estudiante** 🎓 | Acceder a cursos asignados, completar lecciones | Aprendices |
| **Profesor** 👩‍🏫 | Crear cursos, gestionar estudiantes, ver métricas | Educadores |
| **Admin** 👔 | Acceso completo incluyendo gestión de usuarios y escuela | Administradores |
| **Familiar** 👨‍👩‍👧 | Ver el progreso del estudiante vinculado | Padres/Tutores |

---

## Agregar Usuarios

### Creación de Usuario Individual

1. Haz clic en el botón **Agregar Usuario**
2. Completa los detalles del usuario:
   - **Nombre** - Nombre completo
   - **Correo Electrónico** - Dirección de correo válida
   - **Rol** - Selecciona el rol del usuario
   - **Grupo** - Opcionalmente asigna a un grupo

3. Haz clic en **Crear**

El usuario recibirá:
- Correo electrónico con credenciales de inicio de sesión
- Mensaje de bienvenida
- Instrucciones para establecer contraseña

### Creación Masiva de Usuarios

Agrega múltiples usuarios a la vez:

1. Haz clic en el botón **Agregar Usuario**
2. Selecciona la pestaña **Crear en Masa**
3. Elige el método de entrada:
   - **Pegar Lista** - Copiar/pegar nombres y correos
   - **Subir CSV** - Subir una hoja de cálculo

4. Configura:
   - Rol predeterminado para todos los usuarios
   - Asignación de grupo predeterminada

5. Revisa y confirma

**Formato CSV:**
```csv
name,email
Juan Pérez,juan.perez@escuela.edu
María García,maria.garcia@escuela.edu
```

---

## Gestionar Usuarios Existentes

### Buscar Usuarios

Usa los filtros para encontrar usuarios:

| Filtro | Opciones |
|--------|---------|
| **Buscar** | Por nombre o correo electrónico |
| **Rol** | Estudiante, Profesor, Admin, Familiar |
| **Grupo** | Selecciona un grupo específico |

### Panel de Detalles del Usuario

Haz clic en cualquier usuario para ver:
- Información del perfil
- Grupos asignados
- Acceso al curso
- Historial de actividad
- Usuarios relacionados (para familiares)

### Editar Información del Usuario

1. Haz clic en un usuario
2. Haz clic en **Editar** en el panel de detalles
3. Modifica:
   - Nombre
   - Correo electrónico
   - Rol
   - Asignaciones de grupo

4. Haz clic en **Guardar**

### Cambiar Rol de Usuario

:::warning Impacto del Cambio de Rol
Cambiar el rol de un usuario afecta sus permisos de acceso inmediatamente.
:::

1. Selecciona el usuario
2. Haz clic en **Editar**
3. Cambia el menú desplegable de rol
4. Confirma el cambio

### Eliminar Usuarios

:::danger Acción Permanente
Eliminar un usuario elimina todos sus datos incluyendo progreso e historial.
:::

1. Selecciona el usuario
2. Haz clic en **Eliminar Usuario**
3. Confirma la eliminación en el diálogo

---

## Estado de Verificación del Usuario

Los usuarios pueden estar en diferentes estados de verificación:

| Estado | Icono | Significado |
|--------|------|-------------|
| **Verificado** | 🟢 ✓ | Correo verificado, puede iniciar sesión |
| **Pendiente** | 🟡 ○ | Creado pero aún no verificado |

### Reenviar Verificación

Si un usuario no recibió su correo:

1. Encuentra el usuario
2. Haz clic en **Reenviar Verificación**
3. Se envía un nuevo correo

---

## Gestionar el Progreso del Estudiante

### Ver el Rendimiento del Estudiante

Desde los detalles del usuario, ver:
- Cursos inscritos
- Lecciones completadas
- Puntuaciones de ejercicios
- Tiempo dedicado al aprendizaje
- Última actividad

### Usar el Asistente de IA

Haz preguntas sobre estudiantes específicos:

```
"¿Cómo está rindiendo María García en Matemáticas 7?"
```

```
"¿Qué estudiantes no han completado ninguna lección esta semana?"
```

---

## Cuentas de Familiares

### ¿Qué Son los Familiares?

Las cuentas de familiares permiten a padres o tutores:
- Ver el progreso del estudiante vinculado
- Acceder a reportes
- Mantenerse informados sobre el aprendizaje

### Crear Cuentas de Familiares

1. Crea un nuevo usuario con rol **Familiar**
2. Vincula a un estudiante:
   - Abre los detalles del familiar
   - Haz clic en **Vincular Estudiante**
   - Selecciona el(los) estudiante(s)

### Tipos de Relación

| Tipo | Descripción |
|------|-------------|
| **Padre** | Madre, Padre |
| **Tutor** | Tutor legal |
| **Hermano** | Hermano, Hermana |

---

## Mejores Prácticas

### Creación de Usuarios

| Hacer | No Hacer |
|----|-------|
| ✅ Usar direcciones de correo válidas | ❌ Crear correos de marcador de posición |
| ✅ Asignar a grupos inmediatamente | ❌ Dejar usuarios sin grupo |
| ✅ Usar nombres completos y correctos | ❌ Abreviar nombres |
| ✅ Verificar asignaciones de roles | ❌ Dar permisos excesivos |

### Seguridad de Cuentas

| Hacer | No Hacer |
|----|-------|
| ✅ Fomentar restablecimientos de contraseña | ❌ Compartir credenciales de inicio de sesión |
| ✅ Revisar regularmente la lista de usuarios | ❌ Mantener cuentas inactivas |
| ✅ Usar roles apropiados | ❌ Hacer que todos sean admin |

### Organización

| Hacer | No Hacer |
|----|-------|
| ✅ Organizar usuarios en grupos | ❌ Tener todos los usuarios sin grupo |
| ✅ Actualizar cuando los estudiantes cambian de clase | ❌ Mantener asignaciones desactualizadas |
| ✅ Eliminar estudiantes graduados/salidos | ❌ Acumular usuarios inactivos |

---

## Solución de Problemas

### El Usuario No Puede Iniciar Sesión

Verifica:
1. ✅ El correo es correcto (sin errores tipográficos)
2. ✅ La cuenta está verificada
3. ✅ Se ha establecido la contraseña
4. ✅ La cuenta no está desactivada

**Solución:** Envía correo de restablecimiento de contraseña

### El Usuario No Ve Cursos

Verifica:
1. ✅ El usuario está en un grupo
2. ✅ El grupo está asignado al curso
3. ✅ El curso está activado
4. ✅ El usuario tiene el rol correcto

### Usuario Duplicado Creado

Si accidentalmente creaste un duplicado:
1. Verifica qué cuenta tiene actividad/progreso
2. Elimina la cuenta sin actividad
3. Informa al usuario qué cuenta usar

---

## Próximos Pasos

- [Gestionar Grupos](/docs/dashboard/users/managing-groups)
- [Entender las Métricas](/docs/dashboard/metrics)
- [Usar el Asistente de IA](/docs/dashboard/ai-assistant)

