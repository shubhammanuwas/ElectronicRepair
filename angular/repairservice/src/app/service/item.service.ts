import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public search=new BehaviorSubject<String>("");
  constructor(private http: HttpClient) { }
  additem(item:any){
    return this.http.post('http://localhost:3000/services/add-item',item)
  }
  editItem(id:any){
    return this.http.get('http://localhost:3000/services/edit/'+id)
  }
  getItem(){
    return this.http.get('http://localhost:3000/services')
  }
  deleteStudent(id:any){
    return this.http.delete('http://localhost:3000/services/delete/'+id)
  }
}
