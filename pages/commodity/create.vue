<template>
  <div>
    <el-form ref="form" :model="form" label-width="108px">
      <el-form-item>
        <el-button
          v-if="isCreate"
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="onSubmit('form')"
          :loading="isSubmit"
        >
          {{ $t('content.create') }}
        </el-button>

        <el-button
          v-else
          type="primary"
          icon="el-icon-check"
          @click="onSubmit('form')"
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
        <el-collapse-item title="关联艺术家 " name="0">
          <el-form-item>
            <el-button type="primary" @click="selectSellerBtn"
              >选择艺术家</el-button
            >
          </el-form-item>

          <template v-if="form.seller">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item :label="$t('user.seller.firstName')">
                  <el-input v-model="form.seller.firstname" disabled></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item :label="$t('user.seller.lastName')">
                  <el-input v-model="form.seller.lastname" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
        </el-collapse-item>
        <el-collapse-item title="艺术品信息" name="1">

          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item
                :label="$t('commodity.state.title')"
                :prop="'state'"
              >
                <el-radio-group v-model="form.state">
                  <el-radio :label="0">{{
                    $t('commodity.state.added')
                  }}</el-radio>
                  <el-radio :label="1">{{
                    $t('commodity.state.onsale')
                  }}</el-radio>
                  <el-radio :label="2">{{
                    $t('commodity.state.sold')
                  }}</el-radio>
                  <el-radio :label="3">{{
                    $t('commodity.state.offline')
                  }}</el-radio>
                  <el-radio :label="4">{{
                    $t('commodity.state.notsale')
                  }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item
                :label="$t('commodity.choice')"
                :prop="'choice'"
              >
                <el-switch v-model="form.choice"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>



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
              <!-- <el-form-item
          :label="
            $t('langname', { lang: $t('lang.fr'), name: $t('commodity.name') })
          "
          :prop="'name.fr-fr'"
          :rules="{
            required: true,
            message: `${$t('lang.fr')}${$t('commodity.name')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          >
          <el-input
            v-model="form.name['fr-fr']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.fr') })"
          ></el-input> -->
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
          <el-row :gutter="20">
            <el-col :span="6">
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
                <el-input
                  v-model="form.desc['zh-cn']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
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
                ><el-input
                  v-model="form.desc['en-us']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
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
                ><el-input
                  v-model="form.desc['ja-jp']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6">
              <!-- <el-form-item
          :label="
            $t('langname', { lang: $t('lang.fr'), name: $t('commodity.desc') })
          "
          :prop="'desc.fr-fr'"
          :rules="{
            required: true,
            message: `${$t('lang.fr')}${$t('commodity.desc')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          >
          <el-input
            v-model="form.desc['fr-fr']"
            type="textarea"
            :placeholder="$t('form.placeholder', { msg: $t('lang.fr') })"
          ></el-input> -->
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
                <el-input
                  v-model="form.desc['es-es']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.es') })"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.details'),
                  })
                "

              >
                <el-input
                  v-model="form.details['zh-cn']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.details'),
                  })
                "

                ><el-input
                  v-model="form.details['en-us']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.details'),
                  })
                "

                ><el-input
                  v-model="form.details['ja-jp']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6">

              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.details'),
                  })
                "

              >
                <el-input
                  v-model="form.details['es-es']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.es') })"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>


          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.postage'),
                  })
                "

              >
                <el-input
                  v-model="form.postage['zh-cn']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.postage'),
                  })
                "

                ><el-input
                  v-model="form.postage['en-us']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6"
              ><el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.postage'),
                  })
                "

                ><el-input
                  v-model="form.postage['ja-jp']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
                ></el-input></el-form-item
            ></el-col>
            <el-col :span="6">

              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.postage'),
                  })
                "

              >
                <el-input
                  v-model="form.postage['es-es']"
                  type="textarea"
                  :placeholder="$t('form.placeholder', { msg: $t('lang.es') })"
                ></el-input> </el-form-item
            ></el-col>
          </el-row>



          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.price.zh'),
                    name: $t('commodity.price.title'),
                  })
                "
                :prop="'price.zh-cn'"
                :rules="{
                  required: true,
                  message: `${$t('lang.price.zh')}${$t(
                    'commodity.price.title'
                  )}${$t('form.noEmpty')}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.price['zh-cn']"
                  :placeholder="
                    $t('form.placeholder', { msg: $t('lang.price.zh') })
                  "
                >
                  <template slot="append">¥</template>
                </el-input>
              </el-form-item></el-col
            >
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.price.en'),
                    name: $t('commodity.price.title'),
                  })
                "
                :prop="'price.en-us'"
                :rules="{
                  required: true,
                  message: `${$t('lang.price.en')}${$t(
                    'commodity.price.title'
                  )}${$t('form.noEmpty')}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.price['en-us']"
                  :placeholder="
                    $t('form.placeholder', { msg: $t('lang.price.en') })
                  "
                  ><template slot="append">$</template></el-input
                ></el-form-item
              ></el-col
            >
            <el-col :span="6">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.price.ja'),
                    name: $t('commodity.price.title'),
                  })
                "
                :prop="'price.ja-jp'"
                :rules="{
                  required: true,
                  message: `${$t('lang.price.ja')}${$t(
                    'commodity.price.title'
                  )}${$t('form.noEmpty')}`,
                  trigger: 'blur',
                }"
                ><el-input
                  v-model="form.price['ja-jp']"
                  :placeholder="
                    $t('form.placeholder', { msg: $t('lang.price.ja') })
                  "
                  ><template slot="append">￥</template></el-input
                ></el-form-item
              ></el-col
            >

            <el-col :span="6">
              <!-- <el-form-item
          :label="
            $t('langname', {
              lang: $t('lang.price.fr'),
              name: $t('commodity.price.title'),
            })
          "
          :prop="'price.fr-fr'"
          :rules="{
            required: true,
            message: `${$t('lang.price.fr')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.price['fr-fr']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.fr') })"
            ><template slot="append">€</template></el-input
          > -->

              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.price.es'),
                    name: $t('commodity.price.title'),
                  })
                "
                :prop="'price.es-es'"
                :rules="{
                  required: true,
                  message: `${$t('lang.price.es')}${$t(
                    'commodity.price.title'
                  )}${$t('form.noEmpty')}`,
                  trigger: 'blur',
                }"
                ><el-input
                  v-model="form.price['es-es']"
                  :placeholder="
                    $t('form.placeholder', { msg: $t('lang.price.es') })
                  "
                  ><template slot="append">€</template></el-input
                >
              </el-form-item></el-col
            >
            <!-- <el-col :span="6"
          ><el-input v-model="form.price['fr-fr']" placeholder="请输入法郎价格"><template slot="append">₣</template></el-input
        ></el-col> -->
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item
                :label="$t('commodity.width.title')"
                :prop="'width'"
                :rules="{
                  required: true,
                  message: `${$t('commodity.width.title')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.width"
                  type="input"
                  :placeholder="
                    $t('form.placeholder', { msg: $t('commodity.width.title') })
                  "
                >
                  <template slot="append">cm</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item
                :label="$t('commodity.height.title')"
                :prop="'height'"
                :rules="{
                  required: true,
                  message: `${$t('commodity.height.title')}${$t(
                    'form.noEmpty'
                  )}`,
                  trigger: 'blur',
                }"
              >
                <el-input
                  v-model="form.height"
                  type="input"
                  :placeholder="
                    $t('form.placeholder', {
                      msg: $t('commodity.height.title'),
                    })
                  "
                >
                  <template slot="append">cm</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item :label="$t('commodity.color.title')">
            <el-row :gutter="10">
              <el-col :span="4">
                <el-form-item
                  :prop="'colors[0].startColor'"
                  label="开始颜色"
                  :rules="{
                    required: false,
                    message: `${$t('commodity.color.title')}${$t(
                      'form.noEmpty'
                    )}`,
                    trigger: 'blur',
                  }"
                >
                  <el-color-picker
                    v-model="form.colors[0].startColor"
                  ></el-color-picker>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item
                  :prop="'colors[0].endColor'"
                  label="结束颜色"
                  :rules="{
                    required: false,
                    message: `${$t('commodity.color.title')}${$t(
                      'form.noEmpty'
                    )}`,
                    trigger: 'blur',
                  }"
                >
                  <el-color-picker
                    v-model="form.colors[0].endColor"
                  ></el-color-picker>
                </el-form-item>
              </el-col>
              <!-- <el-col :span="2" :offset="1">
          <el-button icon="el-icon-circle-plus-outline" @click="addColors">
          </el-button>
        </el-col> -->
            </el-row>
          </el-form-item>

          <el-form-item :label="$t('commodity.images')">
            <el-upload
              v-model="form.images"
              class="banner-uploader"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'commodityImages' }"
              :show-file-list="false"
              :on-success="handleCommodityImagesSuccess"
              :before-upload="beforeUpload"
            >
              <img
                v-if="form.images"
                :src="form.images"
                class="commodity-images"
              />
              <i v-else class="el-icon-plus commodity-images-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">
                艺术品封面图片，请上传 正方形 比例的图片，且不超过2M
              </div>
            </el-upload>
          </el-form-item>

          <el-form-item :label="$t('commodity.photo')">
            <el-upload
              class="commodity-photo"
              :file-list="form.photos"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'commodity' }"
              list-type="picture-card"
              :on-preview="uploadPreview"
              :on-remove="uploadRemove"
              :on-success="uploadSuccess"
              :before-upload="beforeUpload"
            >
              <i class="el-icon-plus"></i>
              <div slot="tip" class="el-upload__tip">
                艺术品图片，请上传 768X400 比例的图片，且不超过2M
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogUploadVisible" center class="commodity-photo-dialog">
              <img width="768px" height="400px" :src="dialogImageUrl" alt="" />
              <p>图片尺寸：768X400</p>
            </el-dialog>
          </el-form-item>

          <el-form-item :label="$t('commodity.video')">
            <el-card class="box-card" v-if="form.videos" v-for="(item, index) in form.videos" :key="index">
              <div slot="header" class="clearfix">
                <el-button style="float: left; padding: 3px 0" type="text" v-if="editVideoIndex !== index" @click="editVideoIndex = index">编辑视频</el-button>
                <el-button style="float: left; padding: 3px 0" type="text" v-else @click="editVideoIndex = null">取消编辑</el-button>

                <el-button style="float: left; padding: 3px 0" type="text" @click="commodityRemoveVideo(index)">删除视频</el-button>
              </div>

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
          </el-form-item>



        </el-collapse-item>
        <el-collapse-item title="艺术品选项" name="2">
          <!-- "category": "类别", -->
          <el-form-item
            :label="$t('commodity.category')"
            :prop="'category'"
            :rules="{
              required: false,
              message: `${$t('commodity.category')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.categorys">
              <el-checkbox
                name="type"
                v-for="(item, index) in categorys"
                :key="index"
                :label="item"
              >
                {{ options.categorys[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item
            :label="$t('commodity.classification')"
            :prop="'classifications'"
            :rules="{
              required: false,
              message: `${$t('commodity.classification')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.classifications">
              <el-checkbox
                name="type"
                v-for="(item, index) in classifications"
                :key="index"
                :label="item"
              >
                {{ options.classifications[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "material": "材质", -->
          <el-form-item
            :label="$t('commodity.material')"
            :prop="'materials'"
            :rules="{
              required: false,
              message: `${$t('commodity.material')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.materials">
              <el-checkbox
                name="type"
                v-for="(item, index) in materials"
                :key="index"
                :label="item"
              >
                {{ options.materials[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "model": "款式", -->
          <el-form-item
            :label="$t('commodity.model')"
            :prop="'models'"
            :rules="{
              required: false,
              message: `${$t('commodity.model')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.models">
              <el-checkbox
                name="type"
                v-for="(item, index) in models"
                :key="index"
                :label="item"
              >
                {{ options.models[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "place": "摆放", -->
          <el-form-item
            :label="$t('commodity.place')"
            :prop="'places'"
            :rules="{
              required: false,
              message: `${$t('commodity.place')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.places">
              <el-checkbox
                name="type"
                v-for="(item, index) in places"
                :key="index"
                :label="item"
              >
                {{ options.places[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "ruiwu": "瑞物", -->
          <el-form-item
            :label="$t('commodity.ruiwu')"
            :prop="'ruiwus'"
            :rules="{
              required: false,
              message: `${$t('commodity.ruiwu')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.ruiwus">
              <el-checkbox
                name="type"
                v-for="(item, index) in ruiwus"
                :key="index"
                :label="item"
              >
                {{ options.ruiwus[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "shape": "形状", -->
          <el-form-item
            :label="$t('commodity.shape')"
            :prop="'shapes'"
            :rules="{
              required: false,
              message: `${$t('commodity.shape')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.shapes">
              <el-checkbox
                name="type"
                v-for="(item, index) in shapes"
                :key="index"
                :label="item"
              >
                {{ options.shapes[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "specification": "规格", -->
          <el-form-item
            :label="$t('commodity.specification')"
            :prop="'specifications'"
            :rules="{
              required: false,
              message: `${$t('commodity.specification')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.specifications">
              <el-checkbox
                name="type"
                v-for="(item, index) in specifications"
                :key="index"
                :label="item"
              >
                {{ options.specifications[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "style": "风格", -->
          <el-form-item
            :label="$t('commodity.style')"
            :prop="'styles'"
            :rules="{
              required: false,
              message: `${$t('commodity.style')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.styles">
              <el-checkbox
                name="type"
                v-for="(item, index) in styles"
                :key="index"
                :label="item"
              >
                {{ options.styles[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "technique": "手法", -->
          <el-form-item
            :label="$t('commodity.technique')"
            :prop="'techniques'"
            :rules="{
              required: false,
              message: `${$t('commodity.technique')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.techniques">
              <el-checkbox
                name="type"
                v-for="(item, index) in techniques"
                :key="index"
                :label="item"
              >
                {{ options.techniques[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "theme": "主题", -->
          <el-form-item
            :label="$t('commodity.theme')"
            :prop="'themes'"
            :rules="{
              required: false,
              message: `${$t('commodity.theme')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.themes">
              <el-checkbox
                name="type"
                v-for="(item, index) in themes"
                :key="index"
                :label="item"
              >
                {{ options.themes[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "type": "类型", -->
          <el-form-item
            :label="$t('commodity.type')"
            :prop="'types'"
            :rules="{
              required: false,
              message: `${$t('commodity.type')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.types">
              <el-checkbox
                name="type"
                v-for="(item, index) in types"
                :key="index"
                :label="item"
              >
                {{ options.types[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!-- "use": "用途", -->
          <el-form-item
            :label="$t('commodity.use')"
            :prop="'uses'"
            :rules="{
              required: false,
              message: `${$t('commodity.use')}${$t('form.noEmpty')}`,
              trigger: 'change',
            }"
          >
            <el-checkbox-group v-model="form.uses">
              <el-checkbox
                name="type"
                v-for="(item, index) in uses"
                :key="index"
                :label="item"
              >
                {{ options.uses[index].name }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <el-dialog title="选择艺术家" :visible.sync="dialogVisible" width="80%" top='2vh'>
      <el-form :inline="true" :model="sellerSearch" class="user-search">
        <el-form-item :label="$t('user.seller.firstName')">
          <el-input
            v-model="sellerSearch.firstname"
            :placeholder="
              $t('form.placeholder', { msg: $t('user.seller.firstName') })
            "
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('user.seller.lastName')">
          <el-input
            v-model="sellerSearch.lastname"
            :placeholder="
              $t('form.placeholder', { msg: $t('user.seller.lastName') })
            "
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item :label="$t('user.seller.country')">
          <el-input
            v-model="sellerSearch.country"
            :placeholder="
              $t('form.placeholder', { msg: $t('user.seller.country') })
            "
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('user.seller.gender')">
          <el-input
            v-model="sellerSearch.gender"
            :placeholder="
              $t('form.placeholder', { msg: $t('user.seller.gender') })
            "
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('user.seller.label')">
          <el-input
            v-model="sellerSearch.label"
            :placeholder="
              $t('form.placeholder', { msg: $t('user.seller.label') })
            "
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('user.seller.type')">
          <!-- <el-input
          v-model="sellerSearch.type"
          :placeholder="$t('form.placeholder', { msg: $t('user.type') })"
          clearable
        ></el-input> -->
          <el-select
            v-model="sellerSearch.type"
            clearable
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('user.seller.type') })
            "
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="`${item.value} ${item.label}`"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('user.seller.state')">
          <!-- <el-input
          v-model="sellerSearch.state"
          :placeholder="$t('form.placeholder', { msg: $t('user.state') })"
          clearable
        ></el-input> -->
          <el-select
            v-model="sellerSearch.state"
            clearable
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('user.seller.state') })
            "
          >
            <el-option
              v-for="item in stateOptions"
              :key="item.value"
              :label="`${item.value} ${item.label}`"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('user.seller.choice')">
          <!-- <el-input
          v-model="sellerSearch.choice"
          :placeholder="$t('form.placeholder', { msg: $t('user.choice') })"
          clearable
        ></el-input> -->
          <el-select
            v-model="sellerSearch.choice"
            clearable
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('user.seller.choice') })
            "
          >
            <el-option
              v-for="item in choiceOptions"
              :key="item.value"
              :label="`${item.value} ${item.label}`"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('user.seller.id')">
          <el-input
            v-model="sellerSearch.sellerId"
            :placeholder="$t('form.placeholder', { msg: $t('user.seller.id') })"
            clearable
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="searchSellerSubmit(currentPage)"
            icon="el-icon-search"
            >{{ $t('content.search') }}</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :data="seller" border>

        <el-table-column
          prop="banner"
          :label="$t('user.seller.banner')"
          width="200"
        >
          <template slot-scope="scope">
            <div style="width: 180px; height: 100px; overflow-x: auto">
              <img
                v-if="scope.row.banner"
                :src="scope.row.banner"
                class="image"
                height="100px"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="firstname"
          :label="$t('user.seller.firstName')"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="lastname"
          :label="$t('user.seller.lastName')"
          width="120"
        >
        </el-table-column>

        <el-table-column
          prop="country"
          :label="$t('user.seller.country')"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="gender"
          :label="$t('user.seller.gender')"
          width="120"
        ></el-table-column>

        <el-table-column
          prop="tags"
          :label="$t('user.seller.tags')"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="type"
          :label="$t('user.seller.type')"
          width="120"
        >
          <template slot-scope="scope">
            {{ typeOptions[scope.row.type].label }}
          </template>
        </el-table-column>
        <el-table-column
          prop="state"
          :label="$t('user.seller.state')"
          width="120"
        >
          <template slot-scope="scope">
            {{ stateOptions[scope.row.state].label }}
          </template>
        </el-table-column>

        <el-table-column
          prop="choice"
          :label="$t('user.seller.choice')"
          width="120"
        >
          <template slot-scope="scope">
            {{ scope.row.choice ? '是' : '否' }}
          </template>
        </el-table-column>

        <el-table-column
          :formatter="formatterDate"
          prop="createdDate"
          :label="$t('content.createdDate')"
          width="180"
        >
        </el-table-column>

        <el-table-column
          :label="$t('content.operation')"
          width="172"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button
              type="danger"
              v-if="form.seller && form.seller.sellerId == scope.row.sellerId"
              @click="
                form.seller = ''
                dialogVisible = false
              "
            >
              取消
            </el-button>
            <el-button
              type="primary"
              v-else
              @click="
                form.seller = scope.row
                dialogVisible = false
              "
            >
              选择
            </el-button>


          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="sellerPagination.pageSize"
        :current-page="sellerPagination.currentPage"
        :total="sellerPagination.total"
        @current-change="changeSellerCurrentPage"
        style="margin-top: 20px; text-align: center"
      >
      </el-pagination>

      <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span> -->
    </el-dialog>
  </div>
</template>
<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      defaultVideo: {
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: ''
      },
      editVideoIndex: null,
      form: {
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        details: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        postage: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        categorys: [],
        classifications: [],
        materials: [],
        models: [],
        places: [],
        ruiwus: [],
        shapes: [],
        specifications: [],
        styles: [],
        techniques: [],
        themes: [],
        types: [],
        uses: [],
        images: '',
        photos: [],
        removePhotos: [],
        videos: [],
        removeVideos: [],
        colors: [
          {
            startColor: '#ffffff',
            endColor: '#000000',
          },
        ],
        width: '',
        height: '',
        choice: 0,
        state: 0,
        sellerId: '',
      },

      dialogImageUrl: '',
      dialogVisible: false,
      dialogUploadVisible: false,
      loading: false,
      options: {},
      // 0:已添加，1:售卖中，2:已售卖，3:已下架
      states: [
        {
          index: 0,
          name: this.$t('commodity.state.added'),
        },
        {
          index: 1,
          name: this.$t('commodity.state.onsale'),
        },
        {
          index: 2,
          name: this.$t('commodity.state.sold'),
        },
        {
          index: 3,
          name: this.$t('commodity.state.offline'),
        },
        {
          index: 4,
          name: this.$t('commodity.state.notsale'),
        },
      ],
      // "category": "类别",
      categorys: [],
      // "classification": "分类",
      classifications: [],
      // "material": "材质",
      materials: [],
      // "model": "款式",
      models: [],
      // "place": "摆放",
      places: [],
      // "ruiwu": "瑞物",
      ruiwus: [],
      // "shape": "形状",
      shapes: [],
      // "specification": "规格",
      specifications: [],
      // "style": "风格",
      styles: [],
      // "technique": "手法",
      techniques: [],
      // "theme": "主题",
      themes: [],
      // "type": "类型",
      types: [],
      // "use": "用途",
      uses: [],
      isSubmit: false,
      activeCollapses: ['0', '1', '2', '3', '4'],
      typeOptions: [
        {
          value: '0',
          label: this.$t('user.seller.typeOptions.painter'),
        },
        {
          value: '1',
          label: this.$t('user.seller.typeOptions.sculptor'),
        },
      ],
      stateOptions: [
        {
          value: '0',
          label: this.$t('content.audit'),
        },
        {
          value: '1',
          label: this.$t('content.agree'),
        },
        {
          value: '2',
          label: this.$t('content.reject'),
        },
        {
          value: '3',
          label: this.$t('content.disable'),
        },
        {
          value: '4',
          label: this.$t('content.logoff'),
        },

      ],
      choiceOptions: [
        {
          value: true,
          label: this.$t('user.seller.choiceOptions.true'),
        },
        {
          value: false,
          label: this.$t('user.seller.choiceOptions.false'),
        },
      ],
      seller: [],
      sellerSearch: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        type: '',
        state: '',
        choice: '',
      },

      sellerPagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
    }
  },
  async fetch() {
    this.isCreate = true
    this.reset()
    // this.options = {}
    const options = await this.$axios.$get(`/api/admin/commodity/options`)
    if (options.success) {
      this.options = options.data

      // "category": "类别",
      this.categorys = options.data.categorys.map((item) => item.id)
      // "classification": "分类",
      this.classifications = options.data.classifications.map((item) => item.id)
      // "material": "材质",
      this.materials = options.data.materials.map((item) => item.id)
      // "model": "款式",
      this.models = options.data.models.map((item) => item.id)
      // "place": "摆放",
      this.places = options.data.places.map((item) => item.id)
      // "ruiwu": "瑞物",
      this.ruiwus = options.data.ruiwus.map((item) => item.id)
      // "shape": "形状",
      this.shapes = options.data.shapes.map((item) => item.id)
      // "specification": "规格",
      this.specifications = options.data.specifications.map((item) => item.id)
      // "style": "风格",
      this.styles = options.data.styles.map((item) => item.id)
      // "technique": "手法",
      this.techniques = options.data.techniques.map((item) => item.id)
      // "theme": "主题",
      this.themes = options.data.themes.map((item) => item.id)
      // "type": "类型",
      this.types = options.data.types.map((item) => item.id)
      // "use": "用途",
      this.uses = options.data.uses.map((item) => item.id)
    }

    if (this.$route.query && this.$route.query.commodityId) {
      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.$route.query.commodityId,
        },
      })

      if (commodity.success) {
        const commodityForm = commodity.data
        // console.log('commodityForm', commodityForm)
        this.form.commodityId = this.$route.query.commodityId

        this.form.state = commodityForm.state
        this.form.width = commodityForm.width
        this.form.height = commodityForm.height
        this.form.choice = commodityForm.choice
        this.form.colors = commodityForm.colors

        if (commodityForm.name) {
          this.form.name = commodityForm.name
        }
        if (commodityForm.desc) {
          this.form.desc = commodityForm.desc
        }
        if (commodityForm.details) {
          this.form.details = commodityForm.details
        }
        if (commodityForm.postage) {
          this.form.postage = commodityForm.postage
        }
        if (commodityForm.price) {
          this.form.price = commodityForm.price
        }

        if (commodityForm.images) {
          this.form.images = commodityForm.images;
        }


        if (commodityForm.photos && commodityForm.photos.length) {
          const photos = commodityForm.photos.map((item) => {
            item.url = item.src
            return item
          })
          this.form.photos = photos
        }

        if (commodityForm.videos && commodityForm.videos.length) {

          this.form.videos = commodityForm.videos
        }

        // "category": "类别",
        this.form.categorys = commodityForm.categorys.map(
          (item) => item.optionId
        )
        // "classification": "分类",
        this.form.classifications = commodityForm.classifications.map(
          (item) => item.optionId
        )
        // "material": "材质",
        this.form.materials = commodityForm.materials.map(
          (item) => item.optionId
        )
        // "model": "款式",
        this.form.models = commodityForm.models.map((item) => item.optionId)
        // "place": "摆放",
        this.form.places = commodityForm.places.map((item) => item.optionId)
        // "ruiwu": "瑞物",
        this.form.ruiwus = commodityForm.ruiwus.map((item) => item.optionId)
        // "shape": "形状",
        this.form.shapes = commodityForm.shapes.map((item) => item.optionId)
        // "specification": "规格",
        this.form.specifications = commodityForm.specifications.map(
          (item) => item.optionId
        )
        // "style": "风格",
        this.form.styles = commodityForm.styles.map((item) => item.optionId)
        // "technique": "手法",
        this.form.techniques = commodityForm.techniques.map(
          (item) => item.optionId
        )
        // "theme": "主题",
        this.form.themes = commodityForm.themes.map((item) => item.optionId)
        // "type": "类型",
        this.form.types = commodityForm.types.map((item) => item.optionId)
        // "use": "用途",
        this.form.uses = commodityForm.uses.map((item) => item.optionId)

        if (commodityForm.seller) {
          this.form.seller = commodityForm.seller
        }

        // this.form = commodityForm;
        this.type = 'edit'
        this.typeText = this.$t('content.update')
        this.isCreate = false
      }
    }
  },
  computed: {},
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['commodityId'],
  async created() {




    // await this.onCommoditySearch()


    // console.log('this.form', this.form)
  },
  mounted() {
    // this.list = this.states.map((item) => {
    //   return { value: `value:${item}`, label: `label:${item}` }
    // })
  },
  methods: {
    onSubmit(formName) {
      // console.log('submit!', this.form)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          this.isSubmit = true
          if (this.isCreate) {
            data = await this.$axios
              .$post('/api/admin/commodity/create', this.form)
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
          } else {
            // console.log('this.form', this.form)
            data = await this.$axios
              .$post('/api/admin/commodity/update', this.form)
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
          }
          this.isSubmit = false
          // console.log('data', data)
          if (data.success) {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success',
            })
            if (this.isCreate) {
              // this.$refs[formName].resetFields()
              // this.resetForm('form')

              this.isCreate = false
              this.$router.push({
                query: {
                  commodityId: data.data.commodityId,
                },
              })
            }
            // window.location.reload();
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
      if (
        !this.categorys.length ||
        !this.classifications.length ||
        !this.materials.length ||
        !this.models.length ||
        !this.places.length ||
        !this.ruiwus.length ||
        !this.shapes.length ||
        !this.specifications.length ||
        !this.styles.length ||
        !this.techniques.length ||
        !this.themes.length ||
        !this.types.length ||
        !this.uses.length
      ) {
        this.$message({
          showClose: true,
          message: '请先添加艺术品选项',
          type: 'error',
        })
        return
      }
      const createCommodityMock = {
        commodityId: this.form.commodityId,
        name: {
          'zh-cn': Mock.mock('@ctitle(2, 8)'),
          'en-us': Mock.mock('@title(2)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        desc: {
          'zh-cn': Mock.mock('@cparagraph(1,3)'),
          'en-us': Mock.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        details: {
          'zh-cn': Mock.mock('@cparagraph(1,3)'),
          'en-us': Mock.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        postage: {
          'zh-cn': Mock.mock('@cparagraph(1,3)'),
          'en-us': Mock.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        price: {
          'zh-cn': Mock.mock('@integer(60, 100)'),
          'en-us': Mock.mock('@integer(60, 100)'),
          'ja-jp': Mock.mock('@integer(60, 100)'),
          // 'fr-fr': Mock.mock('@integer(60, 100)'),
          'es-es': Mock.mock('@integer(60, 100)'),
        },

        // "category": "类别",
        categorys: [
          this.categorys[Mock.mock(`@integer(0,${this.categorys.length - 1})`)],
        ],
        // "classification": "分类",
        classifications: [
          this.classifications[
            Mock.mock(`@integer(0,${this.classifications.length - 1})`)
          ],
        ],
        // "material": "材质",
        materials: [
          this.materials[Mock.mock(`@integer(0,${this.materials.length - 1})`)],
        ],
        // "model": "款式",
        models: [
          this.models[Mock.mock(`@integer(0,${this.models.length - 1})`)],
        ],
        // "place": "摆放",
        places: [
          this.places[Mock.mock(`@integer(0,${this.places.length - 1})`)],
        ],
        // "ruiwu": "瑞物",
        ruiwus: [
          this.ruiwus[Mock.mock(`@integer(0,${this.ruiwus.length - 1})`)],
        ],
        // "shape": "形状",
        shapes: [
          this.shapes[Mock.mock(`@integer(0,${this.shapes.length - 1})`)],
        ],
        // "specification": "规格",
        specifications: [
          this.specifications[
            Mock.mock(`@integer(0,${this.specifications.length - 1})`)
          ],
        ],
        // "style": "风格",
        styles: [
          this.styles[Mock.mock(`@integer(0,${this.styles.length - 1})`)],
        ],
        // "technique": "手法",
        techniques: [
          this.techniques[
            Mock.mock(`@integer(0,${this.techniques.length - 1})`)
          ],
        ],
        // "theme": "主题",
        themes: [
          this.themes[Mock.mock(`@integer(0,${this.themes.length - 1})`)],
        ],
        // "type": "类型",
        types: [this.types[Mock.mock(`@integer(0,${this.types.length - 1})`)]],
        // "use": "用途",
        uses: [this.uses[Mock.mock(`@integer(0,${this.uses.length - 1})`)]],

        images: '',
        photos: [],
        removePhotos: [],
        videos: [],
        removeVideos: [],
        colors: [
          {
            startColor: '#ffffff',
            endColor: '#000000',
          },
        ],
        width: Mock.mock('@natural(100, 300)'),
        height: Mock.mock('@natural(100, 300)'),
        choice: 0,
        state: Mock.mock('@integer(0, 3)'),
        seller: this.form.seller,
      }
      // console.log('createCommodityMock', createCommodityMock)
      this.form = createCommodityMock

      this.type = 'create'
      this.typeText = this.$t('content.create')
      this.isCreate = true;

    },
    resetForm(formName) {
      this.reset()
      this.type = 'create'
      this.typeText = this.$t('content.create')
      this.isCreate = true
      this.$refs[formName].clearValidate()
      // console.log(this.form)
    },

    reset() {
      this.form = {
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        details: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        postage: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        categorys: [],
        classifications: [],
        materials: [],
        models: [],
        places: [],
        ruiwus: [],
        shapes: [],
        specifications: [],
        styles: [],
        techniques: [],
        themes: [],
        types: [],
        uses: [],
        images: '',
        photos: [],

        removePhotos: [],
        videos: [],
        removeVideos: [],
        colors: [
          {
            startColor: '#ffffff',
            endColor: '#000000',
          },
        ],
        width: '',
        height: '',
        choice: 0,
        state: 0,
        sellerId: '',
      }
    },
    uploadSuccess(res, file) {
      // console.log(res, file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.form.photos.push({
        src: res.data.src,
        url: res.data.src,
        name: file.name,
        uid: file.uid,
      })
      // console.log(this.form)
    },
    handleVideoPhotoSuccess(res, file) {
      // this.form.videos[index]videoPhoto = res.data.src
      this.form.videos[this.editVideoIndex].videoPhoto = res.data.src;
    },
    handleCommodityImagesSuccess(res, file) {
      this.form.images = res.data.src;
    },
    handleDefaultVideoPhotoSuccess(res, file) {
      this.defaultVideo.videoPhoto = res.data.src
    },
    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.form.photos)) {
        if (item.uid === file.uid) {
          if (this.form.photos[index] && this.form.photos[index].id) {
            this.form.removePhotos.push(this.form.photos[index])
          }
          this.form.photos.splice(index, 1)
        }
      }
    },
    uploadPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogUploadVisible = true
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    // 查找艺术家
    async searchSellerSubmit(currentPage) {
      const searchData = await this.$axios.$get('/api/admin/seller/search', {
        params: {
          ...this.sellerSearch,
          currentPage: currentPage,
          pageSize: this.sellerPagination.pageSize,
        },
      })

      let sellerDataFormat = []
      searchData.data.list.forEach((item) => {
        item.visible = false
        if (!item.user) {
          item.user = {
            avatar: '',
            createdDate: '',
            name: '',
            email: '',
            phone: '',
            userId: '',
          }
        }
        sellerDataFormat.push(item)
      })

      this.sellerPagination.total = searchData.data.total
      this.seller = sellerDataFormat
    },
    async selectSellerBtn() {
      this.sellerPagination.currentPage = 1
      await this.searchSellerSubmit(1)
      this.dialogVisible = true
    },
    changeSellerCurrentPage(currentPage) {
      this.searchSellerSubmit(currentPage)
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    commodityAddVideo() {
      this.form.videos.push(Object.assign({}, this.defaultVideo));
      this.defaultVideo = {
        video: '',
        ccId: '',
        siteId: '',
        videoPhoto: ''
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
<style>
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
</style>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
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

.commodity-images-uploader-icon{
  font-size: 28px;
  color: #8c939d;
  width: 225px;
  height: 225px;
  line-height: 225px;
  text-align: center;
}
.commodity-images {
  width: 225px;
  height: 225px;
  display: block;
}
</style>
