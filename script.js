
const WHATSAPP_NUMBER = '51950874998'; // Cambia este número por el tuyo

/* ==================== ELEMENTOS DEL DOM ==================== */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Modal y Formulario (pueden no existir en todas las páginas)
const citaModal = document.getElementById('citaModal');
const closeModal = document.getElementById('closeModal');
const citaForm = document.getElementById('citaForm');
const btnCitaHeader = document.getElementById('btnCitaHeader');
const btnCitaMain = document.getElementById('btnCitaMain');
const btnCitaPrimeraVisita = document.getElementById('btnCitaPrimeraVisita');
const darkModeToggle = document.getElementById('darkModeToggle');

/* ==================== UTILIDADES ==================== */
function closeMenuMobile() {
    if (navMenu) {
        navMenu.classList.remove('active');
        // Resetea los submenús al cerrar la navegación
        document.querySelectorAll('.nav-item.dropdown').forEach(item => {
            item.classList.remove('open');
        });
    }
}

function openModal() {
    if (!citaModal) return;
    citaModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunction() {
    if (!citaModal) return;
    citaModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (citaForm) citaForm.reset();
}

/* ==================== NAVEGACIÓN (comportamiento estándar + toggle móvil) ==================== */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // 1. Botones (abrir modal)
        if (this.tagName === 'BUTTON' || this.classList.contains('btn-cita-header')) {
            e.preventDefault();
            openModal();
            closeMenuMobile();
            return;
        }

        // 2. Enlace de dropdown ("Servicios")
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            // Alterna la clase 'open' en el <li> padre para abrir/cerrar el submenú
            this.parentElement.classList.toggle('open');
            return;
        }

        // 3. Enlaces normales (.html o anclas reales)
        if (navMenu && navMenu.classList.contains('active')) {
            closeMenuMobile();
        }
        // No aplicamos preventDefault para que navegue normalmente
    });
});

/* ==================== MENÚ MÓVIL ==================== */
if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInside = (navToggle && navToggle.contains(event.target)) || (navMenu && navMenu.contains(event.target));
        if (!isClickInside) closeMenuMobile();
    });
}

/* ==================== MODAL: listeners seguros */
if (closeModal) closeModal.addEventListener('click', closeModalFunction);
if (citaModal) {
    citaModal.addEventListener('click', function(event) {
        if (event.target === citaModal) closeModalFunction();
    });
}

if (btnCitaHeader) btnCitaHeader.addEventListener('click', openModal);
if (btnCitaMain) btnCitaMain.addEventListener('click', openModal);
if (btnCitaPrimeraVisita) btnCitaPrimeraVisita.addEventListener('click', openModal);

/* ==================== FORMULARIO Y WHATSAPP ==================== */
if (citaForm) {
    citaForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombresEl = document.getElementById('nombres');
        const emailEl = document.getElementById('email');
        const telefonoEl = document.getElementById('telefono');
        const dniEl = document.getElementById('dni');
        const provinciaEl = document.getElementById('provincia');
        const mensajeEl = document.getElementById('mensaje');

        const nombres = nombresEl ? nombresEl.value.trim() : '';
        const email = emailEl ? emailEl.value.trim() : '';
        const telefono = telefonoEl ? telefonoEl.value.trim() : '';
        const dni = dniEl ? dniEl.value.trim() : '';
        const provincia = provinciaEl ? provinciaEl.value.trim() : '';
        const mensaje = mensajeEl ? mensajeEl.value.trim() : '';

        if (!nombres || !email || !telefono || !dni || !provincia) {
            alert('Por favor completa todos los campos requeridos.');
            return;
        }

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

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
        closeModalFunction();
        alert('¡Gracias! Tu solicitud ha sido enviada. Se abrirá WhatsApp para completar la conversación.');
    });
}

/* ==================== INICIALIZACIÓN ==================== */
document.addEventListener('DOMContentLoaded', function() {
    const activeSection = document.querySelector('.section.active');
    if (!activeSection) {
        const homeSection = document.getElementById('home');
        if (homeSection) homeSection.classList.add('active');
    }

    console.log('✅ Centro de Terapia Física Valdiviezo - Sitio web iniciado correctamente');
    console.log('📞 Número de WhatsApp configurado:', WHATSAPP_NUMBER);

    const savedMode = localStorage.getItem('valdiviezoDarkMode');
    if (savedMode === 'enabled') document.body.classList.add('dark-mode');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const mode = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
            localStorage.setItem('valdiviezoDarkMode', mode);
        });
    }
});

/* ==================== FUNCIONES ADICIONALES ==================== */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && citaModal && citaModal.classList.contains('active')) {
        closeModalFunction();
    }
});

