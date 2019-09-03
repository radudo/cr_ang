import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/provider.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor(private service: ProviderService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this.service.formData = {
        Id: null,
        Name: '',
        Key: '',
        Description: '',
        ContactPerson: '',
        ContactEmail: '',
        ContactPhone: '',
        Blocked: false,
        ApiKey: ''
      };
    }
  }
}
