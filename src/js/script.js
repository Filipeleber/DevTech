// ==================== INTRO CARD FLIP (PARA INDEX.HTML) ====================
const introCard = document.getElementById('introCard');

if (introCard) {
    console.log('✅ Intro card (index.html) encontrado.');
    
    // Adiciona a classe 'is-flipped' no clique/toque
    introCard.addEventListener('click', (e) => {
        // Apenas vira o card se o clique não for no botão "Acessar Site"
        if (!e.target.classList.contains('enter-btn')) {
            console.log('💳 Card tocado.');
            introCard.classList.toggle('is-flipped');
        }
    });

} else {
    // Isso é normal, vai aparecer em todas as páginas exceto na index.html
    console.log('ℹ️ Intro card (index.html) não encontrado nesta página.');
}
// =========================================================================

// O RESTO DO SEU SCRIPT.JS COMEÇA AQUI...
console.log('📱 DevTech Script - Menu Mobile e Funcionalidades');
// ...etc...

// ==================== MENU MOBILE ====================
const hamburger = document.getElementById('hamburger');
// CORRIGIDO: Seleciona a classe correta
const navbarMenuWrapper = document.querySelector('.navbar-menu-wrapper');

// CORRIGIDO: Checa a variável correta ('navbarMenuWrapper')
if (hamburger && navbarMenuWrapper) {
    console.log('✅ Elementos do menu encontrados');
    
    // Toggle menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        // CORRIGIDO: Usa a variável correta
        navbarMenuWrapper.classList.toggle('active');
        console.log('🍔 Menu toggle:', hamburger.classList.contains('active'));
    });
    
   // Fechar menu ao clicar em link
    // CORRIGIDO: Adicionado :not(.dropdown-toggle) para NÃO fechar o menu ao clicar no dropdown
    document.querySelectorAll('.navbar-menu-wrapper .nav-menu a:not(.dropdown-toggle)').forEach(link => {
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
        // CORRIGIDO: Checa a variável correta
        if (window.innerWidth <= 768 && navbarMenuWrapper.classList.contains('active')) {
            // CORRIGIDO: Usa a variável correta
            const clicouDentro = navbarMenuWrapper.contains(e.target);
            const clicouHamburger = hamburger.contains(e.target);
            
            if (!clicouDentro && !clicouHamburger) {
                hamburger.classList.remove('active');
                // CORRIGIDO: Usa a variável correta
                navbarMenuWrapper.classList.remove('active');
            }
        }
    });
    
} else {
    // CORRIGIDO: Mensagem de erro mais clara
    console.error('❌ Menu mobile não encontrado. Verifique o ID "hamburger" e a classe ".navbar-menu-wrapper"');
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

