// ==================== CONFIGURAÇÃO WHATSAPP ====================
const WHATSAPP_CONFIG = {
    numero: '11941406624', // ⭐ SEU NÚMERO COM DDD (sem +55)
    enabled: true // Deixe true
};

// ==================== NAVEGAÇÃO (SEM ALTERAÇÕES) ====================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (navbar && hamburger && navMenu) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Dropdown mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
}

// ==================== ANIMAÇÕES SCROLL ====================
try {
    const elementosAnimados = document.querySelectorAll('[data-aos]');
    if (elementosAnimados.length > 0) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, observerOptions);

        elementosAnimados.forEach(el => {
            observer.observe(el);
        });
    }
} catch (error) {
    console.error('Erro animações:', error);
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== EFEITO DIGITAR ====================
const slogan = document.querySelector('.hero-slogan');
if (slogan) {
    const text = slogan.textContent;
    slogan.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            slogan.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    };
    setTimeout(typeWriter, 1500);
}

// ==================== FORMULÁRIO WHATSAPP (FUNÇÃO SIMPLES) ====================
const formContato = document.getElementById('formContato');

if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Capturar valores
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        // Validar
        if (!nome || !email || !telefone || !mensagem) {
            alert('❌ Preencha todos os campos!');
            return;
        }
        
        // Validar telefone
        const telefoneLimpo = telefone.replace(/\D/g, '');
        if (telefoneLimpo.length < 10) {
            alert('📱 WhatsApp inválido! Use DDD + número.');
            return;
        }
        
        // Botão loading
        const btn = formContato.querySelector('.btn-primary');
        const originalText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        // Formatar mensagem
        const mensagemWhatsApp = `🚀 *DEVTECH*

*Nome:* ${nome}
*Email:* ${email}
*WhatsApp:* ${telefone}

*Mensagem:*
${mensagem}

*Quero orçamento personalizado!*`.trim();
        
        // Gerar link
        const linkWhatsApp = `https://wa.me/${WHATSAPP_CONFIG.numero}?text=${encodeURIComponent(mensagemWhatsApp)}`;
        
        console.log('📱 Abrindo:', linkWhatsApp);
        
        // Abrir WhatsApp
        window.open(linkWhatsApp, '_blank');
        
        // Feedback
        setTimeout(() => {
            alert('✅ *SUCESSO!*\n\n📲 WhatsApp aberto com sua mensagem\n👤 Nossa equipe vai responder em até 24h');
            formContato.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1000);
    });
}