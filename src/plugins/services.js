import { mapGetters, mapActions} from 'vuex';

const Http = {

  install (Vue, options) {
    Vue.mixin({

      data: function () {
        return {
          apiUrl: apiUrl,
          errorTitle: '',
          responseError: []
          // apiUrl: 'http://bolderfest.ru/CONTROL_DB_INTERFACE/api.php',
        }
      },

      methods: {

        ...mapActions([
          'changePreloader',
        ]),

        http (url = '', data = [], method = 'get') {
          if (url) url = '/' + url
          var uri = this.apiUrl + url

          this.changePreloader(true);

          return new Promise((resolve, reject) => {
            this.$http[method](uri, data).then(response => {
              var result = this.checkResponse(response)

              this.changePreloader(false);

              var err = {
                result: result,
                body: response.body,
                response: response
              }
              let bodyText = ''
              if (response.bodyText)
                 bodyText = response.bodyText

              if (result === false)  {
                  this.warn(`Ошибка на сервере <br>(Получена строка вместо массива) <br>${bodyText} `)
                  lg(err)
                  return false
              }

              resolve(result)

            }, response => { // error callback
              this.responseError.push(response)
              console.log('Request Error')
            })

          })
        },

        checkResponse (response) {
          var result = []
          try {
            // result = JSON.parse(response.body);
            result = response.body
          } catch {
            this.httpError(response.body)
            return false
          }

          var dataType = typeof (response.body)
          if (dataType !== 'object') {
            this.httpError(response.body)
            return false
          }

          if (result.error) {
            this.httpError(result.error)
            return false
          } else {
            if (result.data.error) {
              this.httpError(result.data.error)
              return false
            }
          }

          // if(!result.data) result.data = 1;
          return result.data
        },

        httpError (data, title = '') {
          this.errorTitle = title
          var err = { title, data }
          lg(err)
          // this.responseError.push(data);
        }

      }

    })
  }
}

export default Http
