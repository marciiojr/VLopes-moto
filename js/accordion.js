// Accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Abrir o terceiro item por padrão
    const defaultOpenItem = document.querySelector('.accordion-item[data-value="3"]');
    if (defaultOpenItem) {
        const content = defaultOpenItem.querySelector('.accordion-content');
        content.style.maxHeight = '200px';
        content.style.opacity = '1';
    }

    // Adicionar event listeners para todos os itens do accordion
    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');

        trigger.addEventListener('click', function () {
            const isOpen = this.getAttribute('data-state') === 'open';

            // Fechar todos os itens
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherTrigger = otherItem.querySelector('.accordion-trigger');
                    const otherContent = otherItem.querySelector('.accordion-content');

                    otherTrigger.setAttribute('data-state', 'closed');
                    otherContent.setAttribute('data-state', 'closed');
                    otherContent.style.maxHeight = '0';
                    otherContent.style.opacity = '0';
                }
            });

            // Alternar o estado do item clicado
            if (isOpen) {
                this.setAttribute('data-state', 'closed');
                content.setAttribute('data-state', 'closed');
                content.style.maxHeight = '0';
                content.style.opacity = '0';
            } else {
                this.setAttribute('data-state', 'open');
                content.setAttribute('data-state', 'open');
                content.style.maxHeight = '200px';
                content.style.opacity = '1';
            }
        });
    });
});