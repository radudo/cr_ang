import { Injectable } from '@angular/core';
import { Provider } from './provider.model';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  formData: Provider;

  constructor() { }

  postProvider(formData: NgForm) {

  }
}
