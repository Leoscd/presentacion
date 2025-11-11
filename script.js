document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.module');

    modules.forEach(module => {
        const header = module.querySelector('.module-header');
        header.addEventListener('click', () => {
            const content = module.querySelector('.module-content');
            const icon = header.querySelector('.icon');
            const isActive = module.classList.contains('active');

            // Close all other modules
            modules.forEach(m => {
                if (m !== module && m.classList.contains('active')) {
                    m.classList.remove('active');
                    m.querySelector('.module-content').style.maxHeight = null;
                    m.querySelector('.icon').textContent = '+';
                }
            });

            // Open or close the clicked module
            if (isActive) {
                module.classList.remove('active');
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                module.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = '−';
            }
        });
    });
});
