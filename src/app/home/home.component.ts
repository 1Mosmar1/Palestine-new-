import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from '../signup.service';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FormsModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [SignupService]
})
export class HomeComponent {
  backgroundImageUrl = 'url("/assets/palestine.jpg")';
  constructor(public ss: SignupService){}
  utilisateur:User={
    id : 0,
    nom : '',
    prenom :'',
    tel :"+970",
    email :'',
    mdp :'',
    loc :'',
  
  }

  public inscrituser():void{
    const newuser = {
      nom : this.utilisateur.nom,
      prenom : this.utilisateur.prenom,
      tel : this.utilisateur.tel,
      email : this.utilisateur.email,
      mdp : this.utilisateur.mdp,
      loc : this.utilisateur.loc,
  };
  console.log (newuser);

  this.ss.inscrituser(newuser).subscribe({
    next: (response) => {
      console.log(newuser);
      alert("compte crée avec succés");
    },
    error: (error) => {
      console.error("erreur lors de l'ajout",error);
      alert("une erreur s'est produite lors l'ajout d'utilisateur")
    }
  });
  }
  public submite(): void {
    console.log("submite clicked");
  }

  }

