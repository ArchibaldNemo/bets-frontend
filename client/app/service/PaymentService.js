class PaymentService {

  constructor($http, $rootScope) {
    'ngInject';
    this.hostUrl = _API_;
    this.$http = $http;
    this.$rootScope = $rootScope;
  }

  yandexMoneyPay(paymentData) {
    return this.$http({
        method: "POST",
        url: 'https://money.yandex.ru/quickpay/confirm.xml',
        params: {
          'receiver' : '410013085773025',
          'quickpay-form' : 'shop',
          'targets' : 'Пополнение счета',
          'paymentType' : paymentData.paymentType,
          'sum' : paymentData.depositValue,
          'label' : paymentData.userId
        },
        headers: { "Content-Type": "text/html; charset=utf-8",
                  "Access-Control-Allow-Origin": "*"}})
      .then((response) => {
        console.log('Payment Data===', response);
        return response;
      })
      .catch((error) => alert(error.data));
  }
}

export default PaymentService;
