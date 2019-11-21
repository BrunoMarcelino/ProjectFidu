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
  public test;


  constructor(private adunitservice: ClientService ) {}

  // Use of the Service for get Data

  ngOnInit() {
    this.adunitservice.getClient().subscribe((data: Client) => {
      this.adunits = data;
      console.log('==========>', data.operations);


      // filter montant;
      console.log('============== log Montant ===============');
      this.montants = data.operations.map(x => x.Montant);
      console.log(this.montants);

      for (let i = 0; i < this.montants.length; i++){

        let ResultArrayMontant = this.montants[i];
        console.log("montant=====>", ResultArrayMontant);

        if(ResultArrayMontant > 0) {
          this.test = true ;
        }else {
          this.test = false;
        }

      }
    });
  }
}
