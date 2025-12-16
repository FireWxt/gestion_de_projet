import { Routes } from '@angular/router';
import { ListeProjet } from './pages/liste-projet/liste-projet';
import { DetailProjet } from './pages/detail-projet/detail-projet';
import { AjouterProjet } from './pages/ajouter-projet/ajouter-projet';


export const routes: Routes = [
    { path: '', component: ListeProjet},
    { path: 'projet/:id', component: DetailProjet },
    { path: 'ajouter-projet', component: AjouterProjet },
    {path: '**', redirectTo: '' } /* pour secuisé : ** redirige tout URL non defini vers '' (1er path)*/
    
];
