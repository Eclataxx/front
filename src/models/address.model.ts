export default interface AddressModel {
  '@id': string,
  '@type': string,
  street: string,
  country: string,
  postalCode: string,
  city: string,
  additionalStreetAddress: string
};
