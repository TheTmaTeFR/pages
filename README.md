# Portfolio — Camille Rousseau

Projet Angular 19 (standalone components) + Tailwind CSS, initialisé à partir de la maquette
"élégance à la française / open source lover".

## Démarrage

```bash
npm install
npm start
```

Le site est servi sur http://localhost:4200

## Build de production

```bash
npm run build
```

## Structure

```
src/app/
  app.component.ts        -> orchestre les sections de la page
  components/
    header/                -> nav fixe + logo/monogramme
    mobile-menu/           -> menu plein ecran mobile
    hero/                  -> section d'accueil
    skills/                -> "Savoir-faire"
    work/                  -> "Realisations"
    open-source/           -> "Contributions libres"
    timeline/              -> "Parcours"
    contact/               -> section de contact
    footer/
```

Chaque section est un composant standalone independant : c'est la prochaine etape
que nous allons remplir une par une avec le contenu et les styles Tailwind, en
reprenant les tokens definis dans `tailwind.config.js` (couleurs navy, gold,
paper, ink, polices display / body / ui / mono).

## Design tokens (tailwind.config.js)

- Couleurs : navy-deep, navy-soft, gold, gold-soft, paper, paper-dim, ink, ink-soft
- Polices : font-display (Cormorant/EB Garamond), font-body (EB Garamond),
  font-ui (Inter), font-mono (JetBrains Mono)
