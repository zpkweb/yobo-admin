<template>
  <div class="information">
    <el-form :inline="true" :model="search" class="user-search">
      <el-form-item :label="$t('information.title')">
        <el-input
          v-model="search.title"
          :placeholder="$t('form.placeholder', { msg: $t('information.title') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item prop="news" :label="$t('content.news')">
        <el-switch v-model="search.news"> </el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSearch(1)" icon="el-icon-search">{{
          $t('content.search')
        }}</el-button>
      </el-form-item>
    </el-form>


    <el-table  :data="information" border>


      <el-table-column prop="zh-cn" :label="$t('information.title')">
      </el-table-column>
      <!-- <el-table-column prop="en-us" :label="$t('lang.en')">
      </el-table-column>
      <el-table-column prop="ja-jp" :label="$t('lang.ja')">
      </el-table-column>
      <el-table-column prop="es-es" :label="$t('lang.es')">
      </el-table-column> -->
      <!-- <el-table-column prop="isTop" :label="$t('information.isTop')">
        <template slot-scope="scope">

          {{ scope.row.isTop ? '是' : '否' }}
        </template>
      </el-table-column> -->
      <el-table-column prop="createdDate" :label="$t('content.createdDate')" :formatter="formatterDate"></el-table-column>

      <el-table-column :label="$t('content.operation')" width="182">
        <template slot-scope="scope">
          <el-button
              size="mini"
              icon="el-icon-edit"
              @click="editor(scope.$index, scope.row)"
              >
              {{ $t('content.edit') }}
              </el-button>


            <el-popover placement="top" v-model="scope.row.visible">
              <p>{{ $t('content.deleteText') }}</p>
              <div style="text-align: right; margin: 0">
                <el-button
                  size="mini"
                  type="text"
                  @click="scope.row.visible = false"
                  >{{ $t('content.cancel') }}</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="deleteInformationVideo(scope.$index, scope.row)"
                  >{{ $t('content.define') }}</el-button
                >
              </div>

              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                slot="reference"
                >{{ $t('content.delete') }}</el-button
              >
            </el-popover>

        </template>
      </el-table-column>

    </el-table>


    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pagination.pageSize"
      :current-page="pagination.currentPage"
      :total="pagination.total"
      @current-change="changeCurrentPage"
      style="margin-top: 20px; text-align: center"
    >
    </el-pagination>


  </div>
</template>
<script>

export default {
  data() {
    return {
      search: {
        title: '',
        news: true,
      },
      information: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
    }
  },
  async fetch() {
    let informationData = await this.$axios.$get('/api/admin/information/video', {
      params: {
        news: this.search.news,
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
        isLocale: 'false'
      }
    })

    if(informationData.success) {
      this.pagination.total = informationData.data.total
      this.information = informationData.data.list;
    }
  },
  methods: {
    async onSearch(currentPage) {
      this.pagination.currentPage = currentPage;
      let searchData = await this.$axios.$get('/api/admin/information/video/search', {
        params: {
          ...this.search,
          currentPage: currentPage,
          pageSize: this.pagination.pageSize,
          isLocale: 'false'
        }
      })
      if(searchData.success) {
        this.pagination.total = searchData.data.total
        this.information = searchData.data.list;
      }
    },
    changeCurrentPage(currentPage) {
      this.onSearch(currentPage)
    },
    editor(index, row) {
      this.$router.push(`/information/video/create?videoId=${row.videoId}`)
    },
    async deleteInformationVideo(index, row) {
      let deleteData = await this.$axios.$post('/api/admin/information/video/delete', {
        videoId: row.videoId,
      })
      if(deleteData.success) {
        this.information.splice(index, 1)
      }else{
        this.$message({
          showClose: true,
          message: deleteData.message,
          type: 'error',
        })
      }
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
  },
}
</script>
<style scoped>

</style>
