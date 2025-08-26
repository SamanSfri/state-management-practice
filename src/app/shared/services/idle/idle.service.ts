import { Injectable } from '@angular/core';
import { StateInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IdleService implements StateInterface {

  getText(): string {
    return 'Submit'
  };

  getTheme(): string {
    return 'test'
  }

  getDisabled(): boolean {
    return false;
  }

  handleClicked(context: any): void {
    
    context.transitionTo('Loading');
  }
}
