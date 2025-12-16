import { Injectable, signal } from '@angular/core';

export interface Projet {
  id: number;
  nom: string;
  statut: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private projetsSignal = signal<Projet[]>([]);

  getListeProjets() {
    return this.projetsSignal;
  }

  getDetailProjet(id: number): Projet | undefined {
    return this.projetsSignal().find(p => p.id === id);
  }

  ajouterProjet(nom: string, statut: string): void {
    const projets = this.projetsSignal();
    const nouveauProjet: Projet = {
      id: projets.length > 0
        ? Math.max(...projets.map(p => p.id)) + 1
        : 1,
      nom,
      statut
    };

    this.projetsSignal.set([...projets, nouveauProjet]);
  }
}