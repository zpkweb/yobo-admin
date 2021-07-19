<template>
  <div class="information">
    <el-form ref="form" :model="form" label-width="108px">
      <el-form-item>
        <el-button
          v-if="isCreate"
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="onSubmitCreate('form')"
          :loading="isSubmit"
        >
          {{ $t('content.create') }}
        </el-button>

        <el-button
          v-else
          type="primary"
          icon="el-icon-check"
          @click="onSubmitUpdate('form')"
          :loading="isSubmit"
        >
          {{ $t('content.update') }}
        </el-button>
        <el-button v-if="isCreate" icon="el-icon-check" @click="onMock">
          {{ $t('content.fill') }}
        </el-button>
        <el-button icon="el-icon-circle-close" @click="resetForm('form')">{{
          $t('content.clear')
        }}</el-button>
      </el-form-item>
      <el-collapse v-model="activeCollapses">
        <el-collapse-item title="标题 " name="0">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('content.title'),
                  })
                "
                :prop="'name.zh-cn'"
                :rules="{
                  required: true,
                  message: `${$t('lang.zh')}${$t('content.title')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.name['zh-cn']"
                  :placeholder="$t('form.placeholder', { msg: `${$t('lang.zh')}${$t('content.title')}` })"
                ></el-input
              ></el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('content.title'),
                  })
                "
                :prop="'name.en-us'"
                :rules="{
                  required: true,
                  message: `${$t('lang.en')}${$t('content.title')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
                ><el-input
                  v-model="form.name['en-us']"
                  :placeholder="$t('form.placeholder', { msg: `${$t('lang.en')}${$t('content.title')}` })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('content.title'),
                  })
                "
                :prop="'name.ja-jp'"
                :rules="{
                  required: true,
                  message: `${$t('lang.ja')}${$t('content.title')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
                ><el-input
                  v-model="form.name['ja-jp']"
                  :placeholder="$t('form.placeholder', { msg: `${$t('lang.ja')}${$t('content.title')}` })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('content.title'),
                  })
                "
                :prop="'name.es-es'"
                :rules="{
                  required: true,
                  message: `${$t('lang.es')}${$t('content.title')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.name['es-es']"
                  :placeholder="$t('form.placeholder', { msg: `${$t('lang.es')}${$t('content.title')}` })"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="描述 " name="1">
          <el-form-item
            :label="
              $t('langname', {
                lang: $t('lang.zh'),
                name: $t('commodity.desc'),
              })
            "
            :prop="'desc.zh-cn'"
          >
            <div
              class="quill-editor"
              :content="form.desc['zh-cn']"
              @change="onEditorChangeZhcn($event, 'zhcn')"
              v-quill:myQuillEditorZhcn="{
                placeholder: $t('form.placeholder', {
                  msg: `${$t('lang.zh')}${$t('content.desc')}`,
                }),
                // some quill options
                modules: {
                  toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                  ],
                },
              }"
            ></div>
          </el-form-item>
          <el-form-item
            :label="
              $t('langname', {
                lang: $t('lang.en'),
                name: $t('commodity.desc'),
              })
            "
            :prop="'desc.en-us'"
          >
            <div
              class="quill-editor"
              :content="form.desc['en-us']"
              @change="onEditorChangeEnus($event, 'enus')"
              v-quill:myQuillEditorEnus="editorOptionEnus"
            ></div>
          </el-form-item>
          <el-form-item
            :label="
              $t('langname', {
                lang: $t('lang.ja'),
                name: $t('commodity.desc'),
              })
            "
            :prop="'desc.ja-jp'"
          >
            <div
              class="quill-editor"
              :content="form.desc['ja-jp']"
              @change="onEditorChangeJajp($event, 'jajp')"
              v-quill:myQuillEditorJajp="editorOptionJajp"
            ></div>
          </el-form-item>
          <el-form-item
            :label="
              $t('langname', {
                lang: $t('lang.es'),
                name: $t('commodity.desc'),
              })
            "
            :prop="'desc.es-es'"
          >
            <div
              class="quill-editor"
              :content="form.desc['es-es']"
              @change="onEditorChangeEses($event, 'eses')"
              v-quill:myQuillEditorEses="editorOptionEses"
            ></div>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="视频 " name="2">
          <el-card class="box-card" v-for="(item, index) in form.videos" :key="item.id">
            <div slot="header" class="clearfix">
              <el-button style="padding: 3px 0" type="text" @click="editVideo(index, item)">编辑视频</el-button>
              <el-button style="padding: 3px 0; color: #F56C6C;" type="text" @click="deleteVideo(index, item)">删除视频</el-button>
            </div>
            <div class="text item">
              标题: {{item['zh-cn']}}
            </div>
            <div class="text item">
              ccId: {{item.ccId}}
            </div>
            <div class="text item">
              siteId: {{item.siteId}}
            </div>
            <div class="text item">
              视频封面图片:
              <br />
              <img v-if="item.videoPhoto" :src="item.videoPhoto" width="210" height="105" />
            </div>
          </el-card>

          <el-form-item>
            <el-button type="primary" @click="addVideo">添加视频</el-button>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <el-dialog
      :title="dialogVideoTitle"
      :visible.sync="showVideo"
      :close="dialogVideoClose"
      width="80%"
    >
      <Video v-if="showVideo" :dialogVideoData="dialogVideoData" v-on:createDialogVideo="createDialogVideo" v-on:editDialogVideo="editDialogVideo" ></Video>
    </el-dialog>


  </div>
</template>
<script>
import Mock from 'mockjs'
import Video from './video/create';
export default {
  components: {
    Video
  },
  data() {
    return {

      isCreate: this.$route.query.informationId ? true : false,
      isSubmit: false,
      editVideoIndex: null,
      form: {
        isTop: false,
        name: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        desc: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        videos: [],
        removeVideos: []

      },
      videos: [],
      activeCollapses: ['0', '1', '2', '3', '4'],
      editorOptionZhcn: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.zh')}${this.$t('content.desc')}`,
        }),
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
          ],
        },
      },
      editorOptionEnus: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.en')}${this.$t('content.desc')}`,
        }),
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
          ],
        },
      },
      editorOptionJajp: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.ja')}${this.$t('content.desc')}`,
        }),
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
          ],
        },
      },
      editorOptionEses: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.es')}${this.$t('content.desc')}`,
        }),
        // some quill options
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
          ],
        },
      },
      showVideo: false,

      dialogVideoTitle: "添加视频",
      dialogVideoData: {
        isTop: false,
        id: '',
        videoId: '',
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: '',
        name: {

          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        desc: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        videos: [],
        removeVideos: [],
      }

    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['informationId'],
  async fetch() {
    this.isCreate = true;
    this.reset();
    if (this.$route.query && this.$route.query.informationId) {
      this.isCreate = false;
      const information = await this.$axios.$get('/api/admin/information/detail', {
        params: {
          informationId: this.$route.query.informationId,
        },
      })
      if(information.success) {
        this.form.isTop = information.data.isTop;
        this.form.name['id'] = information.data['id'];
        this.form.name['zh-cn'] = information.data['zh-cn'];
        this.form.name['en-us'] = information.data['en-us'];
        this.form.name['ja-jp'] = information.data['ja-jp'];
        this.form.name['es-es'] = information.data['es-es'];
        if(information.data.detail) {
          this.form.desc = information.data.detail;
        }

        this.form.videos = information.data.videos;
      }

    }
  },
  methods: {

    onSubmitCreate(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          this.isSubmit = true
          data = await this.$axios
            .$post('/api/admin/information', this.form)
            .catch((error) => {
              this.isSubmit = false
              this.$message({
                showClose: true,
                message: `${this.$t('content.create')}${this.$t('content.fail')}! ${
                  error.response.data.message
                }`,
                type: 'error',
              })
            })
          this.isSubmit = false
          // console.log('data', data)
          if (data.success) {
            this.$message({
              showClose: true,
              message: `${this.$t('content.create')}${this.$t('content.success')}`,
              type: 'success',
            })
            this.isCreate = false
            this.$router.push({
              query: {
                informationId: data.informationId,
              },
            })
          } else {
            this.$message({
              showClose: true,
              message: `${this.$t('content.create')}${this.$t('content.fail')}!${
                data.message
              }`,
              type: 'error',
            })
          }
        }
      })
    },
    onSubmitUpdate(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          this.isSubmit = true
          data = await this.$axios
            .$post('/api/admin/information/update', {...this.form, informationId: this.$route.query.informationId,})
            .catch((error) => {
              this.isSubmit = false
              this.$message({
                showClose: true,
                message: `${this.$t('content.update')}${this.$t('content.fail')}! ${
                  error.response.data.message
                }`,
                type: 'error',
              })
            })
          this.isSubmit = false
          // console.log('data', data)
          if (data.success) {
            this.$message({
              showClose: true,
              message: `${this.$t('content.update')}${this.$t('content.success')}`,
              type: 'success',
            })
          } else {
            this.$message({
              showClose: true,
              message: `${this.$t('content.update')}${this.$t('content.fail')}!${
                data.message
              }`,
              type: 'error',
            })
          }
        }
      })
    },
    reset() {
      this.form =  {
        isTop: false,
        name: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        desc: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        videos: [],
        removeVideos: [],
      }
    },
    onMock() {
      const createCommodityMock = {
        isTop: false,
        name: {
          'zh-cn': Mock.mock('@ctitle(2, 8)'),
          'en-us': Mock.mock('@title(2)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        desc: {
          'zh-cn': Mock.mock('@cparagraph(1,3)'),
          'en-us': Mock.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        videos: [],
        removeVideos: [],
      }
      // console.log('createCommodityMock', createCommodityMock)
      this.form = createCommodityMock

      // this.type = 'create'
      // this.typeText = this.$t('content.create')
      // this.isCreate = true;
    },
    resetForm(formName) {
      this.reset()
      // this.type = 'create'
      // this.typeText = this.$t('content.create')
      // this.isCreate = true
      this.$refs[formName].clearValidate()
    },
    handleVideoPhotoSuccess(res, file) {
      // this.form.videos[index]videoPhoto = res.data.src
      this.form.videos[this.editVideoIndex].videoPhoto = res.data.src;
    },
    handleDefaultVideoPhotoSuccess(res, file) {
      this.defaultVideo.videoPhoto = res.data.src
    },

    onEditorChangeZhcn({ editor, html, text }, type) {
      // console.log('editor change!', editor, html, text, type)
      // this.content = html
      this.form.desc['zh-cn'] = html
    },
    onEditorChangeEnus({ editor, html, text }, type) {
      // console.log('editor change!', editor, html, text, type)
      // this.content = html
      this.form.desc['en-us'] = html
    },
    onEditorChangeJajp({ editor, html, text }, type) {
      // console.log('editor change!', editor, html, text, type)
      // this.content = html
      this.form.desc['ja-jp'] = html
    },
    onEditorChangeEses({ editor, html, text }, type) {
      // console.log('editor change!', editor, html, text, type)
      // this.content = html
      this.form.desc['es-es'] = html
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!')
      }
      return isLt2M
    },

    commodityRemoveVideo(index) {

      if(this.form.videos[index].id){
        this.form.removeVideos.push(Object.assign({}, this.form.videos[index]))
      }

      this.form.videos.splice(index, 1);
    },
    addVideo() {
      this.dialogVideoTitle = "添加视频";
      this.dialogVideoData = {
        isTop: false,
        id: '',
        videoId: '',
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: '',
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        desc: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        videos: [],
        removeVideos: [],
      };
      console.log("添加视频", this.dialogVideoData)
      this.showVideo = true;
    },

    editVideo(index, data) {
      this.dialogVideoTitle = "编辑视频";
      this.dialogVideoIndex = index;
      this.dialogVideoData = {
        isTop: data.isTop,
        id: data.id,
        videoId: data.videoId,
        video: '',
        ccId: data.ccId,
        siteId: data.siteId,
        videoPhoto: data.videoPhoto,
        name: {
          'zh-cn': data['zh-cn'],
          'en-us': data['en-us'],
          'ja-jp': data['ja-jp'],
          'es-es': data['es-es'],
        },
        desc: {
          id: '',
          'zh-cn': data.desc ? data.desc['zh-cn'] : '',
          'en-us': data.desc ? data.desc['en-us'] : '',
          'ja-jp': data.desc ? data.desc['ja-jp'] : '',
          'es-es': data.desc ? data.desc['es-es'] : '',
        },
        videos: [],
        removeVideos: [],
      };
      this.showVideo = true;
    },
    createDialogVideo(data) {
      this.form.videos.push(data);
      this.showVideo = false;
    },
    editDialogVideo(data) {
      console.log("editDialogVideo", data)
      this.form.videos[this.dialogVideoIndex] = data;
      this.showVideo = false;
    },
    deleteVideo(index, data) {
      this.form.removeVideos.push(Object.assign({}, this.form.videos[index]))
      this.form.videos.splice(index, 1)
    },
    dialogVideoClose() {
      this.dialogVideoData = {
        isTop: false,
        id: '',
        videoId: '',
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: '',
        name: {

          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        desc: {
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        videos: [],
        removeVideos: [],
      };
    }
  },
}
</script>
<style scoped >
.quill-editor {
  height: 120px;
}
</style>

<style scoped>

.el-upload-list--picture-card .el-upload-list__item {
  width: 192px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.el-upload--picture-card {
  width: 192px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.photo {
  width: 192px;
  height: 100px;
}
.commodity-photo-dialog .el-dialog{
  width: 818px;
}

.box-card {
    margin: 20px;
  }

.video-photo-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 239px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.video-photo {
  width: 239px;
  height: 100px;
  display: block;
}

</style>
