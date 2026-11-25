# Site vitrine – cabinet médical (modèle)

Site d'une page pour un cabinet de médecine générale, en HTML, CSS et JavaScript, sans framework. Il respecte le code de déontologie médicale : pas de ton publicitaire, pas d'avis patients, pas de formulaire.

- Démo en ligne : https://ndioursidi-commits.github.io/cabinet-dr-martin/
- Dépôt : https://github.com/ndioursidi-commits/cabinet-dr-martin

> Version actuelle : **démonstration, cabinet fictif**.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil : présentation, honoraires, horaires, accès, prise de RDV |
| `mentions-legales.html` | Mentions légales et données personnelles |
| `style.css` | Apparence, version mobile comprise |
| `script.js` | Menu mobile, jour actuel dans les horaires, année du pied de page |
| `plan.svg` | Plan d'accès (image locale, aucun service tiers) |
| `favicon.svg`, `apple-touch-icon.png` | Icônes de l'onglet et de l'écran d'accueil |
| `og-image.png` | Image d'aperçu lors d'un partage (1200 × 630) |

## Adapter le site à un vrai client

### 1. Informations du cabinet
- [ ] Nom, prénom et qualification du médecin (`index.html`, `mentions-legales.html`)
- [ ] Adresse, téléphone, transports
- [ ] N° RPPS, conseil départemental de l'Ordre
- [ ] Secteur de conventionnement et honoraires
- [ ] Horaires (tableau **et** données Schema.org)
- [ ] Lien Doctolib réel (2 boutons)
- [ ] Langues parlées, accessibilité

### 2. Plan et images
- [ ] Remplacer `plan.svg` par une vraie capture de carte (citer « © contributeurs OpenStreetMap »)
- [ ] Mettre à jour le lien « plan interactif » et les coordonnées GPS (`geo` dans Schema.org)
- [ ] Refaire `og-image.png` avec le nom du médecin

### 3. Adresse du site
- [ ] Remplacer `https://ndioursidi-commits.github.io/cabinet-dr-martin/` par le domaine du client dans : `canonical`, `og:url`, `og:image`, Schema.org (`url`, `image`)

### 4. Mentions légales
- [ ] Éditeur et directeur de la publication
- [ ] Hébergeur réel (nom, adresse, téléphone)

### 5. Sortir du mode démo
- [ ] Supprimer le bandeau `demo-banner` (2 pages)
- [ ] Supprimer `<meta name="robots" content="noindex">` dans `index.html` (garder celui des mentions légales)
- [ ] Supprimer « Site fictif réalisé à titre d'exemple » dans le pied de page

### 6. Vérifications avant mise en ligne
- [ ] Relecture par le médecin, et par le Conseil de l'Ordre si besoin
- [ ] Test des données structurées : https://search.google.com/test/rich-results
- [ ] Test de l'aperçu de partage : https://www.opengraph.xyz
- [ ] Affichage sur téléphone
- [ ] En-têtes de sécurité (HTTPS, CSP) chez l'hébergeur

## Publication

Chaque `git push` sur `main` republie le site via GitHub Pages en 1 à 2 minutes.
