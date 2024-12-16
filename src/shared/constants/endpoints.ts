export const DOMAIN = "lk-dev.tsutmb.ru"


export const BASE_URL = `https://${ DOMAIN }/api`

const redirect = () => (window.location.hostname === 'localhost' ? 'http://localhost:3000' : `https://${ DOMAIN }`)

export const EndPoints = {
  domain: DOMAIN,
  api: BASE_URL,
  wss: `wss://${ DOMAIN }/api`,
  avatar: `${ BASE_URL }/files/avatar`,
  upload: `${ BASE_URL }/files/commonStorage`,
  download: `${ BASE_URL }/files/uploads`,
  recordbook: `${ BASE_URL }/files/recordbooks`,
  reference: `${ BASE_URL }/files/references`,
  spy: `${ BASE_URL }/spy/set`,
  userpic: `${ BASE_URL }/files/userpic`,
  auth: `${ BASE_URL }/auth?redirect=${ redirect() }/`,
  endSession: `${ BASE_URL }/endSession?redirect=${ redirect() }/login`,
  front: redirect,
}
