import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  url:string = "https://localhost:44369/";

  constructor(private http : HttpClient) { }

  UserRegister(username:string, useremail:string, userphone:string, userpassword :string
    ,userapartment:string, userstreet:string, usertown:string, userstate:string, userpincode:string,
    usercountry:string):Observable<any>{
      const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
      return this.http.post<any>(this.url+"RegisterUser?useremail="+useremail+"&username="+
      username+"&userphone="+userphone+"&userpassword="+userpassword+"&userapartment="+
      userapartment+"&userstreet="+userstreet+"&usertown="+usertown+"&userstate="+userstate
      +"&userpincode="+userpincode+"&usercountry="+usercountry, httpheader);
    }

}
