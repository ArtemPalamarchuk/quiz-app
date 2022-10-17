// format camel case to kebab case: forExample => for-example
export const camelToKebab = (str: string) =>
  str.split('').map(el => el === el.toUpperCase() ? `-${el.toLowerCase()}` : el).join('');
