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


      <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.name'),
                  })
                "
                :prop="'name.zh-cn'"
                :rules="{
                  required: true,
                  message: `${$t('lang.zh')}${$t('commodity.name')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.name['zh-cn']"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })"
                ></el-input
              ></el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.name'),
                  })
                "
                :prop="'name.en-us'"
                :rules="{
                  required: true,
                  message: `${$t('lang.en')}${$t('commodity.name')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
                ><el-input
                  v-model="form.name['en-us']"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.name'),
                  })
                "
                :prop="'name.ja-jp'"
                :rules="{
                  required: true,
                  message: `${$t('lang.ja')}${$t('commodity.name')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
                ><el-input
                  v-model="form.name['ja-jp']"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6">

              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.name'),
                  })
                "
                :prop="'name.es-es'"
                :rules="{
                  required: true,
                  message: `${$t('lang.es')}${$t('commodity.name')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.name['es-es']"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.es') })"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>



          <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.desc'),
                  })
                "
                :prop="'desc.zh-cn'"
                :rules="{
                  required: true,
                  message: `${$t('lang.zh')}${$t('commodity.desc')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <div class="quill-editor"
                  :content="form.desc['zh-cn']"
                  @change="onEditorChangeZhcn($event, 'zhcn')"
                  v-quill:myQuillEditorZhcn="editorOptionZhcn">
                </div>
                </el-form-item
            >
          <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.desc'),
                  })
                "
                :prop="'desc.en-us'"
                :rules="{
                  required: true,
                  message: `${$t('lang.en')}${$t('commodity.desc')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
                >
                <div class="quill-editor"
                  :content="form.desc['en-us']"
                  @change="onEditorChangeEnus($event, 'enus')"
                  v-quill:myQuillEditorEnus="editorOptionEnus">
                </div>
                </el-form-item
            >
            <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.desc'),
                  })
                "
                :prop="'desc.ja-jp'"
                :rules="{
                  required: true,
                  message: `${$t('lang.ja')}${$t('commodity.desc')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
                >
                <div class="quill-editor"
                  :content="form.desc['ja-jp']"
                  @change="onEditorChangeJajp($event, 'jajp')"
                  v-quill:myQuillEditorJajp="editorOptionJajp">
                </div>
                </el-form-item
            >
          <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.desc'),
                  })
                "
                :prop="'desc.es-es'"
                :rules="{
                  required: true,
                  message: `${$t('lang.es')}${$t('commodity.desc')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <div class="quill-editor"
                  :content="form.desc['es-es']"
                  @change="onEditorChangeEses($event, 'eses')"
                  v-quill:myQuillEditorEses="editorOptionEses">
                </div>
                 </el-form-item
            >




    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
export default {
  data() {
    return {
      isCreate: true,
      isSubmit: false,
      form: {
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'es-es': '',
        },
      },
      editorOptionZhcn: {
          placeholder: this.$t('form.placeholder', {
                  msg: `${this.$t('lang.zh')}${this.$t('content.desc')}`,
                }),
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
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
              ['blockquote', 'code-block']
            ]
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
              ['blockquote', 'code-block']
            ]
          },
        },
        editorOptionEses: {
          placeholder: this.$t('form.placeholder', {
                  msg: `${this.$t('lang.zh')}${this.$t('content.desc')}`,
                }),
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          },
        },
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
                message: `${this.typeText}${this.$t('content.fail')}! ${
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
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success',
            })
            this.isCreate = false
            this.$router.push({
              query: {
                commodityId: data.data.commodityId,
              },
            })
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}!${
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
            .$post('/api/admin/information/update', this.form)
            .catch((error) => {
              this.isSubmit = false
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${
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
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success',
            })

          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}!${
                data.message
              }`,
              type: 'error',
            })
          }
        }
      })
    },
    onMock() {
      const createCommodityMock = {
        commodityId: this.form.commodityId,
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

    onEditorChangeZhcn({ editor, html, text }, type) {
        // console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.form.name['zh-cn'] = html;
      },
    onEditorChangeEnus({ editor, html, text }, type) {
        // console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.form.name['en-us'] = html;
      },
      onEditorChangeJajp({ editor, html, text }, type) {
        // console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.form.name['ja-jp'] = html;
      },
      onEditorChangeEses({ editor, html, text }, type) {
        // console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.form.name['es-es'] = html;
      },
  },
}
</script>
<style scoped lang="scss">

</style>
