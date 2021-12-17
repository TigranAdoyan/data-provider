/**
 * @param {import("../types").db.Operator} operatorInfo 
 */
module.exports = (operatorInfo) => {
  return {
    id: operatorInfo.id,                           // ?
    Name: operatorInfo.project,
    Region: operatorInfo.country, 
    operator_id: operatorInfo.id,                  // ?
    main_currency: operatorInfo.currency,
    supported_currencies: [operatorInfo.currency],
    main_language: operatorInfo.locale,            // ?
    supported_languages: [operatorInfo.locale],    // ?
    base_timezone: '',                             // ?
    regulatory_metadata: '',                       // ?
    kyc_metada: '',                                // ?
    hero_color: '',                                // ?
    fav_icon: operatorInfo.favicon,
    logo: operatorInfo.logo
  };
};
