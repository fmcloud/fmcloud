import {Page, NavController} from 'ionic-angular';
import {FormBuilder, Validators} from 'angular2/common'
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


@Page({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  static get parameters(){
    return [[Http],[NavController],[FormBuilder]];
  }
  constructor(http, nav, formBuilder) {
    this.nav = nav;
    this.formBuilder = formBuilder;
    this.http = http;
    this.myForm = formBuilder.group({
      description: [''],


});
}

    saveForm(){
    let data = this.myForm.value;


    

    this.http.post('http://68.195.201.38:1337/project').map(res =>res.json())
    .subscribe(data =>{
      this.posts = data.data;
    });
    console.log(this.posts);
}
}
