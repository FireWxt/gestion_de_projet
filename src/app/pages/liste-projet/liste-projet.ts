import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjetService } from '../../services/projet.services';

@Component({
  selector: 'app-liste-projet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-projet.html',
  styleUrl: './liste-projet.scss',
})
export class ListeProjet {
  projets;

  constructor(private projetService: ProjetService) {
    this.projets = this.projetService.getListeProjets();
  }
}