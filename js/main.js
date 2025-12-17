// ==========================================================================
// MLIK - Société Immobilière - JavaScript Principal
// ==========================================================================

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // Navigation
    // ==========================================================================
    
    // Menu burger
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Fermer le menu lors du clic sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ==========================================================================
    // Filtres de projets
    // ==========================================================================
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Retirer la classe active de tous les boutons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filtrer les projets
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        const categories = card.getAttribute('data-category');
                        if (categories && categories.includes(filter)) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    
    // ==========================================================================
    // Formulaire de contact
    // ==========================================================================
    
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulation d'envoi (à remplacer par un vrai envoi)
            console.log('Données du formulaire:', data);
            
            // Afficher le message de succès
            contactForm.style.display = 'none';
            formSuccess.classList.add('show');
            
            // Réinitialiser le formulaire après 5 secondes
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'flex';
                formSuccess.classList.remove('show');
            }, 5000);
        });
    }
    
    // ==========================================================================
    // Formulaire newsletter
    // ==========================================================================
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simulation d'inscription (à remplacer par un vrai envoi)
            console.log('Inscription newsletter:', email);
            
            // Afficher un message de confirmation
            alert('Merci de votre inscription ! Vous recevrez bientôt nos actualités.');
            
            // Réinitialiser le formulaire
            newsletterForm.reset();
        });
    }
    
    // ==========================================================================
    // Smooth Scroll pour les ancres
    // ==========================================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // 80px pour la navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================================================
    // Animation au scroll (Intersection Observer)
    // ==========================================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments avec animation
    const animatedElements = document.querySelectorAll('.project-card, .service-card, .stat-card, .value-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ==========================================================================
    // Scroll Indicator (Hero Section)
    // ==========================================================================
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // ==========================================================================
    // Lazy Loading Images
    // ==========================================================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ==========================================================================
    // Utilitaires
    // ==========================================================================
    
    // Formater les nombres avec séparateur de milliers
    window.formatNumber = function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };
    
    // Animer un nombre de 0 à une valeur donnée
    window.animateNumber = function(element, targetValue, duration = 1000) {
        const startValue = 0;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);
            element.textContent = formatNumber(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = formatNumber(targetValue);
            }
        }
        
        requestAnimationFrame(update);
    };
    
    // ==========================================================================
    // Log de bienvenue
    // ==========================================================================
    
    console.log('%cMLIK Société Immobilière', 'font-size: 20px; font-weight: bold; color: #1a4d8f;');
    console.log('%cVotre partenaire immobilier de confiance', 'font-size: 14px; color: #666;');
    console.log('📞 Contact: (+216) 71 264 260');
    console.log('🌐 Site: immomlik.com');
    
    // ==========================================================================
    // Floor Plans Interactive (RDC, 1er étage, 2ème étage)
    // ==========================================================================
    function initFloorPlans() {
        // Data structure for blocs per floor
    
        const floorsData = {
            rdc: [
                { nom: "Bloc A", apart: "A0-1", type: "S+3", etage: "RDC", surface: "164,07", jardin: "44,83", img1: "assets/projet meridien/appartement/rdc/A0-1.png", img2: "assets/projet meridien/appartement/rdc/A0-1-1.png" },
                { nom: "Bloc A", apart: "A0-2", type: "S+3", etage: "RDC", surface: "161,55", jardin: "120,80", img1: "assets/projet meridien/appartement/rdc/A0-2.png", img2: "assets/projet meridien/appartement/rdc/A0-2-2.png" },
                { nom: "Bloc A", apart: "A0-3", type: "S+3", etage: "RDC", surface: "183,11", jardin: "65,20", img1: "assets/projet meridien/appartement/rdc/A0-3.png", img2: "assets/projet meridien/appartement/rdc/A0-3-1.png" },
                { nom: "Bloc A", apart: "Logement 1", type: "S+4", etage: "RDC", surface: "202,25", jardin: "110,98", img1: "assets/projet meridien/appartement/rdc/logement-1.png", img2: "assets/projet meridien/appartement/rdc/logement-1-1.png" },
                { nom: "Bloc B", apart: "B0-1", type: "S+3", etage: "RDC", surface: "164.07", jardin: "46,83", img1: "assets/projet meridien/appartement/rdc/B0-1.png", img2: "assets/projet meridien/appartement/rdc/B0-1-1.png" },
                { nom: "Bloc B", apart: "B0-2", type: "S+3", etage: "RDC", surface: "161,55", jardin: "132,45", img1: "assets/projet meridien/appartement/rdc/B0-2.png", img2: "assets/projet meridien/appartement/rdc/B0-2-2.png" },
                { nom: "Bloc B", apart: "B0-3", type: "S+3", etage: "RDC", surface: "183,11", jardin: "70,93", img1: "assets/projet meridien/appartement/rdc/B0-3.png", img2: "assets/projet meridien/appartement/rdc/B0-3-3.png" },
                { nom: "Bloc B", apart: "Logement 2", type: "S+4", etage: "RDC", surface: "205,67", jardin: "81,00", img1: "assets/projet meridien/appartement/rdc/logement-2.png", img2: "assets/projet meridien/appartement/rdc/logement-2-2.png" }
            ],
            etage1: [
                { nom: "Bloc A", apart: "A1-1", type: "S+3", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/A1-1.png", img2: "assets/projet meridien/appartement/etage1/A1-1-1.png" },
                { nom: "Bloc A", apart: "A1-2", type: "S+2", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/A1-2.png", img2: "assets/projet meridien/appartement/etage1/A1-2-1.png" },
                { nom: "Bloc A", apart: "A1-3", type: "S+2", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/A1-3.png", img2: "assets/projet meridien/appartement/etage1/A1-3-1.png" },
                { nom: "Bloc A", apart: "A1-4", type: "S+2", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/A1-4.png", img2: "assets/projet meridien/appartement/etage1/A1-4-1.png" },
                { nom: "Bloc A", apart: "A1-5", type: "S+3", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/A1-5.png", img2: "assets/projet meridien/appartement/etage1/A1-5-1.png" },
                { nom: "Bloc A", apart: "A1-6", type: "S+1", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/A1-6.png", img2: "assets/projet meridien/appartement/etage1/A1-6-1.png" },
                { nom: "Bloc B", apart: "B1-1", type: "S+3", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/B1-1.png", img2: "assets/projet meridien/appartement/etage1/B1-1-1.png" },
                { nom: "Bloc B", apart: "B1-2", type: "S+2", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/B1-2.png", img2: "assets/projet meridien/appartement/etage1/B1-2-1.png" },
                { nom: "Bloc B", apart: "B1-3", type: "S+2", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/B1-3.png", img2: "assets/projet meridien/appartement/etage1/B1-3-1.png" },
                { nom: "Bloc B", apart: "B1-4", type: "S+2", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/B1-4.png", img2: "assets/projet meridien/appartement/etage1/B1-4-1.png" },
                { nom: "Bloc B", apart: "B1-5", type: "S+3", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/B1-5.png", img2: "assets/projet meridien/appartement/etage1/B1-5-1.png" },
                { nom: "Bloc B", apart: "B1-6", type: "S+1", etage: "1er étage", surface: "164.07", jardin: "🚫", img1: "assets/projet meridien/appartement/etage1/B1-6.png", img2: "assets/projet meridien/appartement/etage1/B1-6-1.png" }
            ],
            etage2: [
              { nom: "Bloc A", apart: "A2-1", type: "S+3", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/A2-1.png", img2: "assets/projet meridien/appartement/etage2/A2-1-1.png" },
              { nom: "Bloc A", apart: "A2-2", type: "S+3", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/A2-2.png", img2: "assets/projet meridien/appartement/etage2/A2-2-1.png" },
              { nom: "Bloc A", apart: "A2-3", type: "S+1", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/A2-3.png", img2: "assets/projet meridien/appartement/etage2/A2-3-1.png" },
              { nom: "Bloc A", apart: "A2-4", type: "S+2", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/A2-4.png", img2: "assets/projet meridien/appartement/etage2/A2-4-1.png" },
              { nom: "Bloc A", apart: "A2-5", type: "S+3", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/A2-5.png", img2: "assets/projet meridien/appartement/etage2/A2-5-1.png" },
              { nom: "Bloc A", apart: "A2-6", type: "S+1", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/A2-6.png", img2: "assets/projet meridien/appartement/etage2/A2-6-1.png" },
              { nom: "Bloc B", apart: "B2-1", type: "S+3", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/B2-1.png", img2: "assets/projet meridien/appartement/etage2/B2-1-1.png" },
              { nom: "Bloc B", apart: "B2-2", type: "S+3", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/B2-2.png", img2: "assets/projet meridien/appartement/etage2/B2-2-1.png" },
              { nom: "Bloc B", apart: "B2-3", type: "S+1", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/B2-3.png", img2: "assets/projet meridien/appartement/etage2/B2-3-1.png" },
              { nom: "Bloc B", apart: "B2-4", type: "S+2", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/B2-4.png", img2: "assets/projet meridien/appartement/etage2/B2-4-1.png" },
              { nom: "Bloc B", apart: "B2-5", type: "S+2", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/B2-5.png", img2: "assets/projet meridien/appartement/etage2/B2-5-1.png" },
              { nom: "Bloc B", apart: "B2-6", type: "S+2", etage: "2em étage", surface: "164.07", jardin: "44.83", img1: "assets/projet meridien/appartement/etage2/B2-6.png", img2: "assets/projet meridien/appartement/etage2/B2-6-1.png" }
            ]
        };

        const tabBtns = document.querySelectorAll('.tab-btn');
        const blocList = document.getElementById('bloc-list');
        const planImage = document.getElementById('plan-image');
        const zoomImage = document.getElementById('zoom-image');
        const blocTitle = document.getElementById('bloc-title');
        const detailEtage = document.getElementById('detail-etage-value');
        const detailType = document.getElementById('detail-type-value');
        const detailSurface = document.getElementById('detail-surface-value');
        const detailJardin = document.getElementById('detail-jardin-value');
        let currentEtage = 'rdc';
        let currentBloc = null;

        // Function to render bloc list
        function renderBlocList(etage) {
            blocList.innerHTML = '';
            const blocs = floorsData[etage] || [];
            blocs.forEach((bloc, index) => {
                const item = document.createElement('div');
                item.className = 'bloc-item' + (index === 0 ? ' active' : '');
                item.innerHTML = `<div class="table-col">${bloc.nom}</div><div class="table-col">${bloc.apart}</div><div class="table-col">${bloc.type}</div>`;
                item.addEventListener('click', function() {
                    // Remove active from all items
                    document.querySelectorAll('.bloc-item').forEach(el => el.classList.remove('active'));
                    // Add active to clicked item
                    this.classList.add('active');
                    // Update current bloc
                    currentBloc = bloc;
                    // Display plan
                    planImage.src = bloc.img1;
                    zoomImage.src = bloc.img2;
                    blocTitle.textContent = bloc.apart + " - " + bloc.nom;
                    // Update details
                    detailEtage.textContent = bloc.etage;
                    detailType.textContent = bloc.type;
                    detailSurface.textContent = bloc.surface;
                    detailJardin.textContent = bloc.jardin;
                });
                blocList.appendChild(item);
            });
            // Auto-select first bloc
            if (blocs.length > 0) {
                currentBloc = blocs[0];
                planImage.src = blocs[0].img1;
                zoomImage.src = blocs[0].img2;
                blocTitle.textContent = blocs[0].apart + " - " + blocs[0].nom;
                // Update details for first bloc
                detailEtage.textContent = blocs[0].etage;
                detailType.textContent = blocs[0].type;
                detailSurface.textContent = blocs[0].surface;
                detailJardin.textContent = blocs[0].jardin;
                blocTitle.textContent = blocs[0].apart + " - " + blocs[0].nom;
            }
        }

        // Tab click handler
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active from all tabs
                tabBtns.forEach(el => el.classList.remove('active'));
                // Add active to clicked tab
                this.classList.add('active');
                // Update current floor
                currentEtage = this.getAttribute('data-etage');
                // Render bloc list
                renderBlocList(currentEtage);
            });
        });

        // Initialize with RDC
        renderBlocList('rdc');

        // Zoom functionality
        if (zoomImage) { 
            zoomImage.style.cursor = 'zoom-in';
            zoomImage.addEventListener('click', function() {
                if (this.style.cursor === 'zoom-in') {
                    this.style.transform = 'scale(2)';
                    this.style.cursor = 'zoom-out';
                } else {
                    this.style.transform = 'scale(1)';
                    this.style.cursor = 'zoom-in';
                }
            });
        }
    }

    // Initialize floor plans if the section exists
    if (document.getElementById('service-details')) {
        initFloorPlans();
    }
});

// ==========================================================================
// Fonction pour afficher/masquer les éléments avec animation
// ==========================================================================

function toggleElement(element, show = true) {
    if (show) {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 10);
    } else {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }
}

// ==========================================================================
// Gestion des erreurs globales
// ==========================================================================

window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.message);
});

// ==========================================================================
// Gallery Lightbox for Project Images
// ==========================================================================

function initGalleryLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    // Only initialize if lightbox exists
    if (!lightbox || !lightboxImage || galleryImages.length === 0) {
        return;
    }

    let currentImageIndex = 0;
    const imageArray = Array.from(galleryImages);

    // Open lightbox when clicking on gallery image
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            currentImageIndex = index;
            lightboxImage.src = this.src;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Navigate to previous image
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
        lightboxImage.src = imageArray[currentImageIndex].src;
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        lightboxImage.src = imageArray[currentImageIndex].src;
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initGalleryLightbox);

// ==========================================================================
// Performance monitoring (optionnel)
// ==========================================================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`⚡ Page chargée en ${loadTime}ms`);
    });
}