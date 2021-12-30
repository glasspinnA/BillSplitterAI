export enum PaymentMode {
  INCOME_BASED_PAYED = 0,
  EVEN_PAYED = 1,
}

export const getPaymentModeName = (paymentMode: PaymentMode): string => {
  return paymentMode == PaymentMode.EVEN_PAYED ? "Even Payed" : "Income based";
};
