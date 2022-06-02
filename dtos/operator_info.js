const DTO = require('../modules/dto');

module.exports = new DTO([], {
  postProcess(result, operatorInfo) {
    return Object.assign(result, {
      id:                   operatorInfo.project,
      name:                 operatorInfo.project,
      region:               operatorInfo.country,
      operator_id:          operatorInfo.id,
      main_currency:        operatorInfo.currency,
      supported_currencies: [operatorInfo.currency],
      main_language:        operatorInfo.locale,
      supported_languages:  [operatorInfo.locale],
      base_timezone:        operatorInfo.time_offset,
      regulatory_metadata:  '',
      kyc_metada:           '',
      hero_color:           '',
      fav_icon:             operatorInfo.favicon,
      logo:                 operatorInfo.logo
    });
  }
});
