import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjetService, Projet } from '../../services/projet.services';

@Component({
  selector: 'app-liste-projet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-projet.html',
  styleUrl: './liste-projet.scss',
})
export class ListeProjet {
  projets: Projet[] = [];

  constructor(private projetService: ProjetService) {
    this.projets = this.projetService.getListeProjets();
  }
}
