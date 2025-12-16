import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjetService, Projet } from '../../services/projet.services';

@Component({
  selector: 'app-detail-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-projet.html',
  styleUrl: './detail-projet.scss',
})
export class DetailProjet {
  projet?: Projet;

  constructor(
    private route: ActivatedRoute,
    private projetService: ProjetService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projet = this.projetService.getDetailProjet(id);
  }
}
