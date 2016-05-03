import {Page} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  static get parameters(){
    return [[Http]];
  }
  constructor(http) {
    this.http = http;

    this.http.get('http://68.195.201.38:1337/project/').map(res =>res.json())
    .subscribe(data =>{
      this.posts = data
    });
    console.log(this.posts);
  }
}
