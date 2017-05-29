# Dev Web INSA TP - Partie 2

Plan

- [Étape 1](#étape-1)
- [Étape 2](#étape-2)

## Étape 1

> Installation des dépendances

```console
cd webapp
npm install
```

```console
npm run start
```

> Mise en place de la navigation

app-routing.module.ts
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Intégration du module de routing dans le module app

app.module.ts
```ts
import { AppRoutingModule } from './app-routing.module';
```

Ajouter le module AppRoutingModule à la liste des modules chargés

Modification du template du composant principal

```html
<h1>{{title}}</h1>
<nav>
  <!-- Ajouter un lien vers l'URL /about -->
</nav>
<router-outlet></router-outlet>
```

Pour fonctionner les liens angular doivent utiliser l'attribut routerLink au lien de href

Le composant <router-outlet> va servir de conteneur pour les éléments de navigation

Création des composants home about

```console
ng generate component home
ng generate component about
```

Mise en place du routing

app-routing.module.ts
```ts
// Importer les composants HomeComponent et AboutComponent

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  }
];
```

Dans le template du composant About ajouter un lien pour naviguer vers la home

## Étape 2

> Gestion d'un widget météo

Création d'un nouveau composant

```console
ng generate component weather
```

weather/weather.component.html
```html
<h3>Ville: Rennes</h3>
<h4>Pays: France</h4>
<p>
  Latitude: <i>48.11</i>
  Longitude: <i>-1.67</i>
</p>
<p>
  Condition météo: Pluvieux
</p>
```

Intégration du composant weather dans le composant home

home/home.component.html
```html
<app-weather></app-weather>
```

Remplacer les valeurs en dur dans le template par une des valeurs définis dans la classe WeatherComponent

Example

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = {
    city: 'Rennes',
    ...
  }
  construtor() { }
  ngOnInit() { }
}
```