export interface Ip2WhoIsResponse {
  domain: string;
  status: string;
  create_date: string;
  update_date: string;
  expire_date: string;
  registrar: Ip2WhoIsRegistrar;
  registrant: Ip2WhoIsRegistrant;
  nameservers: string[];
}

export interface Ip2WhoIsError {
  error: {
    error_code: number;
    error_message: string;
  };
}

interface Ip2WhoIsRegistrar {
  name: string;
}

interface Ip2WhoIsRegistrant {
  name: string;
  organization: string;
}
