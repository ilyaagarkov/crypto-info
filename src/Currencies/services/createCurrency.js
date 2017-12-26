// @flow

import type {Currency, CurrencyFromApi, FiatCurrency} from "../types";

function createCurrency (data: CurrencyFromApi, fiat: FiatCurrency) : Currency {

  const fiatSuffix = fiat.toLowerCase();
  return {
    ...data,
    get volume24h() {
      return data[`24h_volume_${fiatSuffix}`];
    },
    get market_cap() {
      return data[`market_cap_${fiatSuffix}`];
    },
    get price(){
      return data[`price_${fiatSuffix}`];
    }
  }

}

export default createCurrency;

