// Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.md\\:hidden');
        const mobileMenu = document.querySelector('.md\\:flex');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            mobileMenu.classList.toggle('flex-col');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('w-full');
            mobileMenu.classList.toggle('bg-white');
            mobileMenu.classList.toggle('p-4');
            mobileMenu.classList.toggle('space-y-4');
            mobileMenu.classList.toggle('space-x-8');
            mobileMenu.classList.toggle('shadow-md');
        });