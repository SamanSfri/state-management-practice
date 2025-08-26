import { Injectable } from '@angular/core';
import { StateInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements StateInterface {
  getText(): string {
    return 'Loading'
  }

  getDisabled(): boolean{
    return true
  }

  handleClicked(context: any): void{
  }

  getTheme(): string {
    return  'loading'
  }
}
