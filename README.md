# WCS-Node
Node exercises on WCS course

Réaliser votre première application NodeJS. Cette application écrite doit demander à l'utilisateur son âge et, à partir de cette valeur, lui retourner son année de naissance. Vous posterez le lien de votre Gist.

ROUTES
Dans un dossier contenant un projet Express, tu vas créer une nouvelle route dans routes/index.js. Puis écrire un middleware sur la route /superMiddleware qui affiche hello middleware dans le terminal (via un console.log()), à chaque appel de la page. Dans la fonction "suivante", afficher hello world à l'utilisateur (via un res.send()).

/* installé express generator, nodemon */

1_/ ROUTE POST

 créer une nouvelle route dans routes/index.js. Afficher dans la console de NodeJS le contenu de la requête GET, de la requête POST et du paramètre de l'URL (101) lorsque tu envoies en POST ton nom sur http://localhost:3000/forms-101?level=easy.
