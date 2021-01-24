export default interface ErrorModel {
  '@context': string,
  '@type': string,
  'hydra:description': string,
  'detail': string,
  'hydra:title': string,
  'trace': Object[]
};
