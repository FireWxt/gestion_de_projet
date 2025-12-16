import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'ajouter-projet', loadComponent: () => import('./pages/ajouter-projet/ajouter-projet').then(m => m.AjouterProjet) },
];
