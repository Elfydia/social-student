import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss'],
})
export class ContactDashboardComponent implements OnInit {

  public title : String;
  public contacts : Array<any>;

  constructor() { }

  ngOnInit() : void {
    this.title = "My Contacts";
    this.contacts = [
      { name :"Cyril", addedToContact : false }, 
      { name :"Grégory", addedToContact : false },
      { name :"Etienne", addedToContact : false },
      { name :"Monia", addedToContact : false },
      { name :"Charif", addedToContact : false },
      { name :"Sébastien", addedToContact : false },
      { name :"Philippe", addedToContact : false },
      { name :"Bruno", addedToContact : false },
      { name :"Clément", addedToContact : false }
    ];
  }

  deleteContact(contact : any){
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  addContact(contact : any){
    contact.addedToContact = true;
  }

}
