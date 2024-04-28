import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user';
import { palestineservice } from '../palestineservice';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-lost-person',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterLink],
  templateUrl: './add-lost-person.component.html',
  styleUrl: './add-lost-person.component.scss',
  providers: [palestineservice]
})
export class AddLostPersonComponent {
  constructor(public ps: palestineservice){}
  utilisateur:User={
    id : 0,
    nom : '',
    prenom :'',
    tel :"+970",
    email :'',
    mdp :'',
    loc :''
  
  }
  ajout():void{{
    const user = {
      id : this.utilisateur.id,
      nom : this.utilisateur.nom,
      prenom : this.utilisateur.prenom,
      tel : this.utilisateur.tel,
      email : this.utilisateur.email,
      mdp : this.utilisateur.mdp,
      loc : this.utilisateur.loc,


    };
  this.ps.ajout(user).subscribe({
    next: (Response) => {
      console.log(response);
      alert("l'utilisateur ajoutée avec succées");
    },
    error: (error) => {
      console.error("erreur en ajout utlisateur:",error);
      alert("il y a une erreur lors de l'ajout du l'utilisateur");
    }
  })
}
  


}
}