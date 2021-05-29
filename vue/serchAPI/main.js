const app = new Vue({
  el: '#app',
  data: {
    items: null,
    keyword: '',
    message: '',
  },
  watch: {
    keyword: function (newkeyword, oldkeyword) {
      this.message = 'wating';
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    // this.keyword = 'javascript';
    // this.getAnswers();
    this.debouncedGetAnswer = _.debounce(this.getAnswers, 1000);
  },
  methods: {
    getAnswers: function () {
      if (this.keyword == '') {
        this.items = null;
        this.message = '';
        return;
      }

      this.message = 'Loading..';
      // axiosでvueインスタンスにアクセスするため、thisを保持
      const vm = this;
      console.log(this);
      let params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get('https://qiita.com/api/v2/items', { params })
        .then((response) => {
          console.log(response.data);
          vm.items = response.data;
        })
        .catch((error) => {
          vm.message = 'Error!!!!';
        })
        .finally(() => {
          vm.message = '';
        });
    },
  },
});
