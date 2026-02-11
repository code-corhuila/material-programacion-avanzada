# 📱 Portafolio Profesional con Bootstrap

> Guía completa para crear un portafolio web profesional de hoja de vida en línea usando Bootstrap, CSS personalizado y JavaScript

## 🎯 Descripción del Proyecto

Este proyecto es una actividad didáctica que te enseña a crear un portafolio profesional desde cero. Aprenderás sobre:

- ✅ **Qué es Bootstrap** y cómo utilizarlo
- ✅ **Manejo de espacios y elementos** principales (Iconos, Formularios)
- ✅ **Ejemplos básicos** con Bootstrap, CSS y JavaScript
- ✅ **Paso a paso** para crear un portafolio profesional con animaciones
- ✅ **Desafíos prácticos** de diferentes niveles de dificultad

## 📚 Contenido del Material

### 1. ¿Qué es Bootstrap?
- Definición y características principales
- Ventajas de usar Bootstrap
- Formas de integración (CDN y npm)
- Componentes predefinidos

### 2. Espacios y Elementos Principales
- Sistema de espaciado en Bootstrap
- Iconos con Font Awesome
- Formularios responsivos y accesibles
- Ejemplos funcionales de cada elemento

### 3. Ejemplo Básico
- Tarjeta interactiva con eventos JavaScript
- Código HTML, CSS y JavaScript bien documentado
- Demostración en vivo de interactividad

### 4. Paso a Paso: Crear un Portafolio
Aprende los 7 pasos para crear un portafolio profesional:

1. **Estructura HTML Base** - Crea el esqueleto de tu sitio
2. **Diseño y Estilos CSS** - Hace tu portafolio atractivo
3. **Contenido Visual** - Agrega imágenes y layouts
4. **Animaciones CSS** - Crea efectos visuales
5. **Interactividad JavaScript** - Agrega funcionalidad
6. **Responsive Design** - Adapta a todos los dispositivos
7. **Publicar en Línea** - Despliega tu proyecto

### 5. Desafíos Prácticos
Tres niveles de dificultad:
- 🟢 **Desafío 1 (Fácil)**: Portafolio Básico
- 🟡 **Desafío 2 (Intermedio)**: Portafolio Interactivo
- 🔴 **Desafío 3 (Avanzado)**: Portafolio Pro

## 🚀 Cómo Usar Este Material

### Opción 1: Ver en el Navegador
1. Descarga o clona el repositorio
2. Abre el archivo `bootstrap-portafolio-tutorial.html` en tu navegador
3. Navega por las diferentes secciones

### Opción 2: Estudiar el Código
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/material-programacion-avanzada.git

# Navega a la carpeta del proyecto
cd material-programacion-avanzada/02-week/01-session

# Abre con tu editor favorito
code bootstrap-portafolio-tutorial.html
```

## 🛠️ Tecnologías Utilizadas

- **HTML 5**: Estructura semántica
- **CSS 3**: Estilos, animaciones y diseño responsivo
- **JavaScript**: Interactividad y validación
- **Bootstrap 5**: Framework CSS
- **Font Awesome 6**: Iconos profesionales

## 📋 Requisitos Previos

- Conocimientos básicos de HTML
- Conocimientos básicos de CSS
- Conocimientos básicos de JavaScript
- Un navegador web moderno
- Un editor de código (VS Code recomendado)

## 📖 Estructura del Archivo

```
bootstrap-portafolio-tutorial.html
├── Header (Logo + Navegación)
├── Sección 1: ¿Qué es Bootstrap?
├── Sección 2: Espacios y Elementos
├── Sección 3: Ejemplo Básico
├── Sección 4: Paso a Paso
├── Sección 5: Desafíos
└── Footer
```

## 🎓 Criterios de Evaluación para los Desafíos

Al completar cualquiera de los desafíos, tu proyecto será evaluado en:

| Criterio | Descripción |
|----------|-------------|
| **Diseño** | Layout limpio, colores coherentes, tipografía adecuada |
| **Responsividad** | Adaptación a móvil, tablet y desktop |
| **Animaciones** | Transiciones suaves, efectos visuales atractivos |
| **Código** | HTML semántico, CSS organizado, JavaScript limpio |
| **Funcionalidad** | Sin errores, formularios funcionan, navegación activa |
| **Rendimiento** | Carga rápida, imágenes optimizadas, sin recursos innecesarios |

## 💡 Consejos para Completar los Desafíos

1. **Comienza simple** - No intentes hacer todo de una vez
2. **Usa control de versiones** - Git desde el inicio
3. **Pide feedback** - Comparte con tus compañeros
4. **No te desanimes** - La práctica hace al maestro
5. **Tu portafolio es tu carta de presentación** - Invierte tiempo en calidad

## 📤 Cómo Subir tu Proyecto a GitHub

### Paso 1: Crear un Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en **"New"** o **"Create Repository"**
3. Completa los datos:
   - **Repository name**: `mi-portafolio` (o el que prefieras)
   - **Description**: "Portafolio profesional con Bootstrap"
   - **Visibility**: Public (para que sea visible)
   - NO marques "Initialize with README" (lo crearemos nosotros)

4. Haz clic en **"Create Repository"**

### Paso 2: Preparar tu Proyecto Localmente

```bash
# Navega a la carpeta de tu proyecto
cd C:\Users\DELL\Documents\GitHub\Mi-Portafolio

# Inicializa Git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Crea el primer commit
git commit -m "feat: Inicializar portafolio profesional"
```

### Paso 3: Conectar con GitHub y Subir

```bash
# Agrega el repositorio remoto (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Cambia la rama principal a main (optional, según tu configuración)
git branch -M main

# Sube los cambios
git push -u origin main
```

### Paso 4: Estructura Recomendada del Proyecto

```
mi-portafolio/
├── index.html              # Tu página principal
├── styles.css              # Tus estilos personalizados
├── script.js               # Tu JavaScript
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # Tu foto de perfil
│   │   └── projects/       # Fotos de tus proyectos
│   └── files/
│       └── CV.pdf          # Tu CV en PDF
├── README.md               # Este archivo
└── .gitignore             # Archivos a ignorar
```

### Paso 5: Archivo .gitignore Recomendado

```bash
# Crear archivo .gitignore
echo "
# Dependencias
node_modules/
package-lock.json

# Archivos del sistema
.DS_Store
Thumbs.db

# Editores
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Archivos temporales
*.tmp
.temp/
" > .gitignore

git add .gitignore
git commit -m "docs: Agregar gitignore"
git push
```

## 📝 Plantilla README.md para tu Portafolio Personal

Cuando hayas creado tu portafolio, usa esta plantilla como base:

```markdown
# 👨‍💼 Mi Portafolio Profesional

Bienvenido a mi portafolio en línea. Aquí encontrarás algunos de mis proyectos 
y un poco sobre mi experiencia profesional.

## 🔗 Enlaces

- **Portafolio en Vivo**: [mi-portafolio.vercel.app](https://mi-portafolio.vercel.app)
- **LinkedIn**: [linkedin.com/in/mi-perfil](https://linkedin.com/in/mi-perfil)
- **Email**: mi.email@example.com

## 💻 Tecnologías

- HTML 5
- CSS 3
- JavaScript ES6+
- Bootstrap 5
- Diseño Responsivo

## 🎯 Proyectos Destacados

### Proyecto 1: E-commerce
Descripción breve del proyecto...
- **Tecnologías**: React, Node.js, MongoDB
- **Repositorio**: [github.com/usuario/ecommerce](link)

### Proyecto 2: App de Tareas
Descripción breve del proyecto...
- **Tecnologías**: Vue.js, Firebase
- **Repositorio**: [github.com/usuario/tasklist](link)

## 📋 Sobre Mí

Soy desarrollador web full stack con experiencia en...

## 🚀 Cómo Ejecutar Localmente

\`\`\`bash
# Clonar repositorio
git clone https://github.com/TU_USUARIO/mi-portafolio.git

# Navegar al proyecto
cd mi-portafolio

# Abrir en navegador
open index.html
\`\`\`

## 📧 Contacto

Siéntete libre de contactarme:
- Email: tu.email@example.com
- LinkedIn: Tu perfil
- GitHub: @tu-usuario

## 📄 Licencia

Este proyecto está bajo la licencia MIT - ver el archivo LICENSE para más detalles.

---

Hecho con ❤️ por Tu Nombre
```

## 🔄 Flujo de Trabajo Git Recomendado

### Para nuevas características o cambios:

```bash
# 1. Actualizar la rama principal
git pull origin main

# 2. Crear una rama nueva para tu característica
git checkout -b feature/nueva-caracteristica

# 3. Hacer cambios y commits
git add .
git commit -m "feat: Agregar nueva característica"

# 4. Empujar a GitHub
git push origin feature/nueva-caracteristica

# 5. Crear un Pull Request en GitHub
# (Esto permite revisar cambios antes de fusionar)

# 6. Fusionar en main (desde GitHub o localmente)
git checkout main
git merge feature/nueva-caracteristica
git push origin main
```

## 📚 Recursos Útiles

### Documentación Oficial
- [Bootstrap Oficial](https://getbootstrap.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)

### Herramientas Recomendadas
- **Editor**: [Visual Studio Code](https://code.visualstudio.com)
- **Control de Versiones**: [Git](https://git-scm.com)
- **Hosting**: [Vercel](https://vercel.com), [Netlify](https://netlify.com), [GitHub Pages](https://pages.github.com)
- **Diseño**: [Figma](https://figma.com)
- **Colores**: [Coolors.co](https://coolors.co)

### Tutoriales Complementarios
- [Responsive Web Design](https://www.freecodecamp.org)
- [JavaScript Moderno](https://javascript.info)
- [Deploy en Vercel](https://vercel.com/docs)

## 🎓 Próximos Pasos

Después de completar este material:

1. ✅ Completa los desafíos del 1 al 3
2. ✅ Crea tu portafolio personalizado
3. ✅ Sube tu proyecto a GitHub
4. ✅ Despliega en línea (Vercel, Netlify, GitHub Pages)
5. ✅ Comparte en redes sociales
6. ✅ Sigue aprendiendo nuevas tecnologías

## 🤝 Contribuciones

Si encuentras errores o tienes sugerencias, siéntete libre de:
- Crear un [Issue](https://github.com/codigo-corhuila/material-programacion-avanzada/issues)
- Hacer un [Pull Request](https://github.com/codigo-corhuila/material-programacion-avanzada/pulls)

## 📞 Soporte

¿Tienes preguntas? Contáctanos:
- 📧 Email: soporte@corhuila.edu.co
- 💬 Discord: [Servidor de Corhuila]
- 🌐 Web: [www.corhuila.edu.co](https://www.corhuila.edu.co)

---

<div align="center">

**© 2026 Corporación Universitaria de Huila - Corhuila**

Hecho con ❤️ para estudiantes de Ingeniería de Sistemas y Mecatrónica

[⬆ Volver al Inicio](#-portafolio-profesional-con-bootstrap)

</div>
```

## ✅ Checklist Final Antes de Subir

- [ ] Archivo `bootstrap-portafolio-tutorial.html` descargado
- [ ] README.md creado con información del proyecto
- [ ] Carpeta `.git` inicializada (`git init`)
- [ ] Archivos agregados al repositorio (`git add .`)
- [ ] Primer commit realizado (`git commit -m "mensaje"`)
- [ ] Repositorio remoto agregado (`git remote add origin ...`)
- [ ] Cambios empujados a GitHub (`git push -u origin main`)
- [ ] Repositorio visible en GitHub
- [ ] URL copiada y compartida

## 🎉 ¡Listo!

Tu portafolio está en línea. Ahora puedes:

✅ Compartir el enlace con potenciales empleadores
✅ Agregar más proyectos
✅ Actualizar tu información
✅ Mejorar el diseño con el tiempo

---

**Última actualización**: 11 de Febrero, 2026  
**Versión**: 1.0  
**Autor**: Material Didáctico - Corhuila
