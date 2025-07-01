const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    const el = mutation.target;

    if (el.classList.contains('dropdown-menu') && el.classList.contains('active')) {
      // Aguarda um pequeno tempo para garantir que os efeitos do clique terminem
      setTimeout(() => {
        // Salva o item ativo atual, se ainda existir
        const activeItem = el.querySelector('.dropdown-item.active');

        // Remove 'active' do dropdown-menu
        el.classList.remove('active');

        // Restaura o item ativo
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }, 0);
    }
  });
});

document.querySelectorAll('.dropdown-menu').forEach(menu => {
  observer.observe(menu, { attributes: true, attributeFilter: ['class'] });
});