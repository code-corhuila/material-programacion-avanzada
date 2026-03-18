# 📱 Portafolio CV Profesional con Bootstrap 5

Un portafolio profesional completamente responsivo y moderno para desarrolladores, construido con **Bootstrap 5**, **HTML5**, **CSS3** y **JavaScript vanilla**.

## 🎯 Características Principales

✅ **Diseño Completamente Responsivo** - Se adapta a todos los dispositivos (móvil, tablet, desktop)
✅ **Interfaz Moderna y Atractiva** - Gradientes, animaciones suaves y efectos visuales
✅ **Secciones Completas** - Inicio, Acerca de mí, Habilidades, Experiencia, Proyectos, Educación y Contacto
✅ **Barra de Navegación Sticky** - Navegación fija con links ancla suave
✅ **Animaciones Interactivas** - Barras de habilidades que se animan al scroll
✅ **Formulario de Contacto Funcional** - Validación de datos y alertas visuales
✅ **Botón "Volver Arriba"** - Aparece al hacer scroll para volver al inicio
✅ **Totalmente Personalizable** - Fácil de editar y adaptar a tus necesidades

---

## 📋 Paso a Paso: Cómo Usar el Portafolio

### PASO 1: Abrir el Archivo
1. Abre el archivo `portafolio-cv-tutorial.html` en tu navegador web
2. El portafolio se cargará completamente funcional con todos los estilos y animaciones

### PASO 2: Personalizar Información Personal
Para cambiar la información del desarrollador, busca y modifica los siguientes elementos:

#### En la sección HERO:
```html
<h1>Juan Pérez</h1>
<p class="subtitle">Desarrollador Full Stack</p>
<p class="description">
    Especializado en crear aplicaciones web modernas y escalables. 
    Apasionado por la tecnología, el diseño limpio y las soluciones innovadoras.
</p>
```

#### En la sección ACERCA DE MÍ:
```html
<h3>Desarrollador Apasionado</h3>
<p>Soy un desarrollador web full stack con más de 5 años de experiencia...</p>

<ul class="info-list">
    <li>
        <strong>Nombre:</strong>
        <span>Juan Pérez García</span>
    </li>
    <li>
        <strong>Email:</strong>
        <span><a href="mailto:tu-email@example.com">tu-email@example.com</a></span>
    </li>
    <!-- Actualiza los demás datos -->
</ul>
```

### PASO 3: Cambiar la Foto de Perfil
Reemplaza el SVG por una imagen real:

```html
<!-- ANTES (SVG genérico): -->
<svg class="hero-image" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#3498db"/>
    <circle cx="100" cy="70" r="35" fill="#ecf0f1"/>
    <ellipse cx="100" cy="140" rx="50" ry="45" fill="#ecf0f1"/>
</svg>

<!-- DESPUÉS (con imagen real): -->
<img src="ruta/a/tu-foto.jpg" class="hero-image" alt="Tu Nombre">
```

### PASO 4: Actualizar Habilidades
Modifica las tarjetas de habilidades en la sección "Habilidades":

```html
<div class="skill-card">
    <h4><i class="fas fa-code"></i> Frontend</h4>
    <div class="skill-item">
        <div class="skill-name">
            <span>HTML/CSS</span>
            <span>95%</span>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" style="--target: 95%"></div>
        </div>
    </div>
    <!-- Actualiza con tus habilidades -->
</div>
```

### PASO 5: Actualizar Experiencia Laboral
Modifica la sección de timeline (línea de tiempo):

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Tu Posición</h3>
        <div class="timeline-date">
            <i class="fas fa-calendar"></i> Enero 2022 - Presente
        </div>
        <p class="timeline-description">
            Empresa: Tu Empresa<br>
            Descripción de tus responsabilidades y logros.
        </p>
    </div>
</div>
```

### PASO 6: Agregar tus Proyectos
Modifica las tarjetas de proyectos:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-shopping-cart"></i>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción del proyecto y características principales.</p>
        <div class="project-tags">
            <span class="tag">Tecnología 1</span>
            <span class="tag">Tecnología 2</span>
        </div>
        <div class="project-links">
            <a href="tu-link-demo">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
            <a href="tu-link-github">
                <i class="fas fa-github"></i> Código
            </a>
        </div>
    </div>
</div>
```

### PASO 7: Actualizar Sección de Educación
Modifica los elementos de educación:

```html
<div class="education-item">
    <h3>Tu Carrera o Certificación</h3>
    <div class="education-date">
        <i class="fas fa-graduation-cap"></i> Año Inicio - Año Fin
    </div>
    <p class="education-school">Institución Educativa</p>
    <p>Descripción del programa o logros académicos.</p>
</div>
```

### PASO 8: Configurar Enlaces de Contacto
Actualiza la información de contacto en la sección CONTACTO:

```html
<div class="contact-info">
    <div class="contact-info-item">
        <i class="fas fa-envelope"></i>
        <p><a href="mailto:tu-email@example.com">tu-email@example.com</a></p>
    </div>
    <div class="contact-info-item">
        <i class="fas fa-phone"></i>
        <p><a href="tel:+57XXXX">+57 XXX XXXX</a></p>
    </div>
</div>
```

### PASO 9: Agregar Enlaces a Redes Sociales
Actualiza los enlaces en la sección de redes sociales:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/tu-perfil" title="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://github.com/tu-usuario" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <!-- Agrega más redes sociales -->
</div>
```

### PASO 10: Personalizar Colores
Para cambiar los colores del portafolio, busca la sección de variables CSS:

```css
:root {
    --primary-color: #2c3e50;        /* Color principal (azul oscuro) */
    --secondary-color: #3498db;     /* Color secundario (azul) */
    --accent-color: #e74c3c;        /* Color de acento (rojo) */
    --light-bg: #ecf0f1;            /* Fondo claro */
    --text-dark: #2c3e50;           /* Texto oscuro */
    --text-light: #7f8c8d;          /* Texto gris */
}
```

Cambio ejemplo para tema verde:
```css
:root {
    --primary-color: #1a472a;       /* Verde oscuro */
    --secondary-color: #2d7a3e;     /* Verde medio */
    --accent-color: #4CAF50;        /* Verde claro */
    --light-bg: #e8f5e9;            /* Fondo verde claro */
    --text-dark: #1a472a;
    --text-light: #558b2f;
}
```

---

## 🎨 Estructura HTML

El portafolio está organizado en las siguientes secciones:

1. **Barra de Navegación** - Menú sticky con links a todas las secciones
2. **Sección Hero** - Portada con foto, nombre y descripción
3. **Acerca de Mí** - Información personal y datos de contacto
4. **Habilidades** - Tarjetas con barras de progreso animadas
5. **Experiencia** - Timeline (línea de tiempo) con trabajos anteriores
6. **Proyectos** - Tarjetas de proyectos destacados
7. **Educación** - Información académica y certificaciones
8. **Contacto** - Formulario de contacto y redes sociales
9. **Footer** - Pie de página

---

## 🛠️ Características JavaScript Incluidas

### 1. **Animación de Barras de Habilidades**
Las barras de progreso se animan cuando entran en la vista del usuario:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar la barra
        }
    });
});
```

### 2. **Botón Volver Arriba**
Aparece automáticamente cuando haces scroll:

```javascript
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    }
});
```

### 3. **Validación de Formulario**
El formulario de contacto valida:
- Que todos los campos estén completos
- Que el email sea válido
- Muestra alertas de éxito o error

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    mostrarAlerta('Por favor ingresa un email válido', 'warning');
}
```

### 4. **Navegación Activa**
El menú indica automáticamente qué sección está activa:

```javascript
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
});
```

### 5. **Scroll Suave (Smooth Scroll)**
Los links navegan suavemente a cada sección:

```html
<style>
    html {
        scroll-behavior: smooth;
    }
</style>
```

---

## 📱 Responsividad

El portafolio se adapta a todos los tamaños de pantalla:

- **Desktop** (1200px+) - Diseño completo con timeline horizontal
- **Tablet** (768px - 1199px) - Ajustes de espaciado y tipografía
- **Móvil** (< 768px) - Menú hamburguesa, timeline vertical, tarjetas en una columna

```css
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
}
```

---

## 🚀 Mejoras Posibles

Aquí hay algunas mejoras que puedes hacer:

1. **Envío Real de Email** - Integra un servicio como Formspree o EmailJS
2. **Efectos Parallax** - Agrega movimiento de fondo en scroll
3. **Modo Oscuro** - Implementa un toggle para darkmode
4. **Blog** - Agrega una sección de artículos o blog
5. **Más Interactividad** - Agrega filtrado de proyectos, etc.
6. **Descargar CV** - Botón para descargar CV en PDF

---

## 📚 Recursos Utilizados

- **[Bootstrap 5](https://getbootstrap.com/)** - Framework CSS
- **[Font Awesome](https://fontawesome.com/)** - Iconos
- **[Google Fonts](https://fonts.google.com/)** - Fuentes personalizadas
- **CSS Grid y Flexbox** - Layouts responsivos
- **JavaScript Vanilla** - Sin dependencias externas

---

## 💡 Tips y Mejores Prácticas

1. **Optimiza tus imágenes** - Usa imágenes en webp o comprimidas
2. **Prueba en dispositivos reales** - No solo en DevTools
3. **Velocidad de carga** - Minifica CSS y JS en producción
4. **SEO** - Agrega meta tags y descripciones apropiadas
5. **Accesibilidad** - Asegúrate de que sea navegable sin ratón

---

## 📄 Licencia

Este portafolio es libre para usar y personalizar como quieras.

---

## 👨‍💻 Autor

Creado como material educativo para el curso de Programación Web.

✨ **¡Personaliza este portafolio y comparte tu trabajo con el mundo!** ✨
