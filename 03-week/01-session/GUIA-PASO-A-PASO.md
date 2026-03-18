# 🎓 GUÍA PASO A PASO: CREAR UN PORTAFOLIO CON BOOTSTRAP 5

## 📌 Índice
1. [Introducción](#introducción)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [Paso 1: Crear la Estructura HTML](#paso-1-crear-la-estructura-html)
4. [Paso 2: Importar Bootstrap 5](#paso-2-importar-bootstrap-5)
5. [Paso 3: Crear la Barra de Navegación](#paso-3-crear-la-barra-de-navegación)
6. [Paso 4: Crear la Sección Hero](#paso-4-crear-la-sección-hero)
7. [Paso 5: Agregar CSS Personalizado](#paso-5-agregar-css-personalizado)
8. [Paso 6: Agregar Interactividad con JavaScript](#paso-6-agregar-interactividad-con-javascript)
9. [Paso 7: Optimizar y Publicar](#paso-7-optimizar-y-publicar)

---

## 🌟 Introducción

Este tutorial te guiará a través de la creación de un portafolio profesional completo usando:
- **Bootstrap 5** - Framework CSS responsivo
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados y animaciones
- **JavaScript** - Interactividad y funcionalidades dinámicas

**Tiempo estimado:** 2-3 horas
**Nivel:** Intermedio

---

## 📁 Estructura de Archivos

Al terminar, tu carpeta tendrá esta estructura:

```
portafolio/
├── index.html                    # Archivo HTML principal
├── styles-portafolio.css        # Estilos CSS adicionales
├── script-portafolio.js         # Funcionalidades JavaScript
├── README-PORTAFOLIO.md         # Documentación
├── GUIA-PASO-A-PASO.md         # Esta guía
├── assets/                       # Carpeta de recursos
│   ├── images/                  # Imágenes
│   │   └── perfil.jpg          # Tu foto de perfil
│   └── cv/
│       └── cv.pdf              # Tu CV en PDF
└── contacto/
    └── enviar-email.php         # Para manejar emails (opcional)
```

---

## PASO 1: Crear la Estructura HTML

### 1.1 Comenzar con el HTML básico

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio - Desarrollador</title>
    <meta name="description" content="Portafolio profesional de Juan Pérez, desarrollador full stack">
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome para iconos -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- CSS Personalizado -->
    <link rel="stylesheet" href="styles-portafolio.css">
</head>
<body>
    <!-- Contenido va aquí -->

    <!-- Bootstrap 5 JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    
    <!-- JavaScript Personalizado -->
    <script src="script-portafolio.js"></script>
</body>
</html>
```

### 1.2 Explicación de Meta Tags

```html
<!-- Especifica el juego de caracteres -->
<meta charset="UTF-8">

<!-- Para que sea responsivo en móviles -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Descripción para SEO -->
<meta name="description" content="...">

<!-- Palabras clave -->
<meta name="keywords" content="desarrollador, web, portafolio">

<!-- Autor -->
<meta name="author" content="Tu Nombre">
```

---

## PASO 2: Importar Bootstrap 5

### 2.1 ¿Qué es Bootstrap 5?

Bootstrap es un framework CSS que proporciona:
- **Grid System** - Sistema de 12 columnas para layouts responsivos
- **Componentes** - Botones, alertas, tablas, modales, etc.
- **Utilidades** - Clases para márgenes, padding, colores, etc.
- **Temas** - Estilos predefinidos profesionales

### 2.2 Cómo funciona el Grid de Bootstrap

```html
<div class="container">
    <!-- Container: contenedor responsivo con ancho máximo -->
    <div class="row">
        <!-- Row: fila de 12 columnas -->
        <div class="col-md-6">
            <!-- col-md-6: toma 6 columnas en pantalla mediana -->
            Mitad izquierda
        </div>
        <div class="col-md-6">
            <!-- col-md-6: toma 6 columnas en pantalla mediana -->
            Mitad derecha
        </div>
    </div>
</div>
```

### 2.3 Clases Bootstrap comunes

```html
<!-- Contenedores -->
<div class="container">Ancho máximo responsivo</div>
<div class="container-fluid">Ancho completo</div>

<!-- Utilidades de espaciado -->
<div class="mt-5">Margen superior 5 -->
<div class="mb-3">Margen inferior 3</div>
<div class="p-4">Padding 4</div>

<!-- Colores de Bootstrap -->
<div class="bg-primary">Fondo azul</div>
<div class="text-danger">Texto rojo</div>

<!-- Botones -->
<button class="btn btn-primary">Botón azul</button>
<button class="btn btn-success">Botón verde</button>

<!-- Alertas -->
<div class="alert alert-success">¡Éxito!</div>
<div class="alert alert-danger">Error</div>
```

---

## PASO 3: Crear la Barra de Navegación

### 3.1 Estructura básica del Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <!-- Logo/Marca -->
        <a class="navbar-brand" href="#inicio">Mi Portafolio</a>
        
        <!-- Botón para menú móvil -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Menú de navegación -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#inicio">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#acerca">Acerca de mí</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#habilidades">Habilidades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contacto">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### 3.2 Personalización del Navbar con CSS

```css
/* Navbar con gradiente -->
.navbar {
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

/* Logo del navbar -->
.navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: white !important;
}

/* Links del navbar -->
.navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.8) !important;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
    color: #ff6b6b !important;
}
```

---

## PASO 4: Crear la Sección Hero

### 4.1 ¿Qué es una sección Hero?

Una sección hero es la primera sección visual importante de un sitio, usualmente con:
- Una imagen o color de fondo prominente
- Título principal
- Subtítulo o descripción
- Botón de llamada a la acción

### 4.2 Estructura HTML

```html
<section id="inicio" class="hero">
    <div class="hero-content">
        <!-- Foto del perfil -->
        <img src="assets/images/perfil.jpg" class="hero-image" alt="Tu Nombre">
        
        <!-- Nombre -->
        <h1>Tu Nombre</h1>
        
        <!-- Profesión -->
        <p class="subtitle">Desarrollador Full Stack</p>
        
        <!-- Descripción -->
        <p class="description">
            Especializado en crear aplicaciones web modernas y escalables
        </p>
        
        <!-- Botón de acción -->
        <a href="#contacto" class="btn btn-primary-custom">
            Contactame
        </a>
    </div>
</section>
```

### 4.3 Estilos CSS para la sección Hero

```css
.hero {
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    color: white;
    padding: 120px 0;
    text-align: center;
}

.hero-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid white;
    object-fit: cover;
    margin-bottom: 30px;
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
}

.description {
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.1rem;
}
```

---

## PASO 5: Agregar CSS Personalizado

### 5.1 Variables CSS (CSS Custom Properties)

Las variables CSS te permiten definir valores que puedes reutilizar:

```css
:root {
    /* Colores */
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    
    /* Fondos -->
    --light-bg: #ecf0f1;
    
    /* Tipografía -->
    --main-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-size-base: 1rem;
    --font-size-lg: 1.25rem;
}

/* Usar las variables -->
body {
    font-family: var(--main-font);
    font-size: var(--font-size-base);
    color: var(--primary-color);
}

.btn-custom {
    background-color: var(--accent-color);
}
```

### 5.2 Animaciones CSS

```css
/* Definir una animación -->
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Usar la animación -->
.hero h1 {
    animation: slideDown 0.8s ease-out;
}

/* Animación de hover -->
.skill-card {
    transition: all 0.3s ease;
}

.skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
```

### 5.3 Layout responsive con CSS Grid

```css
/* Grid responsivo -->
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

/* Mejora para pantallas pequeñas -->
@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## PASO 6: Agregar Interactividad con JavaScript

### 6.1 Fundamentos de JavaScript

```javascript
/* Seleccionar elementos -->
const elemento = document.getElementById('id');
const elementos = document.querySelectorAll('.clase');

/* Agregar event listeners -->
elemento.addEventListener('click', () => {
    console.log('Elemento fue clickeado');
});

/* Modificar clases -->
elemento.classList.add('activo');
elemento.classList.remove('inactivo');
elemento.classList.toggle('visible');

/* Cambiar estilos -->
elemento.style.backgroundColor = 'red';
elemento.style.display = 'none';

/* Obtener valores -->
const valor = elemento.value;
const texto = elemento.textContent;
```

### 6.2 Validación de formulavios

```javascript
/* Obtener elementos del formulario -->
const formulario = document.getElementById('contactForm');
const inputEmail = document.getElementById('email');

/* Validar email -->
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir envío por defecto
    
    const email = inputEmail.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        console.log('Email válido');
    } else {
        console.log('Email inválido');
    }
});
```

### 6.3 Modularizar tu código

Dividir el código en módulos mejora la organización:

```javascript
/* Patrón Module (IIFE) -->
const MiModulo = (() => {
    // Variables privadas
    const variable = 'privada';
    
    // Funciones privadas
    const funcionPrivada = () => {
        console.log(variable);
    };
    
    // Funciones públicas
    const funcionPublica = () => {
        funcionPrivada();
    };
    
    // Retornar solo lo que quieres exposer
    return {
        funcionPublica
    };
})();

/* Usar el módulo -->
MiModulo.funcionPublica();
```

### 6.4 IntersectionObserver para animaciones

```javascript
/* Animar elementos cuando entrar en la vista -->
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animado');
            observer.unobserve(entry.target);
        }
    });
});

/* Observer todos los elementos con clase -->
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});
```

---

## PASO 7: Optimizar y Publicar

### 7.1 Checklist de optimización

- [ ] **Imágenes optimizadas** - Comprimir fotografías (tinypng.com)
- [ ] **CSS minificado** - Reducir tamaño de archivos CSS
- [ ] **JavaScript minificado** - Reducir tamaño de archivos JS
- [ ] **Lazy loading** - Cargar imágenes solo cuando sea necesario
- [ ] **Cache del navegador** - Mejorar velocidad de carga
- [ ] **SEO** - Meta tags, descripciones, palabras clave

### 7.2 Optimizar imágenes

```html
<!-- Lazy loading -->
<img src="imagen.jpg" loading="lazy" alt="Descripción">

<!-- Diferentes tamaños para diferentes pantallas -->
<picture>
    <source media="(max-width: 600px)" srcset="imagen-small.jpg">
    <source media="(max-width: 1200px)" srcset="imagen-medium.jpg">
    <img src="imagen-large.jpg" alt="Descripción">
</picture>
```

### 7.3 Servicios de hosting gratuitos

1. **Netlify** (https://netlify.com)
   - Deploy desde GitHub
   - Certificado HTTPS gratis
   - Fácil de usar

2. **Vercel** (https://vercel.com)
   - Optimizado para performance
   - Integración con GitHub
   - Gratis para proyectos estáticos

3. **GitHub Pages** (https://pages.github.com)
   - Gratis con repositorio GitHub
   - Perfecto para portafolios

### 7.4 Pasos para publicar en Netlify

1. Crear cuenta en netlify.com
2. Iniciar sesión con GitHub
3. Conectar tu repositorio
4. Seleccionar rama (main/master)
5. Publicado automáticamente en cada push

---

## 📚 Recursos Adicionales

### Documentación oficial
- [Bootstrap 5 Docs](https://getbootstrap.com/docs)
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Herramientas útiles
- **Visual Studio Code** - Editor de código
- **Chrome DevTools** - Depuración y inspección
- **TinyPNG** - Comprimir imágenes
- **Responsively App** - Probar en múltiples dispositivos

### Inspiración
- [Dribbble](https://dribbble.com) - Diseños inspiration
- [Awwwards](https://awwwards.com) - Sitios premiados
- [CodePen](https://codepen.io) - Ejemplos de código

---

## 🎨 Ejemplos de personalización

### Cambiar colores (Tema verde)

```css
:root {
    --primary-color: #1a472a;
    --secondary-color: #2d7a3e;
    --accent-color: #4CAF50;
    --light-bg: #e8f5e9;
}
```

### Agregar más secciones

```html
<!-- Nuevo artículo de blog -->
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <div class="blog-grid">
            <!-- Artículos aquí -->
        </div>
    </div>
</section>
```

### Integración con API

```javascript
/* Traer datos desde una API -->
fetch('https://api.ejemplo.com/datos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Procesar datos
    })
    .catch(error => console.error('Error:', error));
```

---

## ✅ Conclusión

¡Felicitaciones! Ahora tienes los conocimientos para:

✓ Crear un portafolio profesional con Bootstrap 5
✓ Personalizar estilos con CSS
✓ Agregar interactividad con JavaScript
✓ Optimizar y publicar tu sitio
✓ Mantener código limpio y organizado

**Próximos pasos:**
1. Personaliza el portafolio con tu información
2. Agrega tus proyectos reales
3. Optimiza las imágenes
4. Publica en un servicio de hosting
5. Comparte tu portafolio en redes sociales

¡Mucho éxito con tu portafolio! 🚀

---

**Preguntas frecuentes:**

**¿Cómo cambio el color principal?**
Busca `:root` en el CSS y cambia `--primary-color`

**¿Cómo agrego más secciones?**
Copia una sección existente, cambia el `id` y personaliza el contenido

**¿Cómo hago que el formulario envíe emails reales?**
Usa servicios como Formspree, EmailJS o backend propio

**¿Cómo mejoro el SEO?**
Agrega meta tags descriptivos, usa palabras clave y estructura semántica

**¿Dónde guardo mis imágenes?**
En una carpeta `assets/images/` dentro del proyecto
