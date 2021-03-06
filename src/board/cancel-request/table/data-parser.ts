import {getTimeString} from '@src/lib/DateParser';
import {addDashToPhoneNumber} from '@src/lib/PhoneNumberParser';

import {CancelRequest} from '@src/types';

export const parseTable = (table: CancelRequest[]) =>
  table ? table.map(record => parseRecord(record)) : null;

export const parseRecord = (record: CancelRequest) => {
  const result = {
    ...record,
    paidAt: getTimeString(record.paidAt),
    requestedAt: getTimeString(record.requestedAt),
    confirmedAt: getTimeString(record.confirmedAt),
    itemNames: record.itemNames.join('-'),
    options: record.options.map(v => v.join('/')).join(','),
    buyerPhone: record.buyerPhone
      ? addDashToPhoneNumber(record.buyerPhone)
      : null,
    orderAddressPhone: record.orderAddressPhone
      ? addDashToPhoneNumber(record.orderAddressPhone)
      : null,
  };
  Object.keys(result).forEach(key => {
    if (!result[key] || result[key] === undefined) {
      result[key] = '';
    }
  });
  return result;
};
