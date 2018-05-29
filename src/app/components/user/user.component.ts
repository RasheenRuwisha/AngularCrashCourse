import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address:  Address;
  hobbies: string[];
  hello: any;
  posts: Post[]
  isEdit:boolean = false;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.name = 'Jane Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'NY',
      state: 'NY'
    };
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts) =>{
      console.log(posts);
      this.posts = posts;
    });
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  onClick() {
    this.name = "Jane";
    this.hobbies.push("new hobby");
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  };

  deleteHobby(hobby) {
    for(let i = 0; i< this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
  };



}


interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  albumid:number,
  id:number,
  title:string,
  url:string,
  thumurl:string
}
