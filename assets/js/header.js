document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const progressBar = document.querySelector('.progress-bar');

    // --- SCROLL BAR ---
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // --- CONTRASTE ---
    document.querySelector('[aria-label="Mudar Contraste"]').addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('alta-contraste');
    });

    // --- MODO CLARO ---
    document.querySelector('[aria-label="Modo Claro"]').addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('modo-escuro');
        body.classList.add('modo-claro');
    });

    // --- MODO ESCURO ---
    document.querySelector('[aria-label="Modo Escuro"]').addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('modo-claro');
        body.classList.add('modo-escuro');
    });

    // --- TEXTO (A+/A-) ---
    let fontScale = 1;
    const changeFont = (factor) => {
        fontScale = Math.max(0.8, Math.min(1.5, fontScale + factor));
        body.style.fontSize = fontScale + 'em';
    };
    document.querySelector('[aria-label="Aumentar Fonte"]').addEventListener('click', (e) => {
        e.preventDefault();
        changeFont(0.1);
    });
    document.querySelector('[aria-label="Diminuir Fonte"]').addEventListener('click', (e) => {
        e.preventDefault();
        changeFont(-0.1);
    });

    // --- LIBRAS ---
    document.querySelector('[aria-label="Ativar Libras"]').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Libras ativado! (integre o VLibras aqui se desejar)');
    });

    // --- BUSCA ---
    document.querySelector('[aria-label="Buscar"]').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Abrir busca...');
    });
});