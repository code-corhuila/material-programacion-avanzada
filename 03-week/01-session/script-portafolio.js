/* ========================================
   SCRIPT JAVASCRIPT AVANZADO
   ARCHIVO: script-portafolio.js
   
   Este archivo contiene funcionalidades
   JavaScript modularizadas y reutilizables.
   
   COMO USAR:
   <script src="script-portafolio.js"></script>
   
   ======================================== */

// ========================================
// MÓDULO: GESTIÓN DE LA NAVEGACIÓN
// ========================================

const NavegacionManager = (() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Inicializar
    const init = () => {
        agregarEventoScroll();
        agregarEventoClic();
    };

    // Evento de scroll para actualizar navegación activa
    const agregarEventoScroll = () => {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    };

    // Cerrar menú móvil al hacer clic en un link
    const agregarEventoClic = () => {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    };

    return { init };
})();

// ========================================
// MÓDULO: GESTIÓN DEL BOTÓN VOLVER ARRIBA
// ========================================

const VolverArribaManager = (() => {
    const backToTopBtn = document.getElementById('backToTop');
    const scrollThreshold = 300; // Píxeles antes de mostrar el botón

    // Inicializar
    const init = () => {
        if (!backToTopBtn) return;
        agregarEventoScroll();
        agregarEventoClic();
    };

    // Mostrar/ocultar botón al scroll
    const agregarEventoScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > scrollThreshold) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
    };

    // Volver al inicio al hacer clic
    const agregarEventoClic = () => {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    return { init };
})();

// ========================================
// MÓDULO: ANIMACIÓN DE BARRAS DE HABILIDADES
// ========================================

const HabilidadesManager = (() => {
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    // Inicializar
    const init = () => {
        if (skillProgressBars.length === 0) return;

        // Establecer ancho inicial en 0
        skillProgressBars.forEach(bar => {
            bar.style.width = '0%';
        });

        // Obsevrar cuando entran en viewport
        observarBarras();
    };

    // Observer para animar barras cuando entran en view
    const observarBarras = () => {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const targetWidth = progressBar.style.getPropertyValue('--target') || '0';
                    
                    animarBarra(progressBar, parseFloat(targetWidth));
                    observer.unobserve(progressBar);
                }
            });
        }, observerOptions);

        skillProgressBars.forEach(bar => observer.observe(bar));
    };

    // Animar una barra
    const animarBarra = (element, targetWidth) => {
        let currentWidth = 0;
        const increment = targetWidth / 50;
        
        const interval = setInterval(() => {
            currentWidth += increment;
            if (currentWidth >= targetWidth) {
                currentWidth = targetWidth;
                clearInterval(interval);
            }
            element.style.width = currentWidth + '%';
        }, 20);
    };

    return { init };
})();

// ========================================
// MÓDULO: GESTIÓN DEL FORMULARIO DE CONTACTO
// ========================================

const FormularioContactoManager = (() => {
    const contactForm = document.getElementById('contactForm');
    const campoNombre = document.getElementById('name');
    const campoEmail = document.getElementById('email');
    const campoMensaje = document.getElementById('message');

    // Inicializar
    const init = () => {
        if (!contactForm) return;
        agregarEventoEnvio();
        agregarValidacionEnTiempoReal();
    };

    // Evento de envío del formulario
    const agregarEventoEnvio = () => {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validar formulario
            if (!validarFormulario()) {
                return;
            }

            // Enviar formulario
            enviarFormulario();
        });
    };

    // Validación en tiempo real
    const agregarValidacionEnTiempoReal = () => {
        campoEmail.addEventListener('blur', () => {
            validarEmail(campoEmail.value);
        });

        campoNombre.addEventListener('blur', () => {
            validarNombre(campoNombre.value);
        });
    };

    // Validar el formulario completo
    const validarFormulario = () => {
        const nombre = campoNombre.value.trim();
        const email = campoEmail.value.trim();
        const mensaje = campoMensaje.value.trim();

        // Validar que no estén vacíos
        if (!nombre || !email || !mensaje) {
            mostrarAlerta('Por favor completa todos los campos', 'warning');
            return false;
        }

        // Validar nombre
        if (!validarNombre(nombre)) {
            mostrarAlerta('El nombre debe tener al menos 3 caracteres', 'warning');
            return false;
        }

        // Validar email
        if (!validarEmail(email)) {
            mostrarAlerta('Por favor ingresa un email válido', 'warning');
            return false;
        }

        // Validar mensaje
        if (mensaje.length < 10) {
            mostrarAlerta('El mensaje debe tener al menos 10 caracteres', 'warning');
            return false;
        }

        return true;
    };

    // Validar nombre
    const validarNombre = (nombre) => {
        return nombre.length >= 3;
    };

    // Validar email
    const validarEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Enviar el formulario
    const enviarFormulario = () => {
        const btnSubmit = contactForm.querySelector('.btn-submit');
        const textOriginal = btnSubmit.textContent;
        
        btnSubmit.textContent = 'Enviando...';
        btnSubmit.disabled = true;

        // Simular envío (reemplazar con peticion real)
        setTimeout(() => {
            mostrarAlerta('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
            contactForm.reset();
            btnSubmit.textContent = textOriginal;
            btnSubmit.disabled = false;
        }, 1500);
    };

    return { init };
})();

// ========================================
// MÓDULO: EFECTOS DE FADE-IN AL SCROLL
// ========================================

const FadeInManager = (() => {
    const fadeElements = document.querySelectorAll('.fade-in-up');

    // Inicializar
    const init = () => {
        if (fadeElements.length === 0) return;

        // Establecer opacidad inicial
        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.8s ease';
        });

        // Observar elementos
        observarElementos();
    };

    // Observer para animar elementos al entrar en view
    const observarElementos = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));
    };

    return { init };
})();

// ========================================
// MÓDULO: NOTIFICACIONES Y ALERTAS
// ========================================

const AlertasManager = (() => {
    // Mostrar alerta personalizada
    const mostrar = (mensaje, tipo = 'info') => {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 5000;
            min-width: 300px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        `;
        alertDiv.textContent = mensaje;
        alertDiv.innerHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';

        document.body.appendChild(alertDiv);

        // Remover después de 4 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 4000);
    };

    return { mostrar };
})();

// Función global para mostrar alertas
window.mostrarAlerta = (mensaje, tipo = 'info') => {
    AlertasManager.mostrar(mensaje, tipo);
};

// ========================================
// MÓDULO: UTILIDADES
// ========================================

const Utilidades = (() => {
    // Debounce para funciones
    const debounce = (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Throttle para funciones
    const throttle = (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // Obtener elemento por ID
    const getElementById = (id) => document.getElementById(id);

    // Obtener elementos por clase
    const getElementByClass = (className) => document.querySelectorAll(`.${className}`);

    // Agregar evento a múltiples elementos
    const agregarEventoAMultiples = (elementos, evento, callback) => {
        elementos.forEach(elemento => {
            elemento.addEventListener(evento, callback);
        });
    };

    return {
        debounce,
        throttle,
        getElementById,
        getElementByClass,
        agregarEventoAMultiples
    };
})();

// ========================================
// MÓDULO: INFORMACIÓN Y LOGGING
// ========================================

const Info = (() => {
    const mostrarInfo = () => {
        console.log('%cBienvenido a mi portafolio', 
            'font-size: 20px; color: #3498db; font-weight: bold;');
        console.log('%c¿Te interesa trabajar juntos? Ponte en contacto conmigo', 
            'font-size: 14px; color: #e74c3c;');
        console.log('%cPortafolio creado con Bootstrap 5, CSS3 y JavaScript', 
            'font-size: 12px; color: #2c3e50;');
    };

    return { mostrarInfo };
})();

// ========================================
// MÓDULO: MODO OSCURO (OPCIONAL)
// ========================================

const ModoDarkManager = (() => {
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Inicializar
    const init = () => {
        if (!toggleBtn) return;

        // Cargar preferencia guardada
        const modoDark = localStorage.getItem('modoDark') === 'true';
        if (modoDark) {
            activarModoDark();
        }

        agregarEventoToggle();
    };

    // Agregar evento al botón toggle
    const agregarEventoToggle = () => {
        toggleBtn.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'dark') {
                desactivarModoDark();
            } else {
                activarModoDark();
            }
        });
    };

    // Activar modo oscuro
    const activarModoDark = () => {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('modoDark', 'true');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    };

    // Desactivar modo oscuro
    const desactivarModoDark = () => {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('modoDark', 'false');
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    };

    return { init };
})();

// ========================================
// INICIALIZACIÓN PRINCIPAL
// ========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando portafolio...');

    // Inicializar todos los módulos
    NavegacionManager.init();
    VolverArribaManager.init();
    HabilidadesManager.init();
    FormularioContactoManager.init();
    FadeInManager.init();
    ModoDarkManager.init();
    
    // Mostrar información
    Info.mostrarInfo();

    console.log('Portafolio inicializado correctamente ✓');
});

// ========================================
// EVENT LISTENERS GLOBALES
// ========================================

// Detectar cambios en el tamaño de la ventana
window.addEventListener('resize', Utilidades.debounce(() => {
    console.log('Ventana redimensionada');
    // Aquí puedes agregar lógica para ajustar elementos responsivos
}, 250));

// Detectar cambios de conectividad
window.addEventListener('online', () => {
    mostrarAlerta('Conexión restaurada', 'success');
});

window.addEventListener('offline', () => {
    mostrarAlerta('Sin conexión a internet', 'warning');
});

// ========================================
// FUNCIONES AUXILIARES EXPORTADAS
// ========================================

// Objeto global con funciones útiles
window.PortafolioAPI = {
    mostrarAlerta: (mensaje, tipo) => AlertasManager.mostrar(mensaje, tipo),
    desactivarFormulario: () => {
        const form = document.getElementById('contactForm');
        if (form) form.disabled = true;
    },
    habilitarFormulario: () => {
        const form = document.getElementById('contactForm');
        if (form) form.disabled = false;
    },
    scroll: {
        alInicio: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
        aElemento: (id) => {
            const elemento = document.getElementById(id);
            if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
        }
    },
    utilidades: Utilidades
};

// Hacer API disponible globalmente
console.log('API disponible en window.PortafolioAPI');
