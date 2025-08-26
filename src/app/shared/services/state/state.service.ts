import { Injectable, Injector } from '@angular/core';
import { ButtonStateName, StateInterface } from '../../interfaces';
import { IdleService } from '../../services';
import { LoadingService } from '../../services';
import { SuccessService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateMap: Map<ButtonStateName, any>;

  constructor (private injector: Injector) {
    this.stateMap = new Map([
      ['Idle', IdleService],
      ['Loading', LoadingService],
      ['Success', SuccessService],
    ]);
  }

  getState(stateName: ButtonStateName): StateInterface {
    const stateService = this.stateMap.get(stateName);

    return this.injector.get(stateService)
  }
}
