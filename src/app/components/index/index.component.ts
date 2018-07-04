import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: [
    {
      "nome": "José",
      "telefone": "2345678",
      "cidade": "São Paulo"
    },
     {
      "nome": "Maria",
      "telefone": "2345678",
      "cidade": "São Vicente"
    }, {
      "nome": "Marcia",
      "telefone": "2345678",
      "cidade": "São Paulo"
    }, {
      "nome": "Marcus",
      "telefone": "2345678",
      "cidade": "São Paulo"
    }
  ];

  constructor(private http: HttpClient, private service: UserService) {}

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.service.getUsers().subscribe(res => {
    });
  }

  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
