
const DataFormMixin = {

  install (Vue, options) {
    Vue.mixin({

      data: function () {
        return {

          createTableForm: {
            set: {
              title: 'Добавление новой таблицы',
              event: 'add_table',
              icon: 'playlist_add',
              btn: 'Сохранить',
              display: 'block'
            },
            item: {
              name: { label: 'Имя таблицы', value: '' },
              auto: { label: 'Поле autoincrement', value: 'id' }
            }
          },

          createUserForm: {
            set: {
              title: 'Добавление нового пользователя',
              event: 'add_user',
              icon: 'playlist_add',
              btn: 'Сохранить',
              display: 'block'
            },
            item: {
              name: { label: 'Имя пользователя', value: '' },
              password: { label: 'Пароль', value: '' }
            }
          },

        }
      }

    })
  }
}

export default DataFormMixin
