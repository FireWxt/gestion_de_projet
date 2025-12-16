import { Injectable } from '@angular/core';

export interface Projet {
  id: number;
  nom: string;
  statut: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {


  private projets: Projet[] = [
  ];

  constructor() {}


  getListeProjets(): Projet[] {
    return this.projets;
  }

  getDetailProjet(id: number): Projet | undefined {
    return this.projets.find(projet => projet.id === id);
  }

  ajouterProjet(nom: string, statut: string): void {
    const nouveauProjet: Projet = {
      id: this.projets.length > 0
        ? Math.max(...this.projets.map(p => p.id)) + 1
        : 1,
      nom,
      statut
    };

    this.projets.push(nouveauProjet);
  }
}
