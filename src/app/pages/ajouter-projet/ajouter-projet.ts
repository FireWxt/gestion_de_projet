import { Component } from '@angular/core';
import  {Router} from '@angular/router';
import { ProjetService } from '../../services/projet.services';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajouter-projet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter-projet.html',
  styleUrls: ['./ajouter-projet.scss'],
})
export class AjouterProjet {

  nom = '';
  statut = '';

  constructor(private projetService: ProjetService, private router: Router) {}

  ajouterProjet() {
    if (this.nom && this.statut) {
      this.projetService.ajouterProjet(this.nom, this.statut);
      this.router.navigate(['/liste-projet']);
    }
  }
}
