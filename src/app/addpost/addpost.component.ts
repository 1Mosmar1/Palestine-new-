import { Component } from '@angular/core';
import { palestineservice } from '../palestineservice';
import { Post } from '../model/post';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.scss',
  providers: [palestineservice]
})
export class AddpostComponent {
  constructor(public ps: palestineservice){}
  publication:Post={
    id_post:'',
    title: '',
    photo: '',
    comments: '',
  }
  addpost():void{{
    const post = {
      id_post : this.publication.id_post,
      title : this.publication.title,
      photo : this.publication.photo,
      comments : this.publication.comments,


    };
  this.ps.addpost(post).subscribe({
    next: (Response) => {
      console.log(response);
      alert("la publication ajoutée avec succées");
    },
    error: (error) => {
      console.error("erreur en ajout la publication:",error);
      alert("il y a une erreur lors de l'ajout d'une publication");
    }
  })
}
  


}

}
