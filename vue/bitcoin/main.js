const app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true,
  },
  mounted: function () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(
        function (response) {
          // console.log(response.data.bpi);
          this.bpi = response.data.bpi;
          // https://tadaken3.hatenablog.jp/entry/vue-scope-this
          // コールバック関数内のため、thisの呼び出しもとはグローバル
          // https://qiita.com/yuku_t/items/1e88b198e2b0ddb21520
        }.bind(this)
      )
      .catch(
        function (error) {
          this.hasError = true;
        }.bind(this)
      )
      .finally(
        function () {
          this.loading = false;
        }.bind(this)
      );
  },
  filters: {
    // filtersメソッド
    // https://jp.vuejs.org/v2/guide/filters.html
    currencyDecimal(val) {
      return val.toFixed(2);
    },
  },
});
