import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import classes which are required for reactive forms
import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule,ReactiveFormsModule,ButtonsModule,AlertModule,BsDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder, Validators , FormControl]
})
export class AppComponent {
  title = 'ProjectNo1';
  constructor(public fbobj : FormBuilder)
{
}

  ProjectNo1 = this.fbobj.group(
  {
    // Add Multiple validations
    
    email : ['',[Validators.required]],
    State :['', [Validators.required] ],
    Country: ['null', [Validators.required]],
    checkbox1: [false], // Initialize checkbox1 to false
    checkbox2: [false] // Initialize checkbox2 to false
    
    
  }
);

// Method to set FormControl fields through program
SetData()
{
  this.ProjectNo1.setValue(
    {
      
      email : 'abcd@gmail.com',
      State:  'abcd',
      Country:'null' ,
     checkbox1:false,
     checkbox2:false,
      
      
    }
  )
}
}

