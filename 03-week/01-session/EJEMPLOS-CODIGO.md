# 🔧 EJEMPLOS DE CÓDIGO - COMPONENTES REUTILIZABLES

Este documento contiene fragmentos de código que puedes copiar y pegar directamente en tu portafolio.

---

## 📋 TABLA DE CONTENIDOS

1. [Ejemplos HTML](#ejemplos-html)
2. [Ejemplos CSS](#ejemplos-css)
3. [Ejemplos JavaScript](#ejemplos-javascript)

---

# EJEMPLOS HTML

## Sección Acerca de Mí - Alternativa 1

```html
<section id="acerca" class="about">
    <div class="container">
        <h2 class="section-title">Conoce mi Historia</h2>
        
        <div class="row align-items-center">
            <div class="col-md-6">
                <img src="assets/images/foto-secundaria.jpg" 
                     class="img-fluid rounded-circle shadow" 
                     alt="Foto personal">
            </div>
            
            <div class="col-md-6">
                <h3>Hola, soy [Tu Nombre]</h3>
                <p class="lead">
                    Desarrollador apasionado con un enfoque en crear soluciones digitales 
                    que hacen la diferencia.
                </p>
                
                <div class="about-highlights">
                    <div class="highlight-item">
                        <h5><i class="fas fa-code"></i> Desarrollador</h5>
                        <p>5+ años de experiencia en desarrollo web</p>
                    </div>
                    <div class="highlight-item">
                        <h5><i class="fas fa-palette"></i> Diseñador</h5>
                        <p>Especialista en diseño responsivo y UX</p>
                    </div>
                    <div class="highlight-item">
                        <h5><i class="fas fa-rocket"></i> Innovador</h5>
                        <p>Siempre buscando nuevas tecnologías</p>
                    </div>
                </div>
                
                <a href="#contacto" class="btn btn-primary mt-4">
                    Trabajemos Juntos
                </a>
            </div>
        </div>
    </div>
</section>
```

## Tarjeta de Servicio

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-laptop-code"></i>
    </div>
    <h3>Desarrollo Web</h3>
    <p>Crear sitios web modernos, rápidos y responsivos que funcionan en todos los dispositivos.</p>
    <ul class="service-list">
        <li><i class="fas fa-check"></i> HTML5 & CSS3</li>
        <li><i class="fas fa-check"></i> JavaScript</li>
        <li><i class="fas fa-check"></i> Responsive Design</li>
        <li><i class="fas fa-check"></i> SEO Optimizado</li>
    </ul>
</div>
```

## Testimonios de Clientes

```html
<section class="testimonials">
    <div class="container">
        <h2 class="section-title">Qué Dicen Mis Clientes</h2>
        
        <div class="row">
            <div class="col-md-4">
                <div class="testimonial-card">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    
                    <p class="testimonial-text">
                        "Excelente trabajo, muy profesional y puntual. Recomendado 100%"
                    </p>
                    
                    <div class="testimonial-author">
                        <img src="assets/images/cliente-1.jpg" alt="Cliente">
                        <div>
                            <h4>Carlos García</h4>
                            <small>CEO de TechCorp</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="testimonial-card">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    
                    <p class="testimonial-text">
                        "Me encantó el resultado. El diseño es hermoso y funciona perfecto."
                    </p>
                    
                    <div class="testimonial-author">
                        <img src="assets/images/cliente-2.jpg" alt="Cliente">
                        <div>
                            <h4>María López</h4>
                            <small>Directora de Innovación</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="testimonial-card">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    
                    <p class="testimonial-text">
                        "Profesional confiable, código limpio, documentación completa."
                    </p>
                    
                    <div class="testimonial-author">
                        <img src="assets/images/cliente-3.jpg" alt="Cliente">
                        <div>
                            <h4>Juan Martínez</h4>
                            <small>Fundador de StartupXYZ</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Modal (Ventana Emergente)

```html
<!-- Botón que abre el modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">
    Abrir Modal
</button>

<!-- Estructura del modal -->
<div class="modal fade" id="miModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Encabezado del modal -->
            <div class="modal-header">
                <h5 class="modal-title">Título del Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            
            <!-- Cuerpo del modal -->
            <div class="modal-body">
                <p>Contenido del modal aquí...</p>
            </div>
            
            <!-- Pie del modal -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Cerrar
                </button>
                <button type="button" class="btn btn-primary">
                    Guardar Cambios
                </button>
            </div>
        </div>
    </div>
</div>
```

## Tabla Responsiva

```html
<section class="table-section">
    <div class="container">
        <h2 class="section-title">Comparativa de Planes</h2>
        
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Característica</th>
                        <th>Plan Básico</th>
                        <th>Plan Pro</th>
                        <th>Plan Premium</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Proyectos</strong></td>
                        <td>Hasta 5</td>
                        <td>Hasta 20</td>
                        <td>Ilimitados</td>
                    </tr>
                    <tr>
                        <td><strong>Soporte</strong></td>
                        <td>Email</td>
                        <td>Email + Chat</td>
                        <td>24/7 Dedicado</td>
                    </tr>
                    <tr>
                        <td><strong>Almacenamiento</strong></td>
                        <td>10 GB</td>
                        <td>100 GB</td>
                        <td>1 TB</td>
                    </tr>
                    <tr>
                        <td><strong>APIs</strong></td>
                        <td>✗</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td><strong>Precio Mensual</strong></td>
                        <td>$29</td>
                        <td>$79</td>
                        <td>$199</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

---

# EJEMPLOS CSS

## Estilizar Tarjetas de Servicio

```css
.service-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s ease;
    border-top: 4px solid #3498db;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-top-color: #e74c3c;
}

.service-icon {
    font-size: 3rem;
    color: #3498db;
    margin-bottom: 20px;
}

.service-icon i {
    transition: color 0.3s ease;
}

.service-card:hover .service-icon i {
    color: #e74c3c;
}

.service-list {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-top: 20px;
}

.service-list li {
    padding: 8px 0;
    color: #666;
}

.service-list i {
    color: #2ecc71;
    margin-right: 10px;
    font-weight: bold;
}
```

## Estilos para Testimoniales

```css
.testimonial-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border-left: 4px solid #3498db;
}

.testimonial-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
}

.stars {
    color: #f39c12;
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.testimonial-text {
    font-style: italic;
    color: #555;
    margin: 15px 0;
    line-height: 1.6;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-author h4 {
    margin: 0;
    color: #2c3e50;
}

.testimonial-author small {
    color: #999;
}
```

## Gradientes Avanzados

```css
/* Gradiente lineal simple -->
.gradient-1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Gradiente radial -->
.gradient-2 {
    background: radial-gradient(circle, #667eea 0%, #764ba2 100%);
}

/* Gradiente animado -->
@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.gradient-animated {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientFlow 15s ease infinite;
}

/* Múltiples gradientes -->
.gradient-multi {
    background: 
        linear-gradient(90deg, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 100%),
        linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}
```

## Sombras avanzadas

```css
/* Sombra suave -->
.shadow-soft {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Sombra media -->
.shadow-medium {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

/* Sombra pronunciada -->
.shadow-hard {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

/* Sombra coloreada -->
.shadow-colored {
    box-shadow: 0 10px 30px rgba(52, 152, 219, 0.3);
}

/* Sombra múltiple (efecto 3D) -->
.shadow-3d {
    box-shadow: 
        0 2px 5px rgba(0, 0, 0, 0.1),
        0 5px 10px rgba(0, 0, 0, 0.15),
        0 10px 20px rgba(0, 0, 0, 0.2);
}
```

---

# EJEMPLOS JAVASCRIPT

## Validador de Formulario Avanzado

```javascript
class ValidadorFormulario {
    constructor(formularioId) {
        this.formulario = document.getElementById(formularioId);
        this.errores = {};
        this.init();
    }

    init() {
        if (!this.formulario) return;
        this.formulario.addEventListener('submit', (e) => this.manejarEnvio(e));
    }

    manejarEnvio(e) {
        e.preventDefault();
        this.errores = {};
        
        // Validar campos
        this.validarCampos();
        
        // Si hay errores, mostrarlos
        if (Object.keys(this.errores).length > 0) {
            this.mostrarErrores();
        } else {
            this.enviarFormulario();
        }
    }

    validarCampos() {
        const campos = this.formulario.querySelectorAll('[data-validar]');
        
        campos.forEach(campo => {
            const tipo = campo.dataset.validar;
            const valor = campo.value.trim();
            
            if (!valor) {
                this.errores[campo.id] = 'Este campo es requerido';
                return;
            }
            
            switch(tipo) {
                case 'email':
                    if (!this.validarEmail(valor)) {
                        this.errores[campo.id] = 'Email inválido';
                    }
                    break;
                case 'telefono':
                    if (!this.validarTelefono(valor)) {
                        this.errores[campo.id] = 'Teléfono inválido';
                    }
                    break;
                case 'minimo':
                    const minimo = campo.dataset.minimo || 5;
                    if (valor.length < minimo) {
                        this.errores[campo.id] = `Mínimo ${minimo} caracteres`;
                    }
                    break;
            }
        });
    }

    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    validarTelefono(telefono) {
        const regex = /^[\d\s\-\+\(\)]{10,}$/;
        return regex.test(telefono);
    }

    mostrarErrores() {
        // Limpiar errores anteriores
        this.formulario.querySelectorAll('.error-message').forEach(el => el.remove());
        
        // Mostrar nuevos errores
        Object.keys(this.errores).forEach(id => {
            const campo = document.getElementById(id);
            const mensajeDiv = document.createElement('div');
            mensajeDiv.className = 'error-message text-danger mt-1 small';
            mensajeDiv.textContent = this.errores[id];
            
            campo.parentElement.appendChild(mensajeDiv);
            campo.classList.add('is-invalid');
        });
    }

    enviarFormulario() {
        const btn = this.formulario.querySelector('button[type="submit"]');
        const textOriginal = btn.textContent;
        
        btn.disabled = true;
        btn.textContent = 'Enviando...';
        
        // Simular envío
        setTimeout(() => {
            console.log('Formulario enviado');
            alert('¡Formulario enviado correctamente!');
            this.formulario.reset();
            btn.disabled = false;
            btn.textContent = textOriginal;
        }, 1500);
    }
}

// Usar:
const validador = new ValidadorFormulario('contactForm');
```

HTML para usar la clase:

```html
<form id="contactForm">
    <div class="mb-3">
        <input type="text" id="nombre" class="form-control" 
               data-validar="texto" data-minimo="3" placeholder="Nombre">
    </div>
    <div class="mb-3">
        <input type="email" id="email" class="form-control" 
               data-validar="email" placeholder="Email">
    </div>
    <div class="mb-3">
        <textarea id="mensaje" class="form-control" 
                  data-validar="texto" data-minimo="10" 
                  placeholder="Mensaje"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

## Gestor de Temas (Dark/Light Mode)

```javascript
class TemaManager {
    constructor() {
        this.html = document.documentElement;
        this.btnToggle = document.getElementById('darkModeToggle');
        this.temaActual = localStorage.getItem('tema') || 'light';
        this.init();
    }

    init() {
        this.aplicarTema(this.temaActual);
        if (this.btnToggle) {
            this.btnToggle.addEventListener('click', () => this.toggleTema());
        }
    }

    toggleTema() {
        this.temaActual = this.temaActual === 'light' ? 'dark' : 'light';
        this.aplicarTema(this.temaActual);
    }

    aplicarTema(tema) {
        if (tema === 'dark') {
            this.html.setAttribute('data-bs-theme', 'dark');
            this.html.setAttribute('data-theme', 'dark');
            if (this.btnToggle) {
                this.btnToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        } else {
            this.html.removeAttribute('data-bs-theme');
            this.html.removeAttribute('data-theme');
            if (this.btnToggle) {
                this.btnToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }
        localStorage.setItem('tema', tema);
    }

    getTemaActual() {
        return this.temaActual;
    }
}

// Usar:
const temaManager = new TemaManager();
```

HTML para el botón:

```html
<button id="darkModeToggle" class="btn btn-sm">
    <i class="fas fa-moon"></i>
</button>
```

## Contador Animado de Números

```javascript
class ContadorNumeros {
    constructor(selectores) {
        this.contadores = document.querySelectorAll(selectores);
        this.observarElementos();
    }

    observarElementos() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    this.animar(counter);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        this.contadores.forEach(contador => observer.observe(contador));
    }

    animar(elemento) {
        const fin = parseInt(elemento.dataset.final) || 0;
        const duracion = parseInt(elemento.dataset.duracion) || 2000;
        const incremento = fin / (duracion / 100);
        let actual = 0;

        const interval = setInterval(() => {
            actual += incremento;
            
            if (actual >= fin) {
                actual = fin;
                clearInterval(interval);
            }
            
            elemento.textContent = Math.floor(actual);
        }, 100);
    }
}

// Usar:
new ContadorNumeros('.contador');
```

HTML:

```html
<div class="contador" data-final="100" data-duracion="2000">0</div>
<div class="contador" data-final="50" data-duracion="2000">0</div>
```

## Gestor de Galería de Imágenes

```javascript
class GaleriaImagenes {
    constructor(contenedorId) {
        this.contenedor = document.getElementById(contenedorId);
        this.imagenes = this.contenedor.querySelectorAll('img');
        this.indiceActual = 0;
        this.init();
    }

    init() {
        this.crearModal();
        this.agregarEventos();
    }

    crearModal() {
        const modal = document.createElement('div');
        modal.id = 'galeriaModal';
        modal.className = 'galeria-modal';
        modal.innerHTML = `
            <div class="galeria-modal-contenido">
                <button class="galeria-close">&times;</button>
                <button class="galeria-prev"><i class="fas fa-chevron-left"></i></button>
                <img id="galeriaImagen" src="" alt="">
                <button class="galeria-next"><i class="fas fa-chevron-right"></i></button>
                <div class="galeria-contador">
                    <span id="galeriaIndice">1</span> / <span id="galeriaTotal">1</span>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        document.querySelector('.galeria-close').addEventListener('click', () => this.cerrar());
        document.querySelector('.galeria-prev').addEventListener('click', () => this.anterior());
        document.querySelector('.galeria-next').addEventListener('click', () => this.siguiente());
        
        document.getElementById('galeriaTotal').textContent = this.imagenes.length;
    }

    agregarEventos() {
        this.imagenes.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                this.indiceActual = index;
                this.mostrar();
            });
        });
    }

    mostrar() {
        const modal = document.getElementById('galeriaModal');
        const img = document.getElementById('galeriaImagen');
        
        img.src = this.imagenes[this.indiceActual].src;
        document.getElementById('galeriaIndice').textContent = this.indiceActual + 1;
        modal.style.display = 'flex';
    }

    siguiente() {
        this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
        this.mostrar();
    }

    anterior() {
        this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
        this.mostrar();
    }

    cerrar() {
        document.getElementById('galeriaModal').style.display = 'none';
    }
}

// Usar:
new GaleriaImagenes('miGaleria');
```

CSS para la galería:

```css
.galeria-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    align-items: center;
    justify-content: center;
}

.galeria-modal-contenido {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.galeria-modal img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.galeria-close, .galeria-prev, .galeria-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 5px;
}

.galeria-close {
    right: 20px;
    top: 20px;
    font-size: 30px;
}

.galeria-prev {
    left: 0;
}

.galeria-next {
    right: 0;
}

.galeria-prev:hover, .galeria-next:hover {
    background: rgba(255, 255, 255, 0.6);
}

.galeria-contador {
    color: white;
    text-align: center;
    margin-top: 15px;
}
```

---

## 💡 Cómo usar estos ejemplos

1. **Copia el código** completo (HTML, CSS y/o JavaScript)
2. **Pégalo en tu archivo** correspondiente
3. **Personaliza** los IDs, clases y textos según necesites
4. **Prueba** en tu navegador

## 🔗 Referencias útiles

- Bootstrap 5 Components: https://getbootstrap.com/docs
- CSS Tricks: https://css-tricks.com
- JavaScript.info: https://javascript.info

---

**¿Necesitas más ejemplos?** Revisa el archivo principal `portafolio-cv-tutorial.html` para ver más implementaciones.
