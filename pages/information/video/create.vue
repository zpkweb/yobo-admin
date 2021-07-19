<template>
  <div class="video">
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
        <el-collapse-item title="视频标题 " name="0">
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
        <el-collapse-item title="视频内容 " name="1">
          <el-form-item
            class="text item"
            :label="$t('commodity.isTop')"
          >
            <!-- <el-input
              v-model="form.isTop"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.isTop') })
              "
            ></el-input> -->
            <el-switch v-model="form.isTop"> </el-switch>

          </el-form-item>

          <el-form-item
            class="text item"
            :label="$t('commodity.ccId')"
          >
            <el-input
              v-model="form.ccId"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.ccId') })
              "
            ></el-input>
            <div class="el-upload__tip">
              ccId  示例：61AA76B5334118229C33DC5901307461
            </div>

          </el-form-item>



          <el-form-item
            class="text item"
            :label="$t('commodity.siteId')"
          >
            <el-input
              v-model="form.siteId"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.siteId') })
              "
            ></el-input>
            <div class="el-upload__tip">
              siteId 示例：E5DD260925A6084B
            </div>
          </el-form-item>

          <el-form-item
            class="text item"
            :label="$t('commodity.videoPhoto')"
          >
            <el-upload
              v-model="form.videoPhoto"
              class="banner-uploader"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'sellerStudioVideoImg' }"
              :show-file-list="false"
              :on-success="handleVideoPhotoSuccess"
              :before-upload="beforeUpload"
            >
              <img
                v-if="form && form.videoPhoto"
                :src="form.videoPhoto"
                class="video-photo"
              />
              <i v-else class="el-icon-plus video-photo-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">
                视频封面图片，请上传 210X105 比例的图片，且不超过2M
              </div>
            </el-upload>
          </el-form-item>


        </el-collapse-item>
        <el-collapse-item title="视频描述 " name="2">
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

      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
export default {
  props: ["dialogVideoData"],
  data() {
    return {
      form: this.dialogVideoData,
      isCreate: !this.dialogVideoData.videoId,
      isSubmit: false,
      editVideoIndex: null,
      // form: {
      //   isTop: false,
      //   id: '',
      //   videoId: '',
      //   video: '',
      //   ccId: '',
      //   siteId: '',
      //   videoPhoto: '',
      //   name: {

      //     'zh-cn': '',
      //     'en-us': '',
      //     'ja-jp': '',
      //     'es-es': '',
      //   },
      //   desc: {
      //     id: '',
      //     'zh-cn': '',
      //     'en-us': '',
      //     'ja-jp': '',
      //     'es-es': '',
      //   },
      //   videos: [],
      //   removeVideos: [],
      // },
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


    }
  },

  async fetch() {
    // this.reset();
    // if (this.videoId) {
    //   this.isCreate = false;
    //   const video = await this.$axios.$get('/api/admin/information/video/detail', {
    //     params: {
    //       videoId: this.videoId
    //     },
    //   })
    //   if(video.success) {
    //     this.form.isTop = video.data.isTop;
    //     this.form.id = video.data.id;
    //     this.form.videoId = video.data.videoId;
    //     this.form.ccId = video.data.ccId;
    //     this.form.siteId = video.data.siteId;
    //     this.form.videoPhoto = video.data.videoPhoto;
    //     this.form.name['zh-cn'] = video.data['zh-cn'];
    //     this.form.name['en-us'] = video.data['en-us'];
    //     this.form.name['ja-jp'] = video.data['ja-jp'];
    //     this.form.name['es-es'] = video.data['es-es'];
    //     if(video.data.detail) {
    //       this.form.desc = video.data.detail;
    //     }

    //     this.form.videos = video.data.videos;
    //   }

    // }
  },
  created() {
    this.form = this.dialogVideoData;
    console.log("created this.dialogVideoData", this.form)

  },
  updated() {
    console.log("updated this.dialogVideoData")
  },
  destroyed() {
    console.log("destroyed this.dialogVideoData")
    this.form = {}
  },
  methods: {

    onSubmitCreate(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          this.isSubmit = true;
          let detail;
          if(this.form.desc){
            if(this.form.desc['zh-cn']
            || this.form.desc['en-us']
            || this.form.desc['ja-jp']
            || this.form.desc['es-es']
            ) {
              detail = JSON.stringify({
                  'zh-cn': this.form.desc['zh-cn'],
                  'en-us': this.form.desc['en-us'],
                  'ja-jp': this.form.desc['ja-jp'],
                  'es-es': this.form.desc['es-es'],
                })
            }
          }
          data = await this.$axios
            .$post('/api/admin/information/video', {
              isTop: this.form.isTop,
              'zh-cn': this.form.name['zh-cn'],
              'en-us': this.form.name['en-us'],
              'ja-jp': this.form.name['ja-jp'],
              'es-es': this.form.name['es-es'],
              ccId: this.form.ccId,
              siteId: this.form.siteId,
              videoPhoto: this.form.videoPhoto,
              detail
            })
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
            // this.isCreate = false
            // this.$router.push({
            //   query: {
            //     videoId: data.videoId,
            //   },
            // })
            // this.reset();
            this.$emit("createDialogVideo", data.data)
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
          this.isSubmit = true;
          let detail;
          if(this.form.desc){
            if(this.form.desc.id
            || this.form.desc['zh-cn']
            || this.form.desc['en-us']
            || this.form.desc['ja-jp']
            || this.form.desc['es-es']
            ) {
              detail = JSON.stringify({
                  id: this.form.desc.id,
                  'zh-cn': this.form.desc['zh-cn'],
                  'en-us': this.form.desc['en-us'],
                  'ja-jp': this.form.desc['ja-jp'],
                  'es-es': this.form.desc['es-es'],
                })
            }
          }

          data = await this.$axios
            .$post('/api/admin/information/video/update', {
              id: this.form.id,
              isTop: this.form.isTop,
              videoId: this.form.videoId,
              'zh-cn': this.form.name['zh-cn'],
              'en-us': this.form.name['en-us'],
              'ja-jp': this.form.name['ja-jp'],
              'es-es': this.form.name['es-es'],
              ccId: this.form.ccId,
              siteId: this.form.siteId,
              videoPhoto: this.form.videoPhoto,
              detail
            })
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
            this.$emit("editDialogVideo", {
              id: this.form.id,
              videoId: this.form.videoId,
              'zh-cn': this.form.name['zh-cn'],
              'en-us': this.form.name['en-us'],
              'ja-jp': this.form.name['ja-jp'],
              'es-es': this.form.name['es-es'],
              ccId: this.form.ccId,
              siteId: this.form.siteId,
              videoPhoto: this.form.videoPhoto,
              detail: {
                id: this.form.desc.id,
                'zh-cn': this.form.desc['zh-cn'],
                'en-us': this.form.desc['en-us'],
                'ja-jp': this.form.desc['ja-jp'],
                'es-es': this.form.desc['es-es'],
              }
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
        id: '',
        videoId: '',
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: '',
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
      this.form.videoPhoto = res.data.src;
    },
    // handleVideoPhotoSuccess(res, file) {
    //   this.Video.videoPhoto = res.data.src
    // },

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
