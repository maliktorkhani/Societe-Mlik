# MLIK - Société Immobilière

Site web professionnel, moderne et responsive pour la société immobilière MLIK en Tunisie.

## 🏢 À Propos du Projet

MLIK est une société immobilière tunisienne spécialisée dans la promotion immobilière de qualité. Ce site web présente leurs projets, services et permet aux clients de simuler leur crédit immobilier.

## ✨ Fonctionnalités Complètes

### Pages Principales
- ✅ **Page d'accueil** - Hero section moderne avec projets en vedette
- ✅ **Présentation** - Histoire et valeurs de la société MLIK
- ✅ **Projets** - Galerie complète des projets immobiliers avec filtres
- ✅ **Services** - Description détaillée des services d'accompagnement
- ✅ **Le Groupe** - Présentation du groupe MLIK et SMTP
- ✅ **Simulateur de crédit** - Calcul de mensualités en temps réel
- ✅ **Contact** - Formulaire de contact et carte Google Maps
- ✅ **Mentions légales** - Informations légales et propriété intellectuelle
- ✅ **Politique de confidentialité** - Protection des données personnelles

### Projets Immobiliers Présentés
1. **Le Méridian** - Sidi Fradj, La Soukra
2. **Radisson** - Avenue Habib Bourguiba, Megrine
3. **Le Negresco** - Les Jardins de Carthage, Tunis
4. **Le Capitole** - Choutrana II, La Soukra

### Fonctionnalités Techniques

#### 🎨 Design
- Design moderne et professionnel
- Palette de couleurs élégante (bleu/gris/blanc/doré)
- Typographie professionnelle (Poppins + Playfair Display)
- Animations et transitions fluides
- Effets hover sophistiqués
- Cards modernes avec ombres et profondeur

#### 📱 Responsive
- Mobile-first approach
- Breakpoints optimisés :
  - Mobile: < 768px
  - Tablette: 768px - 1024px
  - Desktop: > 1024px
- Menu burger fonctionnel pour mobile
- Grilles flexibles et images adaptatives
- Navigation tactile optimisée

#### 🧮 Simulateur de Crédit
- Calcul en temps réel des mensualités
- Sliders interactifs et inputs synchronisés
- Formule mathématique précise de calcul d'emprunt
- Visualisation graphique du financement
- Résultats détaillés :
  - Mensualité estimée
  - Montant emprunté
  - Coût du crédit
  - Coût total
  - Répartition apport/crédit

#### 📧 Formulaires
- Formulaire de contact avec validation
- Inscription newsletter
- Sélection de projet d'intérêt
- Messages de confirmation
- Gestion des soumissions

#### 🗺️ Intégrations
- Google Maps intégré
- Icônes Font Awesome 6.4
- Google Fonts (Poppins & Playfair Display)
- Images Unsplash de haute qualité

#### ⚡ Performances
- Navigation fixe avec effet scroll
- Lazy loading des images
- Animations au scroll (Intersection Observer)
- Transitions CSS optimisées
- Code JavaScript modulaire

## 📂 Structure du Projet

```
immomlik/
├── index.html                      # Page d'accueil
├── presentation.html               # Présentation de MLIK
├── projets.html                    # Liste des projets
├── services.html                   # Services offerts
├── groupe.html                     # Le Groupe MLIK
├── simulateur.html                 # Simulateur de crédit
├── contact.html                    # Page de contact
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # Politique de confidentialité
├── css/
│   ├── style.css                  # Styles principaux et responsive
│   └── pages.css                  # Styles des pages secondaires
├── js/
│   ├── main.js                    # JavaScript principal
│   └── simulator.js               # Logique du simulateur
└── README.md                       # Documentation

```

## 🎯 URLs et Navigation

### Pages Accessibles
- `/index.html` - Accueil
- `/presentation.html` - Présentation de la société
- `/projets.html` - Tous les projets (avec filtres)
- `/services.html` - Services d'accompagnement
- `/groupe.html` - Le Groupe MLIK et SMTP
- `/simulateur.html` - Simulateur de crédit immobilier
- `/contact.html` - Formulaire de contact et carte

### Paramètres du Simulateur
- Prix du bien: 50,000 - 2,000,000 TND
- Apport personnel: 0 - 500,000 TND
- Durée: 5 - 30 ans
- Taux d'intérêt: 0.1% - 15%

## 📞 Informations de Contact

**Adresse**
Bureau B12-1ère étage
Résidence Al OMARA
Les Jardins de Carthage
Tunis, Tunisie

**Téléphone**
- Standard: (+216) 71 264 260
- Conseiller Commercial (Hassen MLIK): +216 53 064 797

**Horaires**
- Lundi - Vendredi: 8h30 - 17h30
- Samedi: 9h00 - 13h00
- Dimanche: Fermé

## 🎨 Palette de Couleurs

```css
/* Couleurs principales */
--primary-color: #1a4d8f;      /* Bleu principal */
--primary-dark: #0f3460;        /* Bleu foncé */
--secondary-color: #c59d5f;     /* Doré */
--secondary-dark: #a67f42;      /* Doré foncé */

/* Couleurs neutres */
--dark: #1a1a1a;                /* Noir */
--gray-dark: #333333;           /* Gris foncé */
--gray: #666666;                /* Gris moyen */
--white: #ffffff;               /* Blanc */
--background: #f8f9fa;          /* Fond */
```

## 💻 Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes (Flexbox, Grid, Variables CSS)
- **JavaScript (Vanilla)** - Interactivité native

### Bibliothèques CDN
- **Font Awesome 6.4.0** - Icônes
- **Google Fonts** - Typographies (Poppins, Playfair Display)

### APIs et Services
- **Google Maps** - Carte de localisation
- **Unsplash** - Images de haute qualité

## 🚀 Déploiement

Le site est statique et peut être déployé sur n'importe quel hébergement web:

### Options de Déploiement
1. **Netlify** - Déploiement automatique depuis Git
2. **Vercel** - Hébergement frontend
3. **GitHub Pages** - Hébergement gratuit
4. **Serveur traditionnel** - FTP/SFTP upload

### Instructions de Déploiement
1. Télécharger tous les fichiers du projet
2. Uploader sur votre serveur web
3. Configurer le domaine (immomlik.com)
4. S'assurer que index.html est le fichier par défaut

## ⚙️ Configuration

### Personnalisation des Projets
Modifier dans `projets.html` et `index.html`:
- Noms des projets
- Localisations
- Prix (dans les cards)
- Images (URLs Unsplash)

### Modification du Simulateur
Dans `js/simulator.js`:
- Taux d'intérêt par défaut
- Limites min/max des sliders
- Formules de calcul

### Coordonnées de Contact
Modifier dans le footer de chaque page:
- Adresse
- Téléphones
- Liens réseaux sociaux
- Email (à ajouter si nécessaire)

## 📊 Statistiques du Site

- **Pages**: 9 pages (7 principales + 2 légales)
- **Composants**: Navigation, Hero, Cards, Formulaires, Footer
- **Responsive**: 3 breakpoints
- **Images**: 20+ images optimisées
- **Animations**: Scroll animations, Hover effects, Transitions
- **Formulaires**: Contact, Newsletter, Simulateur

## 🔧 Fonctionnalités à Implémenter (Future)

### Phase 2
- [ ] Pages détaillées pour chaque projet
- [ ] Galerie photos pour chaque résidence
- [ ] Blog immobilier
- [ ] Témoignages clients
- [ ] FAQ dynamique

### Phase 3
- [ ] Espace client (login)
- [ ] Suivi de dossier en ligne
- [ ] Comparateur de projets
- [ ] Visite virtuelle 360°
- [ ] Chat en direct

### Phase 4
- [ ] Version multilingue (FR/AR/EN)
- [ ] Application mobile
- [ ] Notifications push
- [ ] Intégration CRM
- [ ] Analytics avancés

## 🐛 Support et Maintenance

### Browsers Supportés
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Résolution de Problèmes Courants

**Menu burger ne s'ouvre pas**
- Vérifier que `js/main.js` est bien chargé
- Vérifier la console pour les erreurs

**Simulateur ne calcule pas**
- Vérifier que `js/simulator.js` est chargé
- S'assurer que les IDs des éléments correspondent

**Images ne s'affichent pas**
- Vérifier la connexion Internet (images Unsplash)
- Remplacer par des images locales si nécessaire

## 📈 SEO et Performance

### Optimisations Incluses
- ✅ Meta descriptions
- ✅ Structure sémantique HTML5
- ✅ Titres H1-H6 hiérarchisés
- ✅ Alt text sur les images
- ✅ URLs descriptives
- ✅ Responsive design
- ✅ Fast loading (CSS/JS minifiables)

### Recommendations
- Compresser les images avant upload
- Minifier CSS et JavaScript en production
- Activer la compression GZIP sur le serveur
- Ajouter un sitemap.xml
- Configurer robots.txt

## 📝 Licence et Droits

© 2024 MLIK Société Immobilière. Tous droits réservés.

Ce site est la propriété de MLIK Société Immobilière. 
Le code source est fourni pour usage exclusif de la société.

## 👥 Crédits

**Développement**: Site web créé pour MLIK Société Immobilière
**Design**: Inspiré des meilleures pratiques UX/UI immobilières
**Images**: Unsplash (photos libres de droits)
**Icônes**: Font Awesome
**Typographies**: Google Fonts (Poppins, Playfair Display)

## 📞 Contact Technique

Pour toute question technique ou support:
- Email: support@immomlik.com (à configurer)
- Téléphone: (+216) 71 264 260

---

**Version**: 1.0.0
**Date de mise à jour**: Décembre 2024
**Statut**: ✅ Prêt pour déploiement