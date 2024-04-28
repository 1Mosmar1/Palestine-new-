import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.serice';
import { Router } from '@angular/router';
interface personobject{
  mail : string ;
  password : string ;
  role : string ;
}

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' ,
  providers:[AuthService]
})
export class LoginComponent {
  backgroundImageUrl = 'url("/assets/palestine.jpg")';
  person : personobject = {
    mail: '',
    password: '',
    role: ''
  }; 
  constructor(private authService: AuthService, private router: Router){}
  login():void{
    const newPerson = {
      mail: this.person.mail,
      password: this.person.password,
    };
    this.authService.login(newPerson).subscribe({
      next: (response) => {
        if (response && response.token){
          localStorage.setItem ('token',response.token);
          this.validateTokenAndRedirect(response.Token);
          
        }else{
          console.error('no token found in response');
        }
      },
      error: (error) => {
        console.error('login failed:',error);
      }
    });
  }
  validateTokenAndRedirect(token: string): void {
    this.authService.validateToken(token).subscribe({
      next: (response) => {
        console.log(response);
        if (response && response.data && response.data.role){
          const role = response.data.role;
          if (role === 'admin') {
            this.router.navigate(['/admin']);
          }else if(role === 'user'){
            this.router.navigate(['/']);
          }else{
            console.error('Unauthorized role :',role);
          }
        }else{
          console.error('role not found in response');
        }
      },
      error: (error) => {
        console.error('Token validation failed :', error);
      }
    });
  }
  
  
  }


