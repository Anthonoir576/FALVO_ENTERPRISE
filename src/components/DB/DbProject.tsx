

export const baseDeDonneeproject :any = {

    web: [{
      studentProjects   : [
        {
            id        : 1,  
            date      : '28 Juillet 2021',
            title     : 'Projet 01 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_1_28072021',
            linkweb   : 'https://github.com/Anthonoir576/AnthonyFalvo_1_28072021',
            resume    : 'Premier projet de chez Openclassrooms, il faut réaliser des livrables, un total de 3, concernant la formation à suivre. Réalisation de PDF, via powerpoint. Avec un planning de formation sur les 6-8 mois de formation (théoriquement). Ensuite nos sources de veille informationnelle.',
            content   : 'Premier projet de chez Openclassrooms, il faut réaliser des livrables, un total de 3, concernant la formation à suivre. Réalisation de PDF, via powerpoint. Avec un planning de formation sur les 6-8 mois de formation (théoriquement). Ensuite nos sources de veille informationnelle.',
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p1.jpg?raw=true'
        }, {
            id        : 2, 
            date      : '29 Juillet 2021',
            title     : 'Projet 02 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_2_29072021',
            linkweb   : 'https://anthonoir576.github.io/AnthonyFalvo_2_29072021/',
            resume    : 'Deuxième projet de chez Openclassrooms : Transformez une maquette en site web. Nous sommes sur reservia, une maquette d\'une agence de reservation. Sous les technologies HTML5 et CSS3 sans framework ni pré-processeur de type SASS.',
            content   : `Éléments fournis par l'organisme de formation.

            La maquette pour les résolutions ordinateur et téléphone nous est donné. Toutes les images présentes sur le site sont aussi livrés en format sm, md, l & xl. Les icones proviennent de Font Awesome La police est "Raleway".

            Cahier des charges :

            L'integration doit se faire en HTML5 & CSS3, sans framework.
            Le champ de recherche doit être un champ de saisie, dont le texte peut être édité. La fonctionnalité de recherche ne doit pas être implémenté pour autant.
            Chaque carte d’hébergement ou d’activité devra être cliquable dans son intégralité. Pour l’instant les liens seront vides. Les filtres, bien que non fonctionnels, doivent changer de style au survol. Dans le menu, les liens “Hébergements” et “Activités” sont des ancres qui doivent mener aux sections de la page. Même si aucune maquette pour la résolution tablette n'est fournis, l'intégration doit la prendre en charge.
            Les images doivent être de taille adéquate afin qu'elle soit le plus jolie possible en impactant le moins possible le temps de chargement de la page.
            Le code devra utiliser les balises sémantiques et ne doit contenir aucune erreur ni alerte au validateur W3C HTML et CSS. Le site devra être compatible avec les dernières versions de Chrome et Firefox. Le HTML et le CSS doivent être séparés et le dossier doit être organisé
            Le code doit être versionné avec git et doit avoir un repo distant sur Github ou Gitlab
            Notes sur la réalisation du projet
            L'integration est faite sur l'éditeur Visual Studio Code
            Sass est utilisé pour organiser le css. Sass n'est plus présent. Uniquement un CSS refait sur mesure pour respecter les consignes. Une partie JS est présente pour le système d'onglet, et certaine animation CSS en plus, dans une but pédagogique uniquement. Ils serront désactivé pour le rendu du projet afin de respecter les consignes. Le JS a été retirer.`,
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p2.png?raw=true'
        }, {
            id        : 3, 
            date      : '02 Août 2021',
            title     : 'Projet 03 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_3_02082021',
            linkweb   : 'https://anthonoir576.github.io/AnthonyFalvo_3_02082021/',
            resume    : 'Troisème projet de chez Openclassrooms : Dynamisez une page web avec des animations CSS. Il s\'agit du même type de projet que le projet 02, a l\'exception qu\'on utilise quelque animation css basique.',
            content   : `Objectifs :

            Développer un site proposant le menu de 4 grands restaurants parisiens.
            Permettre la réservation en ligne et la composition de menus.
            Livrables :
            Pages à intégrer selon les maquettes :
            Page d’accueil
            Pages de menu (x4)
            Animation :

            Boutons
            
            Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir. L’ombre portée devra également être plus visible.
            À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, un bouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra se remplir progressivement. Pour cette première version, l’effet peut être apparaître au survol au lieu du clic.

            Page d’accueil
            
            Quand l’application aura plus de menus, un “loading spinner” sera nécessaire. Sur cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini,toute proposition est donc la bienvenue tant qu’elle est cohérente avec la chartegraphique du site.

            Pages de menu
            
            À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe “Entrée”, “Plat” et “Dessert”. Un exemple de l’effet attendu est fourni.
            Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser dela droite vers la gauche. Pour cette première version, l’effet peut apparaître au survolau lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension. Un exemple de l’effet attendu est fourni.

            Technologies :
            Autorisés: HTML / CSS / Sass
            
            Notes :
            Polices :
            
            Logo & titres: Shrikhand
            Texte: Roboto
            Couleurs :
            
            Primaire: #9356DC
            Secondaire: #FF79DA
            Tertiaire: #99E2D0
            Contraintes :
            
            Approche mobile-first: oui
            Maquette mobile : oui
            Maquette desktop : à improviser
            Validation W3C HTML : à passer, warning autorisés
            Validation W3C CSS : à passer, warning autorisés
            Compatibilité : Dernières versions de Chrome, Firefox & Safari`,
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p3.png?raw=true'
        }, {
            id        : 4, 
            date      : '09 Août 2021',
            title     : 'Projet 04 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_4_09082021',
            linkweb   : 'https://anthonoir576.github.io/AnthonyFalvo_4_09082021/',
            resume    : "Quatrième projet de chez Openclassrooms : Optimisez un site web existant. Nous avons à disposition un site web mal optimisé, et nous devons améliorer c'est performance technique. Que ça soit d'un point de vu performance, et aussi au niveau accessibilité web.",
            content   : `Objectifs :

            L'objectif est d'analyser et d'optimiser (SEO et accessibilité) le site web déjà existant de l'agence web "La Chouette Agence". Puis comparer les 2 versions du site.
            
            Livrables :

            Une liste de 10 recommandations SEO
            Le code source complet du site amélioré
            Un rapport d’optimisation comprenant une comparaison des résultats

            Connaissances évaluées :

            SEO réferencement naturel
            SEO performances techniques
            Accessibilité`,
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p4.png?raw=true'
        }, {
            id        : 5, 
            date      : '28 Août 2021',
            title     : 'Projet 05 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_5_28082021',
            linkweb   : 'https://anthonoir576.github.io/AnthonyFalvo_5_28082021/',
            resume    : "Cinquième projet de chez Openclassrooms : Construisez un site e-commerce. A disposition uniquement un back-end. ",
            content   : `Pour tester l'application :

            Cloner le repository, et lancer le serveur NodeJs :
            Dans le terminal accéder au dossier du projet puis aller dans 'back-end'
            Executer npm install (Pour les modules nodes) à l'intérieur de 'back-end'
            Lancer : "nodemon server", "node server" ou "npm start" via ce même dossier 'back-end'
            Adresse de l'API : http://localhost:3000/api/cameras
            Accéder au site à l'adresse 
            Via live server sous vsCode (avec un port différent de l'api) via index.html
            Ou via ce liens => Lien de la page WEB une fois le serveur lancer

            Scénario :

            L'objectif est développer en JavaScript, et sans framework, le Front-End d'un site e-commerce.
            L'entreprise fictive est Orinoco, qui crée des applications thématiques ne vendant qu'un seul type de produit. Le design de la maquette est libre de choix.
            
            Objectifs du projet :

            Développement Front-End en Javascript d'un site e-commerce.
            Page d'accueil : liste tous les produits
            Page produit : affiche de manière dynamique le produit. L'utilisateur peut choisir une option et la quantité, et l'ajouter au panier
            Page panier : contient le résumé des articles dans le panier, avec un formulaire permettant de passer commande. Les données du formulaires seront vérifiées avant d'être envoyées au back-end
            Page de confirmation : affichant un remerciement, le montant total de la commande, et le numéro de commande récupéré du back-end.
            Réaliser un plan de tests
            
            Compétences évaluées :

            Javascript Front-End
            Plan de test`,
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p5.png?raw=true'
        }, {
            id        : 6, 
            date      : '30 Sept 2021',
            title     : 'Projet 06 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_6_30092021',
            linkweb   : 'https://github.com/Anthonoir576/AnthonyFalvo_6_30092021/tree/master/backend',
            resume    : "Sixième projet de chez Openclassrooms : Construisez une API sécurisée pour une application d'avis gastronomiques.",
            content   : `Pour tester l'application :

            Cloner le repository
            Deux dossiers (backend / frontend)

            backend :
            Dans le terminal accéder au dossier du projet backend
            Un exemple de variable d'environnement est fournis avec un accès restreint à la bdd, tous les renseignements sont déjà renseigné, il suffit simplement de supprimer (.example de => .env.example).
            npm install (Pour les modules nodes)
            lancer : "nodemon server","node server" ou "npm start";
            Adresse de l'API : http://localhost:3000 par defaut

            frontend :
            Dans le terminal accéder au dossier du projet frontend
            npm install (Pour les modules nodes)
            lancer : "npm start" ;
            Adresse de l'API : http://127.0.0.1:8081`,
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p6.png?raw=true'
        }, {
            id        : 7, 
            date      : '11 Oct 2021',
            title     : 'Projet 07 openclassrooms',
            auteur    : [{nom : 'FALVO', prenom : 'Anthony'}],
            github    : 'https://github.com/Anthonoir576/AnthonyFalvo_7_11102021',
            linkweb   : 'https://github.com/Anthonoir576/AnthonyFalvo_7_11102021/tree/master/frontend',
            resume    : "Septième projet de chez Openclassrooms : Créez un réseau social d’entreprise.",
            content   : `Technologie :
            Mysql - Sequelize - NodeJS - Express - ReactJS - Sass/Css

            Tout d'abord :
            clonez le répository

            Installation back-end :
            Allez dans le fichier backend
            npm i
            npm start

            Installation front-end :
            Allez dans le fichier frontend
            npm i
            npm start

            Installation Database :
            Un fichier dans backend/config/config.json permet de configurer la base de donnée relié a l'application exemple :
             "development": {
                "username": "root",
                "password": "47571971",
                "database": "database_development_p7",
                "host": "127.0.0.1",
                "dialect": "mysql"
              }
            Un dossier migration vous permettra de créez les tables directement, aller dans backend à la racine :
            sequelize db:create
            sequelize db:migrate

            Administration de l'application :
            La seule façon de créer un administrateur, serra donc de l'intégrer de façon manuelle sur la base de données en plaçant celui-ci sur 'isAdmin=true', afin d'éviter les problème lié à la sécurité de l'application.

            Problème possible lié a l'installation :
            Aucun pour le moment
            Testé sous Windows / Linux. Sous deux appareils différents`,
            image     : 'https://github.com/Anthonoir576/FALVO_ENTERPRISE/blob/gh-pages/assets/images-db/oc-p7.png?raw=true'
        }
    ]  
    }, {
      softwareProjects : []  
    }, {
      gameProjects    : [] 
    }],
    software: [],
    game : []

};