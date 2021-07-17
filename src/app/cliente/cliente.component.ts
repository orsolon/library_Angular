import { Component, OnInit } from '@angular/core';
import { User } from './usuario.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  users: User[] = [];

//   users: User[] = [{
//     id: 1,
//     name: "Debora Orsolon",
//     cpf: "333.333.111-30",
//     email: "debora@gmail.com",
//     password: '123'
//   },
//   {
//     id: 2,
//     name: "Marco Antonio",
//     cpf: "111.333.111-30",
//     email: "marco@gmail.com",
//     password: '300400'
//   },
//   {
//     id: 3,
//     name: "Rodrigo Vargas",
//     cpf: "612.321.111-30",
//     email: "rodvargas@gmail.com",
//     password: '9878'
//   },
//   {
//     id: 4,
//     name: "Maria da Dores ",
//     cpf: "123.321.555-30",
//     email: "maria@gmail.com",
//     password: '9876783'
//   },
// ]

  constructor() { }

  ngOnInit(): void {
  }

  onUserCreated(event: any) {
    this.users.push(event);
    this.users.forEach((user, i) => {
      user.id = i + 1;
    })
    console.log(this.users);
  }

}
