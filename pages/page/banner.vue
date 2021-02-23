<template>
  <div class="banner">

    <!-- <el-upload
      :file-list="banners"
      action="/api/upload/images"
      :data="{ type: 'commodity' }"
      list-type="picture-card"
      :on-preview="uploadPreview"
      :on-remove="uploadRemove"
      :on-success="uploadSuccess"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog> -->

    <el-form ref="form" :model="form" >

      <el-form-item v-for="(item, index) in form.banners" :key="index">
        <el-row :gutter="20">
          <el-col :span="3">
            <el-button  v-if="item.state" @click="bannerUpdate(item)">{{ $t('content.update') }}</el-button>
            <el-button  v-else @click="bannerCreate(item)">{{ $t('content.create') }}</el-button>

            <el-button   @click="bannerDelete(item)">{{ $t('content.delete') }}</el-button>
          </el-col>

          <el-col :span="4">
            <el-upload
              class="avatar-uploader"
              action="/api/upload/images"
              :data="{ type: 'banner', index }"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              >
              <img v-if="item.src" :src="item.src" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
          <el-col :span="4">
            <el-input v-model="item.title" type="textarea" :placeholder="$t('form.placeholder', { msg: $t('content.title') })"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="item.subTitle" type="textarea" :placeholder="$t('form.placeholder', { msg: $t('content.subTitle') })"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="item.desc" type="textarea" :placeholder="$t('form.placeholder', { msg: $t('content.desc') })"></el-input>
          </el-col>

        </el-row>






      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      defaultBanner: {
        state: 0,
        src: '',
        title: '',
        subTitle: '',
        desc: ''
      },
      form: {
        banners: []
      }
    }
  },
  async fetch() {

    const banners = await this.$axios.$get(
      `/api/admin/page/banner`
    )
    if(banners.success){
        this.form.banners = banners.data.map((item) => {
        item.state = 1;
        return item;
      });
      this.form.banners.push(this.defaultBanner);

    }
  },
  methods: {
    async bannerCreate(item) {
      const banners = await this.$axios.$post(
      `/api/admin/page/banner`, {
        src: item.src,
        title: item.title,
        subTitle: item.subTitle,
        desc: item.desc
      }
      )
      if(banners.success) {
        item.state = 1;
        this.form.banners.push({
        state: 0,
        src: '',
        title: '',
        subTitle: '',
        desc: ''
      });
        this.$message({
          showClose: true,
          message: `${this.$t('content.create')}${this.$t('content.success')}`,
          type: 'success',
        })
      }else{
        this.$message({
          showClose: true,
          message: `${this.$t('content.create')}${this.$t('content.fail')}`,
          type: 'error',
        })
      }
    },
    async bannerUpdate(item) {
      const banners = await this.$axios.$post(
      `/api/admin/page/banner/update`, item
      )
      if(banners.success) {
        item.state = 1;
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.success')}`,
          type: 'success',
        })
      }else{
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.fail')}`,
          type: 'error',
        })
      }
    },
    async bannerDelete(item) {
      const banners = await this.$axios.$post(
      `/api/admin/page/banner/delete`, {
        bannerId: item.bannerId
      }
      )
      if(banners.success) {
        for (let [index, element] of Object.entries(this.form.banners)) {
        if (item.bannerId === element.bannerId) {
          this.form.banners.splice(index, 1)
        }
      }
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.success')}`,
          type: 'success',
        })
      }else{
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.fail')}`,
          type: 'error',
        })
      }
    },
    uploadSuccess(res, file) {
      // console.log(res, file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.banners.push({
        src: res.data.src,
        url: res.data.src,
        name: file.name,
      })
    },
    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.banners)) {
        if (item.name === file.name) {
          this.banners.splice(index, 1)
        }
      }
    },
    uploadPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleAvatarSuccess(res, file, fileList) {
      console.log("handleAvatarSuccess", res, file, fileList)
      // this.userCreate.avatar = URL.createObjectURL(file.raw);
      // this.form.options.avatar = res.data.src
      this.form.banners[res.data.index].src = res.data.src;
      console.log(this.form)
    },

  },
}
</script>
<style scoped>
.el-upload-list--picture-card .el-upload-list__item {
  width: 100%;
}
</style>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 78px;
    display: block;
  }
</style>
