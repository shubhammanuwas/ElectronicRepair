import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loading: any
  additem: any;
  constructor(private itemService: ItemService, private fb: FormBuilder,private routes: Router) {
    this.additem = fb.group(
    {
      image: ['',Validators.required],
      name: ['',Validators.required],
      category: ['',Validators.required],
      charge: ['',Validators.required],
      description: ['',Validators.required]
      
    })
   }
 
  ngOnInit(): void {
    this.loaditems()
  }
  loaditems(){
    this.itemService.getItem().subscribe((data:any)=>{
      console.log(data)
      this.loading = data;
    })
  }
  onSubmit(){
    console.log(this.additem.value)
    this.itemService.additem(this.additem.value).subscribe((data:any)=>{
      console.log(data)
      this.additem.reset()
      this.loaditems()
    })
  }
  delete(datas:any){
    this.itemService.deleteStudent(datas._id).subscribe(data=>{
      console.log(data)
      this.loaditems()
    })
  }
}
