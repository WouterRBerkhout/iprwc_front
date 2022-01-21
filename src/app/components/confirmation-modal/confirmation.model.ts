export class ConfirmationModel {
  constructor(public title: string, public handler: () => void) {}
}
