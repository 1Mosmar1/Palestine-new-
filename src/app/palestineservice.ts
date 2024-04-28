import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
    
})
export class palestineservice {
    
    url : string="http://localhost/Back-end/palestine.php";

    constructor(public http: HttpClient){}
    modifyutilisateur(newusers : any) {
        console.log(newusers);
        return this.http.put(this.url,newusers);
    }

    ajout(user:any){
        return this.http.post(this.url,user)
    }
    getalluser(){
        return this.http.get(this.url);
    }
    getuser(id:any )
  {
    return this.http.get(this.url)
  }
  supprimeuser(id: number): Observable<any> {
    console.log(id);
    const deleteUrl = `${this.url}?id=${id}`;
    return this.http.delete(deleteUrl);
  }
    addpost(post:any){
        return this.http.post(this.url,post)
    }
    getallpost(){
        return this.http.get(this.url);

    }

}
