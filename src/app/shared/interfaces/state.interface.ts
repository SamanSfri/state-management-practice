export interface StateInterface {
  getText: () => string;
  getDisabled: () => boolean;
  handleClicked: (context: any) => void;
  getTheme: () => string;
}

export type ButtonStateName = 'Idle' | 'Loading' | 'Success';