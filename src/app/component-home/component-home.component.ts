import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/models/clientModel';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class ComponentHomeComponent implements OnInit {

  adunits: Client[];
  constructor(private adunitservice: ClientService ) {}

  ngOnInit() {
    this.adunitservice.getClient().subscribe((data: Client[]) => {
      this.adunits = data;
      console.log('==========>', data);
    });

  }

}
