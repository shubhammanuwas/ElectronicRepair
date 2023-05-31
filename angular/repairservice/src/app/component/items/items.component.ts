import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
selector: 'app-items',
templateUrl: './items.component.html',
styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

constructor(private itemService : ItemService, private routes : Router) { }
loading:any
searchKey:string="";
public filterCategory: any;
public searchTerm:string='';


ngOnInit(): void {
this.loaditems()

this.itemService.search.subscribe((val:any)=>{
this.searchKey=val;
})
}


loaditems(){
this.itemService.getItem().subscribe((data:any)=>{
console.log(data)
this.loading = data;
this.filterCategory = data;
})
}


search(event:any){
this.searchTerm=(event.target as HTMLInputElement).value;
console.log(this.searchTerm);
this.itemService.search.next(this.searchTerm);
}

filter(category:string){
this.filterCategory=this.loading.filter((a:any)=>{
if(a.category==category || a.category==''){
return a;
}
})
}
}

