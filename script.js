 // Smooth scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        // Close mobile menu if open
                        document.querySelector('.nav-links').classList.remove('active');
                    }
                }
            });
        });

        // Mobile menu toggle
        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all fade-in sections
        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // Interactive skill bars animation on scroll
        const skillFills = document.querySelectorAll('.skill-fill');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fillBar 1.5s ease forwards';
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillFills.forEach(fill => {
            skillObserver.observe(fill);
        });

        // Parallax effect for hero background
        window.addEventListener('mousemove', (e) => {
            const hero = document.querySelector('.hero');
            const animations = document.querySelectorAll('.hero-bg-animation');
            
            if (hero && window.innerWidth > 768) {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                
                animations.forEach((anim, index) => {
                    anim.style.transform = `translate(${x * (index + 1) * 0.5}px, ${y * (index + 1) * 0.5}px)`;
                });
            }
        });

        // Add floating animation to planet cards
        const planetCards = document.querySelectorAll('.planet-card');
        planetCards.forEach((card, index) => {
            card.style.animation = `float ${4 + index * 0.5}s ease-in-out infinite`;
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Interactive feedback on card clicks
        document.querySelectorAll('.campaign-card, .brand-card, .vision-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Add float animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);

        // Responsive adjustments
        function handleResize() {
            if (window.innerWidth > 768) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        }

        window.addEventListener('resize', handleResize);

        // Add scroll animation for nav
        let lastScrollTop = 0;
        const nav = document.querySelector('nav');

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                nav.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.1)';
            } else {
                nav.style.boxShadow = 'none';
            }
            
            lastScrollTop = scrollTop;
        });

        // Initialize animations on load
        window.addEventListener('load', () => {
            document.querySelectorAll('.fade-in-section').forEach((section, index) => {
                setTimeout(() => {
                    if (section.getBoundingClientRect().top < window.innerHeight) {
                        section.classList.add('visible');
                    }
                }, index * 100);
            });
        });

        // Cursor glow effect (optional)
        document.addEventListener('mousemove', (e) => {
            const cursor = { x: e.clientX, y: e.clientY };
        });