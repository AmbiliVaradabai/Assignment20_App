import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import saveAs from  'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents = []
  fileUpload = {status: '', message: '', filePath: ''};
  profileForm : FormGroup;
  constructor(private _user:UserService,
              private fb:FormBuilder,
              private _router:Router
            ) { }

  ngOnInit() {
    this.getAllDocuments();
    this.profileForm = this.fb.group({
      file :[''],
      description:['']
    });
  }


  goBacktoUsers(){
    this._router.navigate(['users'])
  }
  
  getAllDocuments(){
    this._user.getAllDocuments()
    .subscribe(
      res => {this.documents = res, console.log(this.documents)},
      err => console.log (err)
    )  
  } 

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('file').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.profileForm.get('file').value);
    formData.append('description', this.profileForm.get('description').value);
    console.log(this.profileForm.get('description').value)
    this._user.UploadFile(formData).subscribe(
      res => {this.fileUpload = res, this.getAllDocuments()},
      err => console.log (err)
    );
  }

  downloadFile(filename, originalFileName){
    this._user.downloadFile(filename).subscribe(
      data => saveAs(data, originalFileName),
      err => console.log (err)
    );
  }

  deleteFile(filename){
    this._user.deleteFile(filename).subscribe(
      res => {console.log (res); this.getAllDocuments()},
      err => console.log (err)
    );
  }


  // download() {
  //   let filename = "/Path/to/your/report.pdf";
  //   this.api.downloadFile(filename).subscribe(
  //     data => {
  //       saveAs(data, filename);
  //     },
  //     err => {
  //       alert("Problem while downloading the file.");
  //       console.error(err);
  //     }
  //   );
  // }
  
}
