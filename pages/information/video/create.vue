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
          <el-card class="box-card" v-if="form.videos" v-for="(item, index) in form.videos" :key="index">
              <div slot="header" class="clearfix">
                <template v-if="editVideoIndex !== index">
                  <el-button style="float: left; padding: 3px 0" type="text"  @click="editVideoIndex = index">编辑视频</el-button>
                  <el-button style="float: left; padding: 3px 0" type="text" @click="commodityRemoveVideo(index)">删除视频</el-button>
                </template>

                <el-button style="float: left; padding: 3px 0" type="text" v-else @click="editVideoIndex = null">编辑完成</el-button>


              </div>

              <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item
                      :label="
                        $t('langname', {
                          lang: $t('lang.zh'),
                          name: $t('content.title'),
                        })
                      "
                    >
                      <el-input
                        v-model="item['zh-cn']"
                        :disabled="editVideoIndex == index ? false : true"
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
                      ><el-input
                        v-model="item['en-us']"
                        :disabled="editVideoIndex == index ? false : true"
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

                      ><el-input
                        v-model="item['ja-jp']"
                        :disabled="editVideoIndex == index ? false : true"
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

                    >
                      <el-input
                        v-model="item['es-es']"
                        :disabled="editVideoIndex == index ? false : true"
                      ></el-input> </el-form-item
                  ></el-col>
                </el-row>

              <el-form-item
                class="text item"
                :label="$t('commodity.ccId')"
              >
                <el-input
                  v-model="item.ccId"
                  :disabled="editVideoIndex == index ? false : true"
                ></el-input>
              </el-form-item>

              <el-form-item
                class="text item"
                :label="$t('commodity.siteId')"
              >
                <el-input
                  v-model="item.siteId"
                  :disabled="editVideoIndex == index ? false : true"
                ></el-input>

              </el-form-item>
              <el-form-item
                class="text item"
                :label="$t('commodity.videoPhoto')"
              >
                <template v-if="editVideoIndex == index">
                  <el-upload
                    v-model="item.videoPhoto"
                    class="banner-uploader"
                    :action="`${$config.origin}/api/upload/images`"
                    :data="{ type: 'sellerStudioVideoImg' }"
                    :show-file-list="false"
                    :on-success="handleVideoPhotoSuccess"
                    :before-upload="beforeUpload"
                  >
                    <img
                      v-if="item && item.videoPhoto"
                      :src="item.videoPhoto"
                      class="video-photo"
                    />
                    <i v-else class="el-icon-plus video-photo-uploader-icon"></i>
                    <div slot="tip" class="el-upload__tip">
                      视频封面图片，请上传 768X400 比例的图片，且不超过2M
                    </div>
                  </el-upload>
                </template>
                <template v-else>
                  <img
                    v-if="item && item.videoPhoto"
                    :src="item.videoPhoto"
                    class="video-photo"
                  />
                </template>

                </el-upload>
              </el-form-item>
            </el-card>

            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <el-button style="float: left; padding: 3px 0" type="text" @click="commodityAddVideo">添加视频</el-button>
              </div>

                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item
                      :label="
                        $t('langname', {
                          lang: $t('lang.zh'),
                          name: $t('content.title'),
                        })
                      "
                    >
                      <el-input
                        v-model="defaultVideo['zh-cn']"
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
                      ><el-input
                        v-model="defaultVideo['en-us']"
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

                      ><el-input
                        v-model="defaultVideo['ja-jp']"
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

                    >
                      <el-input
                        v-model="defaultVideo['es-es']"
                        :placeholder="$t('form.placeholder', { msg: `${$t('lang.es')}${$t('content.title')}` })"
                      ></el-input> </el-form-item
                  ></el-col>
                </el-row>


                <el-form-item
                  class="text item"
                  :label="$t('commodity.ccId')"
                >
                  <el-input
                    v-model="defaultVideo.ccId"
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
                    v-model="defaultVideo.siteId"
                    :placeholder="
                      $t('form.placeholder', { msg: $t('commodity.siteId') })
                    "
                  ></el-input>
                  <div class="el-upload__tip">
                    siteId  E5DD260925A6084B
                  </div>
                </el-form-item>


                <el-form-item
                  class="text item"
                  :label="$t('commodity.videoPhoto')"
                >
                  <el-upload
                    v-model="defaultVideo.videoPhoto"
                    class="banner-uploader"
                    :action="`${$config.origin}/api/upload/images`"
                    :data="{ type: 'sellerStudioVideoImg' }"
                    :show-file-list="false"
                    :on-success="handleDefaultVideoPhotoSuccess"
                    :before-upload="beforeUpload"
                  >
                    <img
                      v-if="defaultVideo && defaultVideo.videoPhoto"
                      :src="defaultVideo.videoPhoto"
                      class="video-photo"
                    />
                    <i v-else class="el-icon-plus video-photo-uploader-icon"></i>
                    <div slot="tip" class="el-upload__tip">
                      视频封面图片，请上传 768X400 比例的图片，且不超过2M
                    </div>
                  </el-upload>
                </el-form-item>

            </el-card>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
export default {
  data() {
    return {
      isCreate: this.$route.query.informationId ? true : false,
      isSubmit: false,

      defaultVideo: {
        'zh-cn': '',
        'en-us': '',
        'ja-jp': '',
        'es-es': '',
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: '',
        detail: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': ''
        }
      },
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
        removeVideos: [],
      },
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
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['informationId'],
  async fetch() {
    this.isCreate = true;
    this.reset();
    if (this.$route.query && this.$route.query.informationId) {
      this.isCreate = false;
      const information = await this.$axios.$get('/api/admin/information/edit', {
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
    commodityAddVideo() {
      this.form.videos.push(Object.assign({}, this.defaultVideo));
      this.defaultVideo = {
        'zh-cn': '',
        'en-us': '',
        'ja-jp': '',
        'es-es': '',
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: '',
        detail: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': ''
        }
      }
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
