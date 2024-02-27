export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface ICandidate {
  name: string;
  image: string;
  verified: boolean;
  location: string;
  role: string;
  nationality: string;
  availability: string;
  experience: string;
  drivingLicense: string;
  accomodationSupportRequired: boolean;
  skills: string[];
}
