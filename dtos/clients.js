/**
 * @param {import("../types").db.User} user 
 * @param {import("../types").db.Operator} operatorInfo 
 */
module.exports = (user, operatorInfo) => {
  return {
    id: user.id,
    operator_id: operatorInfo.name,                                // ?
    username: user.username,
    name: user.f_name,
    surname: user.l_name,
    middle_name: '',
    currency: user.currency,
    registration_date: user.created,
    password: user.password,                     // add underscore hash md5
    active: Boolean(user.active),
    verified: false,
    blocked: Boolean(user.deleted),
    email_verified: false,
    phone_verified: false,
    test: false,                                // ?
    online: '',                                // ?
    language: '',                                // ?
    address: user.address, 
    phone: user.phone,
    email: user.e_mail,
    country: user.country,
    city: '',                                // ?
    region: '',                                // ?
    timezone: user.timezone,
    birthday: user.birthday,
    sex: user.gender,
    document_number: '',                                // ?
    general_status: '',                                // ?
    self_excluded: '',                                // ?
    communication_preferences: '',                                // ?
    btag: '',                                // ?
    reference_params: ''                                // ?
  };
};
