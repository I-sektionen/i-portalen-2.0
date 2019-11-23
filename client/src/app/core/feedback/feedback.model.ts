export const enum FeedbackMessage {
  Custom,
  DefaultError = 'Något gick fel.',
  Login = 'Du har loggats in.',
  Admin = 'Du har inte tillåtelse att besöka den sidan.',
  Auth = 'Du måste logga in för att kunna besöka den sidan.',
  TextEdit = 'Text uppdaterad.'
}

export const enum FeedbackType {
  Default,
  Error = 'errorSnackbar',
  Primary = 'primarySnackbar',
  Accent = 'accentSnackbar',
}

export interface FeedbackConfig {
  message: FeedbackMessage;
  type: FeedbackType;
  customMessage?: string;
  actionText?: string;
}
