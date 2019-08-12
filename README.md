# WCS-Node
Node exercises on WCS course

Réaliser votre première application NodeJS. Cette application écrite doit demander à l'utilisateur son âge et, à partir de cette valeur, lui retourner son année de naissance. Vous posterez le lien de votre Gist.

ROUTES
Dans un dossier contenant un projet Express, tu vas créer une nouvelle route dans routes/index.js. Puis écrire un middleware sur la route /superMiddleware qui affiche hello middleware dans le terminal (via un console.log()), à chaque appel de la page. Dans la fonction "suivante", afficher hello world à l'utilisateur (via un res.send()).

/* installé express generator, nodemon */

1_/ ROUTE POST

 créer une nouvelle route dans routes/index.js. Afficher dans la console de NodeJS le contenu de la requête GET, de la requête POST et du paramètre de l'URL (101) lorsque tu envoies en POST ton nom sur http://localhost:3000/forms-101?level=easy.

2_/ ROUTING :

une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug
une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]
une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug
une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]
Dans ton dossier views tu auras deux vues pour lancer ces appels de routes :

un fichier update-user.pug avec un formulaire envoyant sur la route en PUT
un fichier delete-user.pug avec un formulaire envoyant sur la route en DELETE


Critères de validation
L'appel de l'URL /users/bob en PUT affiche The new name is bob
L'appel de l'URL /users/2 en DELETE affiche No more user with id 2
Le code sera disponible sur Github.