# Jeu Tree Hopper 

Un petit jeu 2D développé en **HTML / CSS / JavaScript**, dans lequel le joueur contrôle un personnage qui doit sauter pour éviter des obstacles et obtenir le meilleur score possible.  

---

## Technologies utilisées

- **HTML5** : structure du jeu et du canvas  
- **CSS3** : mise en forme, style de la page, popup Game Over  
- **JavaScript (ES6)** : logique du jeu, animations, collisions, score, gestion du clavier  
- **Canvas API** : rendu graphique (joueur, sol, obstacles)  
- **LocalStorage** : sauvegarde du meilleur score

---

##  Fonctionnalités principales

- Animation du personnage (course + saut)
- Obstacles générés avec un mouvement continu
- Détection des collisions 
- Système de score et meilleur score sauvegardé
- Popup Game Over personnalisée
- Redémarrage rapide de la partie
- Sol dessiné + images intégrées (player / obstacle)
- Contrôles simples (touche **Espace** pour sauter)

---

## Démo en ligne (GitHub Pages)
 **Lien du projet :**  
https://dhekrasaidi.github.io/test_github/

---

##  Nouveautés explorées / Ce que j’ai appris

Durant ce projet, j’ai découvert et pratiqué :

- Comment utiliser le **canvas** pour dessiner et animer
- Comment gérer une **boucle de jeu** avec `requestAnimationFrame`
- Comment implémenter une **détection de collision précise**
- Comment afficher une popup personnalisée sans `alert()`
- Comment optimiser les hitbox pour une collision réaliste
- Comment utiliser **localStorage** pour sauvegarder les scores
- Comment **héberger un site sur GitHub Pages**
- Comment organiser un projet en fichiers séparés (HTML, CSS, JS)
- Comment corriger les erreurs liées au nom des fichiers et paths lors d’un déploiement

---

##  Difficultés rencontrées

Voici les principaux problèmes rencontrés :

1. **Le fichier `index.html` n’était pas reconnu par GitHub Pages**  
   à cause d’un mauvais nom ou d'un duplicata.

2. **Les obstacles flottaient au-dessus du sol**  
   en raison d’un mauvais offset Y lors du dessin.

3. **La collision semblait trop large**  
   car les hitbox du joueur et des obstacles n’étaient pas centrées sur les images.

4. **L’alert Game Over bloquait le jeu**  
   et donnait un rendu visuel peu professionnel.

5. **Certaines images n’apparaissaient pas**  
   à cause de mauvais chemins relatifs

---

## Solutions apportées

- Correction du nom du fichier → `index.html` (tout en minuscules).
- Nettoyage des fichiers duplicata pour que GitHub Pages fonctionne.
- Ajustement des positions (`y`) des obstacles pour qu’ils collent au sol.
- Création d’une **hitbox plus petite** et plus réaliste pour le joueur.
- Remplacement du `alert()` par une **popup Game Over stylée en CSS**.
- Utilisation de `console.log()` pour diagnostiquer les erreurs de path.
- Activation de GitHub Pages via **Settings → Pages → Branch "main" → /(root)**.
- Ajout de styles CSS (ombre, arrondis, couleurs) pour un rendu plus propre.


