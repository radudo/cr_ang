import { Injectable } from '@angular/core';
import { Provider } from './provider.model';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  formData: Provider;

  constructor() { }
}
