document.addEventListener('DOMContentLoaded', () => {
            // --- Header Scroll Effect ---
            const header = document.querySelector('.main-header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Animate on Scroll ---
            const animatedSections = document.querySelectorAll('.animated-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            animatedSections.forEach(section => {
                observer.observe(section);
            });

            // --- FAQ Accordion ---
            const faqData = [
                { question: "Combien de temps faut-il pour créer mon site web ?", answer: "Notre processus standard prend 21 jours ouvrés, de la signature du contrat à la mise en ligne. Cela inclut 7 jours pour l'analyse et la stratégie, 10 jours pour le design et le développement, et 4 jours pour le lancement et la formation. Nous respectons scrupuleusement ces délais." },
                { question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?", answer: "Nous offrons une garantie satisfaction complète. Si le site ne répond pas à vos attentes, nous le retravaillons jusqu'à votre satisfaction totale, sans frais supplémentaires. Nous incluons également 3 révisions majeures dans notre processus standard." },
                { question: "Puis-je modifier mon site web moi-même après la livraison ?", answer: "Absolument ! Tous nos sites sont construits sur WordPress avec une interface intuitive. Nous vous formons personnellement à la gestion de votre site et vous fournissons une documentation complète. Vous pourrez modifier textes, images, et ajouter du contenu facilement." },
                { question: "Mon site sera-t-il optimisé pour Google et les moteurs de recherche ?", answer: "Oui, l'optimisation SEO est incluse dans toutes nos formules. Nous optimisons la structure, les contenus, les images, et configurons Google My Business. Nous nous assurons que votre site soit trouvable par vos clients locaux sur les requêtes pertinentes." },
                { question: "Qu'est-ce qui est inclus dans la maintenance de mon site ?", answer: "La maintenance inclut : mises à jour de sécurité, sauvegardes automatiques quotidiennes, monitoring de performance, corrections de bugs mineurs, support technique prioritaire, et optimisations continues. Nous nous occupons de tout l'aspect technique." },
                { question: "Puis-je intégrer un système de réservation en ligne ?", answer: "Oui, c'est même recommandé ! Nous intégrons des systèmes de réservation adaptés aux professionnels de santé, avec gestion des créneaux, paiements en ligne sécurisés, rappels automatiques, et synchronisation avec votre agenda personnel." },
                { question: "Mon site sera-t-il conforme au RGPD ?", answer: "Absolument. Tous nos sites respectent scrupuleusement le RGPD. Nous intégrons bannières de cookies, politique de confidentialité adaptée, formulaires conformes, et toutes les mesures nécessaires pour protéger les données de vos patients." },
                { question: "Proposez-vous des formations pour utiliser mon site ?", answer: "Oui ! Nous incluons 3h de formation personnalisée réparties sur plusieurs sessions. Vous apprendrez à gérer vos contenus, analyser vos statistiques, optimiser votre référencement, et utiliser tous les outils intégrés à votre site." },
                { question: "Que se passe-t-il si mon site tombe en panne ?", answer: "Nos sites sont hébergés sur des serveurs premium avec 99.9% de disponibilité. En cas de problème, notre équipe technique intervient en urgence. Nous vous restituons un site fonctionnel sous 4h maximum, et sous 1h en cas d'urgence absolue." },
                { question: "Puis-je voir des exemples de sites que vous avez créés ?", answer: "Bien sûr ! Nous avons un portfolio complet de nos réalisations que nous pouvons vous présenter lors de notre premier échange. Nous respectons la confidentialité de nos clients, mais beaucoup acceptent de témoigner de leur expérience." }
            ];

            const accordionContainer = document.querySelector('.faq-accordion');
            if (accordionContainer) {
                faqData.forEach(item => {
                    const faqItem = document.createElement('div');
                    faqItem.className = 'faq-item';
                    faqItem.innerHTML = `
                        <button class="faq-trigger">
                            <span>${item.question}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="m6 9 6 6 6-6"></path></svg>
                        </button>
                        <div class="faq-content">
                            <p>${item.answer}</p>
                        </div>
                    `;
                    accordionContainer.appendChild(faqItem);
                });

                accordionContainer.addEventListener('click', (e) => {
                    const trigger = e.target.closest('.faq-trigger');
                    if (!trigger) return;

                    const item = trigger.parentElement;
                    const wasOpen = item.classList.contains('open');

                    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

                    if (!wasOpen) {
                        item.classList.add('open');
                    }
                });
            }
            
            // --- Dynamic Portfolio Data ---
            const portfolioData = [
                {
                    category: "Psychologue clinicienne",
                    title: "Dr. Sarah Therapie",
                    description: "Site web moderne avec système de réservation intégré et blog thérapeutique.",
                    metric: "+180% de clients en 6 mois",
                    tags: ["Réservation en ligne", "Blog intégré", "SEO optimisé"],
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                },
                {
                    category: "Coach de vie",
                    title: "Equilibre Coaching",
                    description: "Plateforme complète avec espace client, ressources téléchargeables et testimonials.",
                    metric: "Agenda complet en 3 semaines",
                    tags: ["Espace client", "E-commerce", "Mobile-first"],
                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                },
                {
                    category: "Thérapeute holistique",
                    title: "Harmonie Holistique",
                    description: "Site vitrine élégant avec présentation des soins et galerie de témoignages.",
                    metric: "+300% de visibilité locale",
                    tags: ["Design sur mesure", "Galerie", "Google My Business"],
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
                },
                {
                    category: "Naturopathe",
                    title: "Naturo Plus",
                    description: "Site e-commerce avec boutique de compléments et consultations en ligne.",
                    metric: "ROI de 400% en 8 mois",
                    tags: ["E-commerce", "Paiement en ligne", "Livraison"],
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                },
                {
                    category: "Sophrologue",
                    title: "Sophro Zen",
                    description: "Site minimaliste avec méditations guidées et programme d'accompagnement.",
                    metric: "+150% de sessions réservées",
                    tags: ["Audio intégré", "Programmes", "Paiement récurrent"],
                    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
                },
                {
                    category: "Hypnothérapeute",
                    title: "Hypno Mieux-être",
                    description: "Plateforme professionnelle avec ressources éducatives et prise de RDV.",
                    metric: "Positionnement #1 Google local",
                    tags: ["SEO avancé", "Ressources", "Contact optimisé"],
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                }
            ];

            const portfolioContainer = document.querySelector('.portfolio-grid');
            if (portfolioContainer) {
                portfolioData.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'portfolio-card';
                    card.innerHTML = `
                        <div class="portfolio-image-wrapper">
                            <img src="${item.image}" alt="${item.title}">
                            <a href="#" class="portfolio-link-icon" aria-label="Voir le projet ${item.title}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                            </a>
                        </div>
                        <div class="portfolio-content">
                            <div class="category">${item.category}</div>
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <div class="portfolio-metric">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                <span>${item.metric}</span>
                            </div>
                            <div class="portfolio-tags">
                                ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `;
                    portfolioContainer.appendChild(card);
                });
            }
            
            // --- Dynamic Resources & Blog Data ---
            const resourcesData = [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>',
                    title: "Guide Complet",
                    subtitle: "Réussir sa présence en ligne",
                    description: "Le guide de 30 pages pour comprendre tous les enjeux du digital pour votre pratique thérapeutique.",
                    meta: "PDF - 30 pages"
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>',
                    title: "Masterclass Gratuite",
                    subtitle: "Les 7 erreurs à éviter",
                    description: "45 minutes de formation pour éviter les pièges les plus courants lors de la création de votre site web.",
                    meta: "Vidéo - 45 min"
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>',
                    title: "Check-list SEO",
                    subtitle: "Optimisation pour thérapeutes",
                    description: "Liste de contrôle complète pour optimiser votre référencement local et attirer plus de clients.",
                    meta: "PDF - 15 pages"
                }
            ];
            
            const blogData = [
                {
                    category: "Marketing Digital",
                    readTime: "8 min",
                    title: "Comment attirer des clients de qualité avec votre site web",
                    description: "Les stratégies éprouvées pour attirer exactement le type de clients que vous souhaitez accompagner.",
                    date: "15 Mars 2024"
                },
                {
                    category: "Juridique",
                    readTime: "12 min",
                    title: "RGPD et sites web thérapeutiques : ce qu'il faut savoir",
                    description: "Guide complet pour être en conformité avec la réglementation sur la protection des données.",
                    date: "22 Février 2024"
                },
                {
                    category: "Conversion",
                    readTime: "6 min",
                    title: "Réservation en ligne : augmenter vos conversions de 300%",
                    description: "Comment optimiser votre système de prise de rendez-vous pour maximiser vos réservations.",
                    date: "8 Février 2024"
                }
            ];

            const resourcesContainer = document.querySelector('.resources-grid');
            if(resourcesContainer) {
                resourcesData.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'resource-card';
                    card.innerHTML = `
                        <div class="icon-wrapper">${item.icon}</div>
                        <h3>${item.title}</h3>
                        <h4 class="subtitle">${item.subtitle}</h4>
                        <p>${item.description}</p>
                        <div class="meta">${item.meta}</div>
                        <a href="#" class="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                            Télécharger gratuitement
                        </a>
                    `;
                    resourcesContainer.appendChild(card);
                });
            }

            const blogContainer = document.querySelector('.blog-grid');
            if(blogContainer) {
                blogData.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'blog-card';
                    card.innerHTML = `
                        <div class="meta">
                            <span class="category">${item.category}</span>
                            <span class="read-time">${item.readTime}</span>
                        </div>
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <div class="date">${item.date}</div>
                    `;
                    blogContainer.appendChild(card);
                });
            }

            // --- Dynamic Team Data ---
            const teamData = [
                { name: "Alexandre Nogami", role: "Fondateur & Directeur Créatif", specialty: "Stratégie digitale & UX Design", description: "Expert en transformation digitale avec 8 ans d'expérience dans l'accompagnement des professionnels du bien-être. Passionné par la psychologie utilisateur.", initial: "A", color: "blue" },
                { name: "Sarah Dubois", role: "Responsable Développement", specialty: "Développement WordPress & SEO", description: "Développeuse full-stack spécialisée dans la création de sites performants et sécurisés. Experte en optimisation technique et référencement.", initial: "S", color: "green" },
                { name: "Julien Martin", role: "Expert Marketing Digital", specialty: "Acquisition & Conversion", description: "Consultant en marketing digital depuis 6 ans, spécialisé dans les stratégies d'acquisition pour les professionnels de santé et du coaching.", initial: "J", color: "purple" },
                { name: "Emma Chen", role: "Designer UI/UX", specialty: "Design & Expérience Utilisateur", description: "Designer passionnée par la création d'interfaces intuitives et esthétiques qui convertissent. Spécialisée dans le secteur médical et thérapeutique.", initial: "E", color: "pink" }
            ];

            const teamContainer = document.querySelector('.team-grid');
            if(teamContainer) {
                teamData.forEach(member => {
                    const card = document.createElement('div');
                    card.className = 'team-card';
                    const colorGradient = {
                        blue: 'linear-gradient(to right, #3b82f6, #2563eb)',
                        green: 'linear-gradient(to right, #22c55e, #16a34a)',
                        purple: 'linear-gradient(to right, #a855f7, #9333ea)',
                        pink: 'linear-gradient(to right, #ec4899, #db2777)'
                    };
                    card.innerHTML = `
                        <div class="avatar" style="background: ${colorGradient[member.color]}">${member.initial}</div>
                        <h3>${member.name}</h3>
                        <div class="role">${member.role}</div>
                        <div class="specialty">${member.specialty}</div>
                        <p>${member.description}</p>
                        <div class="team-socials">
                            <a href="#" class="linkedin" aria-label="LinkedIn de ${member.name}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a href="#" class="mail" aria-label="Email de ${member.name}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a>
                        </div>
                    `;
                    teamContainer.appendChild(card);
                });
            }

            // --- Dynamic Pricing Data ---
            const pricingData = [
                {
                    title: "Essentiel",
                    description: "Parfait pour démarrer votre présence en ligne",
                    price: "2,490€",
                    popular: false,
                    features: [
                        "Site vitrine 5 pages", "Design responsive mobile", "Optimisation SEO de base", "Formulaire de contact", "Hébergement 1 an inclus", "Formation 1h", "Support 3 mois"
                    ],
                    buttonText: "Choisir cette formule",
                    buttonClass: "bg-gray-900 hover:bg-gray-800 text-white"
                },
                {
                    title: "Professionnel",
                    description: "La solution complète pour développer votre pratique",
                    price: "4,990€",
                    popular: true,
                    features: [
                        "Site complet 8 pages", "Système de réservation en ligne", "Optimisation SEO avancée", "Blog intégré", "Espace client sécurisé", "Paiements en ligne", "Hébergement 2 ans inclus", "Formation 3h", "Support 6 mois", "Google My Business"
                    ],
                    buttonText: "Commencer maintenant",
                    buttonClass: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                },
                {
                    title: "Premium",
                    description: "Pour une transformation digitale complète",
                    price: "7,990€",
                    popular: false,
                    features: [
                        "Site sur mesure illimité", "E-commerce intégré", "Réservation + Paiements avancés", "Marketing automation", "Identité visuelle complète", "Optimisation conversion", "Formations en ligne", "Hébergement 3 ans inclus", "Formation 6h", "Support 12 mois", "Suivi personnalisé mensuel"
                    ],
                    buttonText: "Choisir cette formule",
                    buttonClass: "bg-gray-900 hover:bg-gray-800 text-white"
                }
            ];

            const pricingContainer = document.querySelector('.pricing-grid');
            if(pricingContainer) {
                pricingData.forEach(plan => {
                    const card = document.createElement('div');
                    card.className = `pricing-card ${plan.popular ? 'popular' : ''}`;
                    card.innerHTML = `
                        ${plan.popular ? '<div class="popular-badge"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>Plus populaire</div>' : ''}
                        <div class="icon-wrapper" style="background: linear-gradient(to right, ${plan.title === 'Essentiel' ? '#3b82f6, #2563eb' : plan.title === 'Professionnel' ? '#22c55e, #16a34a' : '#a855f7, #9333ea'});">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        </div>
                        <h3>${plan.title}</h3>
                        <p class="description">${plan.description}</p>
                        <div class="price">${plan.price}</div>
                        <p class="term">Paiement en 3 fois sans frais possible</p>
                        <ul class="features">
                            ${plan.features.map(feature => `
                                <li class="feature-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                                    <span>${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <a href="#" class="btn ${plan.buttonClass}">${plan.buttonText}</a>
                    `;
                    pricingContainer.appendChild(card);
                });
            }

        });