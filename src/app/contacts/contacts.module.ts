import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactDiscussionComponent } from './contact-discussion/contact-discussion.component';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactSearchComponent,
    ContactDiscussionComponent,
    ContactDashboardComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
