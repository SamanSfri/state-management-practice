import { Component, OnInit } from '@angular/core';
import { ButtonStateName, StateInterface } from '../../shared';
import { StateService } from '../../shared';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-state-button',
  imports: [NgClass],
  templateUrl: './state-button.component.html',
  styleUrl: './state-button.component.scss'
})
export class StateButtonComponent implements OnInit{
  protected currentStateName: ButtonStateName = 'Idle';
  protected currentStateObject!: StateInterface;
  
  constructor (private stateService: StateService) {}

  private mockSubmitForm() { 
    setTimeout(() => {
      
      if (Math.random() > 0.5) {
        this.transitionTo('Success');
        setTimeout(() => this.transitionTo('Idle'), 3000);
      }
      else {
        console.log('API failed');
        setTimeout(() => this.transitionTo('Idle'), 3000)
      }
    });
  }

  private transitionTo(newState: ButtonStateName) {
    this.currentStateName = newState;
    this.currentStateObject = this.stateService.getState(newState);

    if (newState === 'Loading') {
      this.mockSubmitForm();
    }
  }

  protected handleClick = () => {
    this.currentStateObject.handleClicked(this);
  }

  public get buttonText(): string {
    return this.currentStateObject?.getText();
  }

  public get isDisabled(): boolean {
    return this.currentStateObject?.getDisabled();
  }

  public get buttonColor(): string {
    return this.currentStateObject.getTheme();
  }

  ngOnInit(): void {
    this.transitionTo(this.currentStateName);
  }
}
