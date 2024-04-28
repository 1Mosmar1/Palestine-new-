import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { palestineservice } from '../palestineservice';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pubpost',
  standalone: true,
  imports: [FormsModule,CommonModule,MatCardModule,HttpClientModule],
  templateUrl: './pubpost.component.html',
  styleUrl: './pubpost.component.scss',
  providers: [palestineservice]
})
export class PubpostComponent {
onSubmit() {
throw new Error('Method not implemented.');
}

constructor(public ps: palestineservice){}
publication:any=[] ;
  ngOnInit(){
    this.ps.getallpost().subscribe({
      next: (response) => {
        this.publication = response ;

      },
      error: (error) => {
        console.error("erreur en recuperation les données :",error);
        alert("une erreur de ce prodouit lors de l'affichage les données");
      }
    });
}
}
