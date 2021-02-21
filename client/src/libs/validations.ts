export const isRequired = (value: string): false | 'Required' =>
  value ? false : 'Required';

// eslint-disable-next-line no-useless-escape
const mailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const isEmail = (value: string): false | 'is not Email' =>
  value.match(mailRegexp) ? false : 'is not Email';

export const minValue = (min: number) => (value: string): false | string =>
  value.length >= min ? false : `Should be greater than ${min}`;

export const composeValidators = (...validators: any[]) => (
  value: string,
): false | string =>
  validators.reduce((error, validator) => error || validator(value), false);

export const getValidateFunction = (
  type: string,
): ((_value: string) => string | false) => {
  if (type === 'email') return composeValidators(isRequired, isEmail);
  if (type === 'password') return composeValidators(isRequired, minValue(6));
  return composeValidators(isRequired);
};
