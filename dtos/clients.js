const crypto = require('crypto');

const DTO = require('../modules/dto');

module.exports = new DTO([{
  name: 'id',
  table: 'users',
  column: 'id',
}, {
  name: 'username',
  table: 'users',
  column: 'username',
}, {
  name: 'name',
  table: 'users',
  column: 'f_name',
}, {
  name: 'surname',
  table: 'users',
  column: 'l_name',
}, {
  name: 'currency',
  table: 'users',
  column: 'currency',
}, {
  name: 'registration_date',
  table: 'users',
  column: 'created',
}, {
  name: 'address',
  table: 'users',
  column: 'address',
}, {
  name: 'phone',
  table: 'users',
  column: 'phone',
}, {
  name: 'email',
  table: 'users',
  column: 'e_mail',
}, {
  name: 'country',
  table: 'users',
  column: 'country',
}, {
  name: 'timezone',
  table: 'users',
  column: 'timezone',
}, {
  name: 'birthday',
  table: 'users',
  column: 'birthday',
}, {
  name: 'sex',
  table: 'users',
  column: 'gender',
}], {
  postProcess(result, user, operatorInfo) {
    return Object.assign(result, {
      id:                         user.id,
      operator_id:                operatorInfo.project,
      username:                   user.username,
      name:                       user.f_name,
      surname:                    user.l_name,
      middle_name:                '',
      currency:                   user.currency,
      registration_date:          user.created,
      password:                   crypto.createHash('md5').update('_' + user.password).digest('hex'),
      active:                     Boolean(user.active),
      verified:                   false,
      blocked:                    Boolean(user.deleted),
      email_verified:             false,
      phone_verified:             false,
      test:                       false,
      online:                     '',
      language:                   '',
      address:                    user.address, 
      phone:                      user.phone,
      email:                      user.e_mail,
      country:                    user.country,
      city:                       '',
      region:                     '',
      timezone:                   user.timezone,
      birthday:                   user.birthday,
      sex:                        user.gender,
      document_number:            '',
      general_status:             '',
      self_excluded:              '',
      communication_preferences:  '',
      btag:                       '',
      reference_params:           ''
    })
  }
});
