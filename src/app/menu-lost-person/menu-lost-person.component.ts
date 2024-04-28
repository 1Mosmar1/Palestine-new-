import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { palestineservice } from '../palestineservice';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lost-person',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './menu-lost-person.component.html',
  styleUrl: './menu-lost-person.component.scss',
  providers: [palestineservice,RouterLink]
})
export class MenuLostPersonComponent implements OnInit{
  id: undefined;
  constructor(public ps: palestineservice){}
  users:any=[] ;
  ngOnInit(){
    this.ps.getalluser().subscribe({
      next: (response) => {
        this.users = response ;
        console.log(this.users);

      },
      error: (error) => {
        console.error("erreur en recuperation les données :",error);
        alert("une erreur de ce prodouit lors de l'affichage les données");
      }
    });
  }
  supprimeuser(id: number): void {
    if (id) {
        this.ps.supprimeuser(id).subscribe({
            next: (response) => {
                // Filtrer l'utilisateur après la suppression
                this.users = this.users.filter((u: any) => u.id !== id);
                alert("Le fleuriste a été supprimé avec succès");
                // Réinitialiser l'ID après la suppression
                this.id = undefined;
                // Afficher l'identifiant après la suppression
                console.log(id);
                console.log(response);
            },
            error: (error) => {
                console.error("Erreur lors de la suppression d'utilisateur:", error);
                alert("Une erreur s'est produite lors de la suppression d'utilisateur");
            }
        });
    } else {
        console.error("L'identifiant du fleuriste est indéfini");
        alert("Une erreur s'est produite lors de la suppression du fleuriste");
    }
}
}
