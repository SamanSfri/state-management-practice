import { Injectable } from '@angular/core';
import { StateInterface } from '../../interfaces/state.interface';

@Injectable({
  providedIn: 'root'
})
export class SuccessService implements StateInterface {

  getDisabled(): boolean {
    return true;
  }

  getText(): string {
    return 'Success'
  }

  handleClicked(context: any): void {
    console.log('in success class:',context)
  }

  getTheme(): string {
    return 'success'
  }
}
