import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editItem:any;
  id: any;
  additem: any;
  constructor(private url:ActivatedRoute,private itemService: ItemService, private fb: FormBuilder,private routes: Router) {
    this.editItem = fb.group(
    {
      image: ['',Validators.required],
      name: ['',Validators.required],
      category: ['',Validators.required],
      charge: ['',Validators.required],
      description: ['',Validators.required]
      
    })
  }
  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.itemService.editItem(this.id).subscribe(data=>{
      this.edititem.patchValue(data);
    });
    }


    onSubmit(){
      console.log(this.additem.value);
      this.itemService.updateItem(this.additem.value).subscribe((data:any)=>{
        console.log(data);
        this.routes.navigate(['/admin']);
      })
    }

}
