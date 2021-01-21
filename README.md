NETFLOX

Il s'agit d'une copie du site de streaming vidéo Netflix.

Techno utilisée:
React
React-dom
React-router-dom
Styled-components: librairie utilisée afin de créer des composants plus facilement réutilisables
Fuse.js: librairie utilisée permettant d'effectuer des recherches par mots clés à partir d'inputs
Jest: librairie utilisée afin de tester le bon fonctionnement des composants

Présentation détaillée du projet:

Les pages:
Le projet comprend 4 pages principales:
-Home
-Sign In
-Sign Up
-Browse

Les pages contiennent différents containers divisant la page en parties eux mêmes composés de composants réutilibles dans lesquelles sont passées des données.

La page home est la page d'accueil vers laquelle l'utilisateur est envoyé s'il n'est pas connecté ou qu'il n'est pas inscrit.
Les pages Sign In et Sign Up sont des pages de connexion et d'inscription classiques utilisant un formulaire de collecte de données.
La page browse est la plus complexe dans le sens où elle contient deux expressions ternaires qui renvoient différentes composants en fonction de certains critères. En effet, comme le vrai Netflix, un compte peut avoir plusieurs utilisateurs avec des préférences diverses en terme de films et series (les fonctionnalités de recommandations et de préférences n'ont pas été intégrées à l'application). Ainsi quand l'utilisateur se connecte, avant d'arriver à l'écran avec la liste des films disponibles, il doit selectionner son profil. Par soucis de facilité, nous n'en avons crée qu'un. S'il clique sur son profil, les infos le concernant seront renvoyées dans le "header" (composants contenant le logo, la barre de recherche et le profil de l'utilisateur ) et il accedera enfin à la page avec les films/séries. Il pourra alors chercher des films par mots clés via la barre de recherche, voir le résumer d'un film en cliquant sur l'image de celui-ci ou encore lancer une vidéo en cliquant sur le bouton lecture dans le résumé du film séléctionné.

De manière générale, les pages sont régies par une logique de routes privées qui redirigent l'utilisateur s'il est connecté ou non. Cette logique est mis en place dans le fichier "helpers".

Components:
Les composants de l'application sont créés en utilisant la librairie "styled components"

Containers
Les containers comme leur nom l'indiquent servent de contenants dans lesquels sont

Utils:
Dans le fichier utils nous créé une fonction qui permet de filtrer les films et séries par genre. Cette fonction nous permet de classer les films et séries par ligne de même genre et ainsi d'organiser la page de manière esthétique.

Custom hooks:
Pour cette application, nous avons créé deux custom hooks:
-Useauthlistener:
Ce custom hook nous permet d'utiliser le localstorage pour stocker et récupérer l'identité 
de l'utilisation d'une session à l'autre, afin qu'il n'ait pas à se connecter à chaque fois
qu'il va sur le site.

-usecontent:
Accède à la collection firebase de l'élément ciblé 
et prend tous les documents qui y figurent


Firebase:
Firebase cloud firestore sert de back-end contenant les données relatives aux films et séries.
Dans le cas présent, nous n'avons pas utilisé d'architecture REST étant donné que les données ont été saisis manuellement directement dans les collections du cloud firestore.
Nous utilisons également sa méthode d'identification par email et mot de passe.

Jest Testing
La majorité des composants et des pages sont testés via la librairie JEST.
L'intégralité des test sont écrits et stockés dans le fichier "tests"
