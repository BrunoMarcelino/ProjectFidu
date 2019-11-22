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

  public adunits: Client;
  public montants ;

  constructor(private adunitservice: ClientService ) {}

  // Use of the Service for get Data
  ngOnInit() {
    this.adunitservice.getClient().subscribe((data: Client) => {
      this.adunits = data;

      // filter montant;
      this.adunits.operations = this.adunits.operations.map(current => {
        current.Montant = parseFloat(current.Montant.replace(",","."));
        return current;
      });
    });
  }
}
