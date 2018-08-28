import { Injectable } from '@angular/core'; // injetsble is used to in
import {Http ,Response } from '@angular/http'; //
import {map} from 'rxjs/operators';
// used to convert the response into json (read only readble data exclude status ,contenttype etc. which was return from the serve)

@Injectable({
  providedIn: 'root' // if it is written here we donot need to incelude in providers
})
export class UserService {

  constructor(private _http: Http) { }

  add(data){
    return this._http.post("test/add", data).pipe(map(res:Response)=>{
          return res.json();
  }));

}

}
