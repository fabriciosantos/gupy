import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  result: any;
  constructor(private http: HttpClient) {}

  addUser(obj) {
    const uri = 'http://localhost:8080/users';

    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getUsers() {
    const uri = 'http://localhost:3000/users';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editUser(id) {
    const uri = 'http://localhost:3000/users/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateUser(name, price, id) {
    const uri = 'http://localhost:3000/users/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteUser(id) {
    const uri = 'http://localhost:3000/users/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              return res;
            });
  }
}
