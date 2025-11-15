console.log('📱 DevTech Script - Menu Mobile e Funcionalidades');

// ==================== MENU MOBILE ====================
const hamburger = document.getElementById('hamburger');
// CORRIGIDO: Seleciona a classe que acabamos de adicionar no HTML
const navbarMenuWrapper = document.querySelector('.navbar-menu-wrapper');

// CORRIGIDO: 'navbarMenuWrapper' (com 'er' no final)
if (hamburger && navbarMenuWrapper) {
    console.log('✅ Elementos do menu encontrados');
    
    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        // CORRIGIDO: 'navbarMenuWrapper' (com 'er' no final)
        navbarMenuWrapper.classList.toggle('active');
        console.log('🍔 Menu toggle:', hamburger.classList.contains('active'));
    });
    
    // Fechar menu ao clicar em link
    // CORRIGIDO: Seleciona os links DENTRO do wrapper
    document.querySelectorAll('.navbar-menu-wrapper .nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                console.log('🔗 Fechando menu...');
                hamburger.classList.remove('active');
                // CORRIGIDO: 'navbarMenuWrapper' (com 'er' no final)
                navbarMenuWrapper.classList.remove('active');
            }
        });
    });
    
    // Dropdown toggle mobile
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = toggle.closest('.dropdown');
                dropdown.classList.toggle('active');
                console.log('📂 Dropdown:', dropdown.classList.contains('active'));
            }
        });
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && navbarMenuWrapper.classList.contains('active')) {
            // CORRIGIDO: 'navbarMenuWrapper' (com 'er' no final)
            const clicouDentro = navbarMenuWrapper.contains(e.target);
            const clicouHamburger = hamburger.contains(e.target);
            
            if (!clicouDentro && !clicouHamburger) {
                hamburger.classList.remove('active');
                // CORRIGIDO: 'navbarMenuWrapper' (com 'er' no final)
                navbarMenuWrapper.classList.remove('active');
            }
        }
    });
    
} else {
    // Agora este log de erro vai funcionar se algo estiver faltando
    console.error('❌ Menu mobile não encontrado. Verifique o ID "hamburger" e a classe ".navbar-menu-wrapper"');
}
    
    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navbarMenuWrapper.classList.toggle('active');
        console.log('🍔 Menu toggle:', hamburger.classList.contains('active'));
    });
    
    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                console.log('🔗 Fechando menu...');
                hamburger.classList.remove('active');
                navbarMenuWrapper.classList.remove('active');
            }
        });
    });
    
    // Dropdown toggle mobile
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = toggle.closest('.dropdown');
                dropdown.classList.toggle('active');
                console.log('📂 Dropdown:', dropdown.classList.contains('active'));
            }
        });
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && navbarMenuWrapper.classList.contains('active')) {
            const clicouDentro = navbarMenuWrapper.contains(e.target);
            const clicouHamburger = hamburger.contains(e.target);
            
            if (!clicouDentro && !clicouHamburger) {
                hamburger.classList.remove('active');
                navbarMenuWrapper.classList.remove('active');
            }
        }
    });
    
} else {
    console.error('❌ Menu mobile não encontrado');
}

// ==================== ANIMATIONS ====================
try {
    const elementos = document.querySelectorAll('[data-aos]');
    if (elementos.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('aos-animate'));
        }, { threshold: 0.2 });
        elementos.forEach(el => observer.observe(el));
    }
} catch (e) {}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==================== TYPEWRITER EFFECT ====================
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

// ==================== WHATSAPP FORM ====================
const formContato = document.getElementById('formContato');
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const telefone = document.getElementById('telefone')?.value || '';
        const mensagem = document.getElementById('mensagem')?.value || '';
        
        if (!nome || !email || !telefone || !mensagem) {
            alert('❌ Preencha todos os campos!');
            return;
        }
        
        const msg = `🚀 *NOVO LEAD DEVTECH*\n\n*Nome:* ${nome}\n*Email:* ${email}\n*WhatsApp:* ${telefone}\n\n*Mensagem:*\n${mensagem}\n\n*Quero orçamento!*`;
        window.open(`https://wa.me/11941406624?text=${encodeURIComponent(msg)}`, '_blank');
        
        alert('✅ WhatsApp aberto! Enviaremos seu orçamento em até 24h.');
        formContato.reset();
    });
}

console.log('✅ TUDO CARREGADO!');

