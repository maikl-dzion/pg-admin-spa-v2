<template>
  <div class="row" style="">

    <div class="col-lg-5 col-md-8">

      <div class="card">

        <div class="card-body">
              <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder"> Запросы на выборку (select)</h6>
              <div class="form-group" style="width:100%">
                  <textarea v-model="sqlSelect"
                      class="form-control"
                      rows="6" style="width:100%" placeholder=""></textarea>
              </div>
              <button @click="sqlQueryRun('query')" style="border-radius: 0; " class="btn btn-outline-info"> Выполнить </button>
         </div>

        <div class="card-body">
            <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder"> Запросы на изменение (exec)</h6>
            <div class="form-group" style="width:100%">
                    <textarea v-model="sqlExec"
                              class="form-control"
                              rows="6" style="width:100%" placeholder=""></textarea>
            </div>
            <button @click="sqlQueryRun('exec')" style="border-radius: 0; " class="btn btn-outline-info"> Выполнить </button>
        </div>

      </div>


    </div> <!-- col-lg-6 -->

    <div class="col-lg-7 col-md-8">

      <div class="card"><div class="card-body">
        <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder"> Результаты запроса</h6>

        <div style="display: flex">
          <button @click="showJson = !showJson" type="button" class="btn btn-info" style="border-radius: 0px; margin:4px 20px 4px 4px;"> Показать Json</button>
          <button v-if="!showJson"
                  @click="showTable = !showTable" type="button" class="btn btn-info" style="border-radius: 0px; margin:4px 20px 4px 4px;">
                     Показать в табличном виде
          </button>
        </div> <hr>

        <template v-if="showJson">
             <pre>{{queryResults}}</pre>
        </template>
        <template v-else >
              <template v-if="showTable" >
                  <table class="tablesaw table-bordered table-hover table no-wrap tablesaw-swipe">
                        <template v-for="(item, i) in queryResults">
                             <template v-if="i == 0">
                                  <tr><th v-for="(value, fname) in item" style="">{{fname}}</th></tr>
                             </template>
                             <tr><td v-for="(value, fname) in item" style="">{{value}}</td></tr>
                        </template>
                  </table> <hr>
              </template>
              <template v-else >
                  <div v-for="(item, i) in queryResults" >
                      <div><div>{{i+1}} (line num)</div>
                          <div v-for="(value, fname) in item" style="display: flex">
                              <div style="width:40%">{{fname}}</div>
                              <div style="">{{value}}</div>
                          </div>
                      </div> <hr>
                  </div>
              </template>

        </template>


      </div></div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SqlEditor",
  data: () => ({
      sqlSelect : 'SELECT * FROM ',
      sqlExec   : '',
      queryResults : [],

      showJson : false,
      showTable : false,
  }),

  methods: {

      async sqlQueryRun(type) {

          let query    = '';
          let _type    = type;
          let tableName = '';
          switch (type) {
              case 'query' :
                   query = this.sqlSelect;
                   break;

              case 'exec' :
                   query = this.sqlExec;
                   break;
          }

          const url = 'EXEC_SQL_COMMAND/' + query+ '/' + _type + '/' + tableName;
          const response = await this.http(url);
          this.queryResults = response;
          this.sqlSelect = 'SELECT * FROM ';
          this.sqlExec   = '';

      },

  }

}
</script>

<style scoped>

</style>
