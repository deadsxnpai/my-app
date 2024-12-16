export type AuthMePositionItem = {
    position_name: string,
    position_type: string,
    isTeacher: boolean,
    isEffective: boolean,
  }
  
  type DataMeContactItem = {
    kind_contact_information: string,
    type_contact_information: string,
    value: {
      value: string,
      type: string,
      comment?: string,
      addressType?: string,
    },
    represent: string,
  }
  
  type DataMe = {
    date_of_birth: string,
    sex: string,
    inn: string,
    snils: string,
    place_of_birth: string,
    full_name: string,
    surname: string,
    name: string,
    patronymic: string,
    country: string,
    country_name: string,
    document_type: string,
    document_type_notion: string,
    document_series: string,
    document_number: string,
    document_date_issue: string,
    document_was_issued_by: string,
    document_department_code: string,
    guidspd: string,
    partner_asu: string,
    guid: string,
    origin: string,
    personal_accounts: {},
    contacts: DataMeContactItem[]
  }
  
  export type AuthMe = {
    groups: string[],
    positions: AuthMePositionItem[],
    loggedIn: boolean,
    access_token: string,
    ip: string,
    uid: string,
    sub: string,
    GUIDSPD: string,
    name: string,
    email: string,
    email_work: string,
    data: DataMe,
    isScientificAdviser: boolean
  }
  