import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user';
import { palestineservice } from '../palestineservice';
import { CommonModule } from '@angular/common';
import { MenuLostPersonComponent } from '../menu-lost-person/menu-lost-person.component';
import { Router } from 'express';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-modify-lost-person',
  standalone: true,
  imports: [FormsModule,CommonModule,MenuLostPersonComponent,RouterLink],
  templateUrl: './modify-lost-person.component.html',
  styleUrl: './modify-lost-person.component.scss',
  providers: [palestineservice,MenuLostPersonComponent,RouterLink]
})
export class ModifyLostPersonComponent {
  constructor(private ps: palestineservice,private router: Router , public m:MenuLostPersonComponent){}
  utilisateur:User={
    id: 0,
    nom: '',
    prenom: '', 
    tel: "+970",
    email: '',
    mdp: '',
    loc: '',
  }
  modifyutilisateur(){
    const usertomodify ={
    id : this.m.id,
    nom : this.utilisateur.nom,
    prenom : this.utilisateur.prenom,
    tel : this.utilisateur.tel,
    email : this.utilisateur.email,
    mdp : this.utilisateur.mdp,
    loc : this.utilisateur.loc,
    }
    this.ps.modifyutilisateur(usertomodify).subscribe({
      next: (_response) => {
        console.log("utilisateur modifier avec succés");
        alert("utilisateur modifier avec succées");
      },
      error: (error) => {
        console.error("erreur en modifier utlisateur:",error);
        alert("il y a une erreur lors de modifier du l'utilisateur");
      }
    })
  }
}
