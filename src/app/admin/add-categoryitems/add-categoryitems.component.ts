import { ServiceService } from 'src/app/services/service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-categoryitems',
  templateUrl: './add-categoryitems.component.html',
  styleUrls: ['./add-categoryitems.component.css']
})
export class AddCategoryitemsComponent implements OnInit {
   addCategoryItemForm=this.fb.group({
    categoryId:['',[Validators.required,Validators.pattern('[0-9]*')]],
    companyName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    description:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
 
   })
   image: any;
   imageSrc = '';
   fileData?: File;
  constructor(private fb:FormBuilder,private db:ServiceService) { }

  ngOnInit(): void {
  }
  addCategoryItem(){
  
    if(this.addCategoryItemForm.invalid){
      return;
    }
    const data:any=this.addCategoryItemForm.value
    const formData:any=new FormData()
    if (this.fileData !== undefined && this.fileData != null) {
      formData.append('image', this.fileData);
    }
    Object.keys(data).forEach((key:any)=>{
      formData.append(key,data[key])
    })
      const result=this.db.addCategoryItem(formData)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          
        }
      },result=>{
        alert(result.error.message)
      })
    }
    

    handleInputChange(fileInput: any) {
      const file = fileInput.dataTransfer ? fileInput.dataTransfer.files[0] : fileInput.target.files[0];
      // this.fileData = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      this.fileData = <File>fileInput.target.files[0];
      const pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        // this.toast.error('Invalid format');
        return;
      }
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  
    _handleReaderLoaded(e:any) {
      const reader = e.target;
      this.imageSrc = reader.result;
    }
  
}
