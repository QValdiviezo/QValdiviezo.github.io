/* ==================== CONFIGURACIÓN INICIAL ==================== */
// TODO: REEMPLAZA ESTE NÚMERO CON TU NÚMERO DE WHATSAPP
// Formato: código de país + número (ejemplo: 51945123456 para Perú)
const WHATSAPP_NUMBER = '51950874998'; // Cambia este número por el tuyo

/* ==================== ELEMENTOS DEL DOM ==================== */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Modal y Formulario
const citaModal = document.getElementById('citaModal');
const closeModal = document.getElementById('closeModal');
const citaForm = document.getElementById('citaForm');
const btnCitaHeader = document.getElementById('btnCitaHeader');
const btnCitaMain = document.getElementById('btnCitaMain');
const btnCitaPrimeraVisita = document.getElementById('btnCitaPrimeraVisita');
const darkModeToggle = document.getElementById('darkModeToggle');

/* ==================== NAVEGACIÓN ENTRE SECCIONES ==================== */
/**
 * Cambia la sección activa al hacer clic en un enlace de navegación
 */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Evita el comportamiento por defecto si es un botón
        if (this.tagName === 'BUTTON') {
            e.preventDefault();
        }

        // Obtén la sección a mostrar
        const sectionId = this.getAttribute('data-section');
        
        // Si es un botón de cita, abre el modal en lugar de cambiar sección
        if (this.classList.contains('btn-cita-header')) {
            openModal();
            closeMenuMobile();
            return;
        }

        // Cambia la sección activa
        if (sectionId) {
            changeSection(sectionId);
            closeMenuMobile();
        }
    });
});

/**
 * Cambia la sección activa
 * @param {string} sectionId - El ID de la sección a mostrar
 */
function changeSection(sectionId) {
    // Desactiva todas las secciones
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Activa la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Desplaza al top de la página con animación suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/* ==================== MENÚ MÓVIL ==================== */
/**
 * Abre/cierra el menú de navegación en dispositivos móviles
 */
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

/**
 * Cierra el menú móvil
 */
function closeMenuMobile() {
    navMenu.classList.remove('active');
}

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
    
    if (!isClickInside) {
        closeMenuMobile();
    }
});

/* ==================== MODAL FORMULARIO ==================== */
/**
 * Abre el modal del formulario de cita
 */
function openModal() {
    citaModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Previene scroll en el fondo
}

/**
 * Cierra el modal del formulario de cita
 */
function closeModalFunction() {
    citaModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaura el scroll
    citaForm.reset(); // Limpia el formulario
}

// Event listeners para cerrar el modal
closeModal.addEventListener('click', closeModalFunction);

citaModal.addEventListener('click', function(event) {
    // Cierra el modal si se hace clic en el fondo (fuera del modal-content)
    if (event.target === citaModal) {
        closeModalFunction();
    }
});

// Abre el modal cuando se hace clic en los botones de cita
btnCitaHeader.addEventListener('click', openModal);
btnCitaMain.addEventListener('click', openModal);
btnCitaPrimeraVisita.addEventListener('click', openModal);

/* ==================== FORMULARIO Y WHATSAPP ==================== */
/**
 * Maneja el envío del formulario de cita
 * Recolecta los datos y redirige a WhatsApp con un mensaje preformateado
 */
citaForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Recolecta los datos del formulario
    const nombres = document.getElementById('nombres').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const provincia = document.getElementById('provincia').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación básica (aunque el formulario ya tiene 'required')
    if (!nombres || !email || !telefono || !dni || !provincia) {
        alert('Por favor completa todos los campos requeridos.');
        return;
    }

    // Construye el mensaje para WhatsApp
    // Usa %0A para saltos de línea y %0D para espacios
    const whatsappMessage = encodeURIComponent(
        `*SOLICITUD DE CITA MÉDICA*\n\n` +
        `📋 *Datos Personales:*\n` +
        `Nombre: ${nombres}\n` +
        `Email: ${email}\n` +
        `Teléfono: ${telefono}\n` +
        `DNI: ${dni}\n` +
        `Provincia: ${provincia}\n\n` +
        `${mensaje ? `📝 *Mensaje Adicional:*\n${mensaje}\n\n` : ''}` +
        `Quedo a la espera de su respuesta para confirmar la disponibilidad y agendar mi cita. ¡Gracias!`
    );

    // URL de WhatsApp con el número y el mensaje
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Abre WhatsApp en una nueva ventana/pestaña
    window.open(whatsappURL, '_blank');

    // Cierra el modal
    closeModalFunction();

    // Muestra un mensaje de confirmación
    alert('¡Gracias! Tu solicitud ha sido enviada. Se abrirá WhatsApp para completar la conversación.');
});

/* ==================== INICIALIZACIÓN ==================== */
/**
 * Asegura que la sección "Home" esté activa al cargar la página
 */
document.addEventListener('DOMContentLoaded', function() {
    // Activa la sección home por defecto
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }

    console.log('✅ Centro de Terapia Física Valdiviezo - Sitio web iniciado correctamente');
    console.log('📞 Número de WhatsApp configurado:', WHATSAPP_NUMBER);

    const savedMode = localStorage.getItem('valdiviezoDarkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const mode = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
            localStorage.setItem('valdiviezoDarkMode', mode);
        });
    }
});

/* ==================== FUNCIONES ADICIONALES ==================== */
/**
 * Cierra el modal cuando se presiona la tecla Escape
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && citaModal.classList.contains('active')) {
        closeModalFunction();
    }
});

/**
 * Previene que el cuerpo haga scroll cuando el modal está abierto
 */
function preventScroll(e) {
    e.preventDefault();
}

// Nota: El prevent-scroll ya se maneja en las funciones openModal y closeModalFunction
// usando document.body.style.overflow

/* ==================== LOGGING ==================== */
/**
 * Log de debugging - Descomenta si necesitas ver los eventos en la consola
 */
// navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         console.log('Navegando a:', this.getAttribute('data-section'));
//     });
// });
