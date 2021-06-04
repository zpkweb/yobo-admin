<template>
  <div class="user-create">
    <el-form
      ref="sellerData"
      :model="sellerData"
      label-width="90px"
      class="user-create-form"
    >
      <el-container>
        <el-header>
          <el-button
            v-if="isCreate"
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="submitForm('sellerData')"
            :loading="isSubmit"
          >
            {{ $t('content.create') }}
          </el-button>

          <el-button
            v-else
            type="primary"
            icon="el-icon-check"
            @click="submitForm('sellerData')"
            :loading="isSubmit"
          >
            {{ $t('content.update') }}
          </el-button>
          <el-button icon="el-icon-check" @click="onMock">
            {{ $t('content.fill') }}
          </el-button>
          <el-button
            icon="el-icon-circle-close"
            @click="resetForm('sellerData')"
            >{{ $t('content.clear') }}</el-button
          >
        </el-header>
      </el-container>

      <!-- <el-form-item :label="`关联${$t('user.userId')}`" prop="userId">

        <el-input
          v-model="sellerData.user.userId"
          :placeholder="$t('form.placeholder', { msg: $t('user.userId') })"
          style="width:320px;"
        ></el-input>
        <el-button type="primary" @click="selectUserBtn">选择用户</el-button>

      </el-form-item> -->

      <el-collapse v-model="activeCollapses" >
        <el-collapse-item title="关联用户" name="0">
          <el-form-item  prop="userId">
            <el-button type="primary" @click="selectUserBtn">选择用户</el-button>
          </el-form-item>

        <template v-if="sellerData.user.name || sellerData.user.email">
          <el-form-item :label="$t('user.avatar')" prop="avatar" >
            <img
                v-if="sellerData.user.avatar"
                :src="sellerData.user.avatar"
                class="avatar"
              />
          </el-form-item>

          <el-form-item :label="$t('user.name')" prop="name">
            <el-input
              v-model="sellerData.user.name"
              disabled
            ></el-input>
          </el-form-item>

          <el-form-item :label="$t('user.email')" prop="email" >
            <el-input
              v-model="sellerData.user.email"
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('user.phone')" prop="phone">
            <el-input
              v-model="sellerData.user.phone"
              disabled
            ></el-input>
          </el-form-item>
        </template>

        </el-collapse-item>

        <el-collapse-item title="艺术家信息" name="1">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item :label="$t('user.seller.state')" prop="identity">
                <!-- <el-select
                v-model="sellerData.state"
                :placeholder="
                  $t('form.selectPlaceholder', { msg: $t('user.state') })
                "
              >
                <el-option
                  v-for="item in stateOptions"
                  :key="item.value"
                  :label="`${item.value} ${item.label}`"
                  :value="item.value"
                >
                </el-option>
              </el-select> -->
                <el-radio-group v-model="sellerData.seller.state">
                  <el-radio
                    :label="item.value"
                    v-for="item in stateOptions"
                    :key="item.value"
                    >{{ item.label }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item :label="$t('user.seller.type')" prop="identity">
                <!-- <el-select
                v-model="sellerData.type"
                :placeholder="
                  $t('form.selectPlaceholder', { msg: $t('user.type') })
                "
              >
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="`${item.value} ${item.label}`"
                  :value="item.value"
                >
                </el-option>
              </el-select> -->
                <el-radio-group v-model="sellerData.seller.type">
                  <el-radio
                    :label="item.value"
                    v-for="item in typeOptions"
                    :key="item.value"
                    >{{ item.label }}</el-radio
                  >
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item :label="$t('user.seller.choice')" prop="choice">
              <el-switch v-model="sellerData.seller.choice"></el-switch>
            </el-form-item>
          </el-row>

          <el-form-item :label="$t('user.seller.banner')" prop="avatar">
            <el-upload
              v-model="sellerData.seller.banner"
              class="banner-uploader"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'sellerBanner' }"
              :show-file-list="false"
              :on-success="handleSellerBannerSuccess"
              :before-upload="beforeUpload"
            >
              <img
                v-if="sellerData.seller.banner"
                :src="sellerData.seller.banner"
                class="seller-banner"
              />
              <i v-else class="el-icon-plus seller-banner-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">
                艺术家背景图片，请上传 (大于1220)X510 比例的图片，且不超过2M
              </div>
            </el-upload>
          </el-form-item>

          <el-form-item :label="$t('user.seller.label')" prop="tags">
            <el-tag
              :key="tag"
              v-for="tag in sellerData.seller.tags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ New Tag</el-button
            >
          </el-form-item>
          <el-form-item :label="$t('user.seller.firstName')" prop="firstname">
            <el-input
              v-model="sellerData.seller.firstname"
              :placeholder="
                $t('form.placeholder', { msg: $t('user.seller.firstName') })
              "
            ></el-input>
          </el-form-item>
          <el-form-item :label="$t('user.seller.lastName')" prop="lastname">
            <el-input
              v-model="sellerData.seller.lastname"
              :placeholder="
                $t('form.placeholder', { msg: $t('user.seller.lastName') })
              "
            ></el-input>
          </el-form-item>

          <el-form-item :label="$t('user.seller.gender')" prop="gender">
            <el-input
              v-model="sellerData.seller.gender"
              :placeholder="$t('form.placeholder', { msg: $t('user.seller.gender') })"
            ></el-input>
          </el-form-item>

          <el-form-item :label="$t('user.seller.country')" prop="country">
            <el-input
              v-model="sellerData.seller.country"
              :placeholder="$t('form.placeholder', { msg: $t('user.seller.country') })"
            ></el-input>
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="艺术家其他信息" name="2">
          <el-form-item prop="language">
            <el-input
              v-model="sellerData.metadata.language"
              :placeholder="
                $t('form.placeholder', {
                  msg: $t('user.seller.metadata.language'),
                })
              "
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="quill-editor"
                  :content="sellerData.metadata.profileZhcn"
                  @change="onEditorChangeZhcn($event, 'zhcn')"
                  v-quill:myQuillEditorZhcn="editorOptionZhcn">
                </div>
              </el-col>

              <el-col :span="6">
                <div class="quill-editor"
                  :content="sellerData.metadata.profileEnus"
                  @change="onEditorChangeEnus($event, 'enus')"
                  v-quill:myQuillEditorEnus="editorOptionEnus">
                </div>
              </el-col>

              <el-col :span="6">
                <div class="quill-editor"
                  :content="sellerData.metadata.profileJajp"
                  @change="onEditorChangeJajp($event, 'jajp')"
                  v-quill:myQuillEditorJajp="editorOptionJajp">
                </div>
              </el-col>

              <el-col :span="6">
                <div class="quill-editor"
                  :content="sellerData.metadata.profileEses"
                  @change="onEditorChangeEses($event, 'eses')"
                  v-quill:myQuillEditorEses="editorOptionEses">
                </div>
              </el-col>
            </el-row>



          </el-form-item>




          <el-form-item prop="isFullTime">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.isFullTime"
              :placeholder="$t('user.seller.metadata.isFullTime')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="onlineSell">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.onlineSell"
              :placeholder="$t('user.seller.metadata.onlineSell')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="sold">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.sold"
              :placeholder="$t('user.seller.metadata.sold')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="channel">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.channel"
              :placeholder="$t('user.seller.metadata.channel')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="gallery">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.gallery"
              :placeholder="$t('user.seller.metadata.gallery')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="medium">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.medium"
              :placeholder="$t('user.seller.metadata.medium')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="galleryInfo">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.galleryInfo"
              :placeholder="$t('user.seller.metadata.galleryInfo')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="recommend">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.recommend"
              :placeholder="$t('user.seller.metadata.recommend')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="prize">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.prize"
              :placeholder="$t('user.seller.metadata.prize')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="website">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.website"
              :placeholder="$t('user.seller.metadata.website')"
            ></el-input>
          </el-form-item>

          <el-form-item prop="findUs">
            <el-input
              type="textarea"
              v-model="sellerData.metadata.findUs"
              :placeholder="$t('user.seller.metadata.findUs')"
            ></el-input>
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="艺术家工作室" name="3">
          <el-form-item :label="$t('user.seller.studio.banner')" prop="avatar">
            <el-upload
              v-model="sellerData.studio.banner"
              class="banner-uploader"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'sellerStudioBanner' }"
              :show-file-list="false"
              :on-success="handleStudioBannerSuccess"
              :before-upload="beforeUpload"
            >
              <img
                v-if="sellerData.studio && sellerData.studio.banner"
                :src="sellerData.studio.banner"
                class="seller-banner"
              />
              <i v-else class="el-icon-plus seller-banner-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">
                工作室背景图片，请上传 (大于1220)X510 比例的图片，且不超过2M
              </div>
            </el-upload>
          </el-form-item>

          <el-form-item
            :label="$t('user.seller.studio.name')"
            prop="studio.name"
          >
            <el-input
              v-model="sellerData.studio.name"
              :placeholder="
                $t('form.placeholder', { msg: $t('user.seller.studio.name') })
              "
            ></el-input>
          </el-form-item>
          <p style="color:red;">以下内容显示规则：ccId + siteId + 封面图 > 视频链接 > 图片 > 文字 </p>
          <!-- <p>视频，图片，文字，</p> -->
          <!-- https://video.zbgedu.com/example?isShowConfig=false&ccId=61AA76B5334118229C33DC5901307461&siteId=E5DD260925A6084B -->

          <el-form-item
            :label="$t('user.seller.studio.ccId')"
            prop="studio.ccId"
          >
            <el-input
              v-model="sellerData.studio.ccId"
              :placeholder="
                $t('form.placeholder', { msg: $t('user.seller.studio.ccId') })
              "
            ></el-input>
            <div class="el-upload__tip">
              ccId  示例：61AA76B5334118229C33DC5901307461
            </div>

          </el-form-item>



          <el-form-item
            :label="$t('user.seller.studio.siteId')"
            prop="studio.siteId"
          >
            <el-input
              v-model="sellerData.studio.siteId"
              :placeholder="
                $t('form.placeholder', { msg: $t('user.seller.studio.siteId') })
              "
            ></el-input>
            <div class="el-upload__tip">
              siteId  E5DD260925A6084B
            </div>
          </el-form-item>


          <el-form-item
            :label="$t('user.seller.studio.videoPhoto')"
            prop="studio.videoPhoto"
          >
            <el-upload
              v-model="sellerData.studio.videoPhoto"
              class="banner-uploader"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'sellerStudioVideoImg' }"
              :show-file-list="false"
              :on-success="handleStudioVideoPhotoSuccess"
              :before-upload="beforeUpload"
            >
              <img
                v-if="sellerData.studio && sellerData.studio.videoPhoto"
                :src="sellerData.studio.videoPhoto"
                class="seller-banner"
              />
              <i v-else class="el-icon-plus seller-banner-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">
                视频封面图片，请上传 600X250 比例的图片，且不超过2M
              </div>
            </el-upload>
          </el-form-item>




          <el-form-item
            :label="$t('user.seller.studio.video')"
            prop="studio.video"
          >
            <el-input
              v-model="sellerData.studio.video"
              :placeholder="
                $t('form.placeholder', { msg: $t('user.seller.studio.video') })
              "
            ></el-input>
            <div class="el-upload__tip">
              工作室视频，暂时支持http格式的视频。例如：http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4
            </div>
          </el-form-item>


          <el-form-item
            :label="$t('user.seller.studio.photo')"
            prop="studio.photo"
          >
            <el-upload
              v-model="sellerData.studio.photo"
              class="banner-uploader"
              :action="`${$config.origin}/api/upload/images`"
              :data="{ type: 'sellerStudioPhoto' }"
              :show-file-list="false"
              :on-success="handleStudioPhotoSuccess"
              :before-upload="beforeUpload"
            >
              <img
                v-if="sellerData.studio && sellerData.studio.photo"
                :src="sellerData.studio.photo"
                class="seller-banner"
              />
              <i v-else class="el-icon-plus seller-banner-uploader-icon"></i>
              <div slot="tip" class="el-upload__tip">
                工作室图片，请上传 600X250 比例的图片，且不超过2M
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item
            :label="$t('user.seller.studio.introduce')"
            prop="studio.introduce"
          >
            <el-input
              v-model="sellerData.studio.introduce"
              :placeholder="
                $t('form.placeholder', {
                  msg: $t('user.seller.studio.introduce'),
                })
              "
            ></el-input>
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="艺术家履历" name="4">
          <el-tabs v-model="tabsActive" @tab-click="handleClick">
            <el-tab-pane
              :label="tabItem.label"
              :name="tabItem.name"
              v-for="tabItem in tabsResume"
              :key="tabItem.name"
            >
              <!-- <el-form-item > -->
              <el-row
                :gutter="20"
                v-for="(item, index) in sellerData.resume[tabItem.name]"
                :key="index"
                style="margin-bottom: 20px"
              >
                <el-col :span="4">
                  <el-button @click="resumeDelete(tabItem.name, item)"
                      >{{ $t('content.delete') }}{{ tabItem.label }}</el-button
                    >
                </el-col>

                <el-col :span="4" v-if="item.zhcn">
                  <el-input
                    v-model="item.zhcn.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.zh')}${tabItem.label}年份` })"
                  ></el-input>
                  <el-input
                    style="margin-top: 10px;"
                    v-model="item.zhcn.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.zh')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>
                <el-col :span="4" v-if="item.enus">
                  <el-input
                    v-model="item.enus.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.en')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="item.enus.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.en')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>
                <el-col :span="4" v-if="item.jajp">
                  <el-input
                    v-model="item.jajp.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.ja')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="item.jajp.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.ja')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>
                <el-col :span="4" v-if="item.eses">
                  <el-input
                    v-model="item.eses.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.es')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="item.eses.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.es')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>


              </el-row>

              <el-row :gutter="20" >
                <el-col :span="4">
                  <el-button @click="resumeCreate(tabItem.name)"
                      >{{ $t('content.create') }}{{ tabItem.label }}</el-button
                    >
                </el-col>
                <!-- <el-col :span="4">
                  <el-input
                    v-model="defaultResume[tabItem.name].year"
                    :placeholder="`请输入${tabItem.label}年份`"
                  ></el-input>
                  <el-input
                    v-model="defaultResume[tabItem.name].resume"
                    type="textarea"
                    :placeholder="`请输入${tabItem.label}事件`"
                  ></el-input>
                </el-col> -->
                <el-col :span="4" >

                  <el-input
                    v-model="defaultResume[tabItem.name].zhcn.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.zh')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="defaultResume[tabItem.name].zhcn.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.zh')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>
                <el-col :span="4" >
                  <el-input
                    v-model="defaultResume[tabItem.name].enus.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.en')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="defaultResume[tabItem.name].enus.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.en')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>
                <el-col :span="4" >
                  <el-input
                    v-model="defaultResume[tabItem.name].jajp.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.ja')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="defaultResume[tabItem.name].jajp.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.ja')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>
                <el-col :span="4" >
                  <el-input
                    v-model="defaultResume[tabItem.name].eses.year"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.es')}${tabItem.label}年份` })"
                  ></el-input>

                  <el-input
                    style="margin-top: 10px;"
                    v-model="defaultResume[tabItem.name].eses.resume"
                    type="textarea"
                    :placeholder="$t('form.placeholder', { msg: `${$t('lang.es')}${tabItem.label}事件` })"
                  ></el-input>
                </el-col>


              </el-row>
              <!-- </el-form-item> -->
            </el-tab-pane>
            <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
          </el-tabs>
        </el-collapse-item>
      </el-collapse>
    </el-form>

    <el-dialog
  title="选择用户"
  :visible.sync="dialogVisible"
  width="80%"
  >
  <el-form :inline="true" :model="userSearch" class="user-search">
    <el-form-item :label="$t('user.name')">
      <el-input
        v-model="userSearch.name"
        :placeholder="$t('form.placeholder', { msg: $t('user.name') })"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item :label="$t('user.email')">
      <el-input
        v-model="userSearch.email"
        :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item :label="$t('user.phone')">
      <el-input
        v-model="userSearch.phone"
        :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
        clearable
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="userSearchSubmit(userPagination.currentPage)" icon="el-icon-search">{{
        $t('content.search')
      }}</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="user" border>
      <el-table-column prop="userId" :label="$t('user.userId')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.userId"
            :placeholder="$t('form.placeholder', { msg: $t('user.userId') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span v-else>
            {{ scope.row.userId }}
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="avatar" :label="$t('user.avatar')" width="122">
        <template slot-scope="scope">
            <img v-if="scope.row.avatar" :src="scope.row.avatar" class="image" width="100px" height="100px" />

        </template>
      </el-table-column>

      <el-table-column prop="name" :label="$t('user.name')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            :placeholder="$t('form.placeholder', { msg: $t('user.name') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span v-else>
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="email" :label="$t('user.email')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.email"
            :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span class="table-column-span" v-else>
            {{ scope.row.email }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" :label="$t('user.phone')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.phone"
            :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span class="table-column-span" v-else>
            {{ scope.row.phone }}
          </span>
        </template>
      </el-table-column>

      <el-table-column
        prop="createdDate"
        :label="$t('content.createdDate')"
        :formatter="formatterDate"
      >
      </el-table-column>



      <el-table-column :label="$t('content.operation')" width="172">
        <template slot-scope="scope">
          <template v-if="scope.row.seller">
            用户已关联艺术家 {{scope.row.seller.firstname}}{{scope.row.seller.lastname}}
          </template>
          <template v-else>
            <el-button type="danger" v-if="sellerData.user && sellerData.user.userId == scope.row.userId"  @click="sellerData.user = '';dialogVisible = false">
              取消
            </el-button>
            <el-button type="primary" v-else @click="sellerData.user = scope.row;dialogVisible = false">
              选择
            </el-button>
          </template>

        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="userPagination.pageSize"
      :current-page="userPagination.currentPage"
      :total="userPagination.total"
      @current-change="changeUserCurrentPage"
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
  watchQuery: ['sellerId'],
  data() {
    var validateEmail = (rule, value, callback) => {
      if (!value && !this.sellerData.phone) {
        callback(new Error('邮箱和电话必须输入一项'))
      } else {
        if (!this.sellerData.phone) {
          this.$refs.sellerData.clearValidate('phone')
        }
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (!this.sellerData.email && !value) {
        callback(new Error('邮箱和电话必须输入一项'))
      } else {
        if (!this.sellerData.email) {
          this.$refs.sellerData.clearValidate('email')
        }
        callback()
      }
    }
    return {
        editorOptionZhcn: {
          placeholder: this.$t('form.placeholder', {
                  msg: `${this.$t('lang.zh')}${this.$t('user.seller.metadata.profile')}`,
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
                  msg: `${this.$t('lang.en')}${this.$t('user.seller.metadata.profile')}`,
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
                  msg: `${this.$t('lang.ja')}${this.$t('user.seller.metadata.profile')}`,
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
                  msg: `${this.$t('lang.zh')}${this.$t('user.seller.metadata.profile')}`,
                }),
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          },
        },

      dialogVisible: false,
      userSearch: {
        name: '',
        email: '',
        phone: '',
        identity: '',
      },
      userPagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
      user: [],
      isSubmit: false,
      type: 'create', // create edit
      inputVisible: false,
      inputValue: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      sellerId: '',
      // 状态：0: 审核, 1: 通过, 2: 拒绝, 3: 禁用, 4: 注销
      stateOptions: [
        {
          value: 0,
          label: this.$t('content.audit'),
        },
        {
          value: 1,
          label: this.$t('content.agree'),
        },
        {
          value: 2,
          label: this.$t('content.reject'),
        },
        {
          value: 3,
          label: this.$t('content.disable'),
        },
        {
          value: 4,
          label: this.$t('content.logoff'),
        },
      ],

      typeOptions: [
        {
          value: 0,
          label: this.$t('user.seller.typeOptions.painter'),
        },
        {
          value: 1,
          label: this.$t('user.seller.typeOptions.sculptor'),
        },
      ],
      sellerData: {

        user: {
          userId: '',
          avatar: '',
          name: '',
          email: '',
          phone: '',
        },
        seller: {
          state: 1,
          type: 0,
          choice: false,
          banner: '',
          tags: [],
          firstname: '',
          lastname: '',
          gender: '',
          country: '',
        },
        metadata: {
          language: '',
          findUs: '',
          isFullTime: '',
          onlineSell: '',
          sold: '',
          channel: '',
          gallery: '',
          medium: '',
          galleryInfo: '',
          recommend: '',
          prize: '',
          website: '',
          profileZhcn: '',
          profileEnus: '',
          profileJajp: '',
          profileEses: '',
        },
        studio: {
          banner: '',
          name: '',
          introduce: '',
          video: '',
          photo: '',
          ccId: '',
          siteId: '',
          videoPhoto: ''
        },
        resume: {
          prize: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          individua: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          organizing: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          publish: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
        },
      },
      defaultResume: {
        prize:
            {
              zhcn: {
          year: '',
          resume: '',
        },
              enus: {
          year: '',
          resume: '',
        },
              jajp: {
          year: '',
          resume: '',
        },
              eses: {
          year: '',
          resume: '',
        }
            }
          ,
        individua:
            {
              zhcn: {
          year: '',
          resume: '',
        },
              enus: {
          year: '',
          resume: '',
        },
              jajp: {
          year: '',
          resume: '',
        },
              eses: {
          year: '',
          resume: '',
        }
            }
          ,
        organizing:
            {
              zhcn: {
          year: '',
          resume: '',
        },
              enus: {
          year: '',
          resume: '',
        },
              jajp: {
          year: '',
          resume: '',
        },
              eses: {
          year: '',
          resume: '',
        }
            }
          ,
        publish:
            {
              zhcn: {
          year: '',
          resume: '',
        },
              enus: {
          year: '',
          resume: '',
        },
              jajp: {
          year: '',
          resume: '',
        },
              eses: {
          year: '',
          resume: '',
        }
            }
          ,


      },
      activeCollapses: ['0', '1', '2', '3', '4'],
      tabsResume: [
        {
          name: 'prize',
          label: '奖项',
        },
        {
          name: 'individua',
          label: '个展',
        },
        {
          name: 'organizing',
          label: '组展',
        },
        {
          name: 'publish',
          label: '发表',
        },
      ],
      tabsActive: 'prize',
    }
  },
  async fetch() {
    // console.log('fetch this.$refs.sellerData', this.$refs.sellerData)
    // this.$refs.sellerData.resetFields()

    if (this.$route.query && this.$route.query.sellerId) {
      this.sellerId = this.$route.query.sellerId;
      const sellerResult = await this.$axios.$get('/api/admin/seller/edit', {
        params: {
          sellerId: this.sellerId,
        },
      })
      // console.log("user", sellerResult)
      if (sellerResult.success) {


        this.sellerData = Object.assign(this.sellerData, sellerResult.data);


        // console.log(this.sellerData)
        this.type = 'edit'
        this.typeText = this.$t('content.update')
        this.isCreate = false
        // this.rules.user.password[0].required = false
      }
    }
  },
  created() {
    // console.log(JSON.stringify(this.sellerData.resume))

  },
  methods: {
    submitForm(sellerData) {
      if(!this.sellerData.seller.firstname){
        this.$message({
          showClose: true,
          message: "请输入姓氏",
          type: 'error',
        })
        return;
      }
      if(!this.sellerData.seller.lastname){
        this.$message({
          showClose: true,
          message: "请输入名字",
          type: 'error',
        })
        return;
      }

      this.$refs[sellerData].validate(async (valid) => {
        if (valid) {
          let data;
          this.isSubmit = true;

          console.log(this.sellerData)
          // console.log(this.typeOptions[this.sellerData.seller.type])
          // return;

          try {
            if (this.isCreate) {
              // 用户申请成为艺术家 /api/user/seller/apply
              // data = await this.$axios.$post('/api/user/seller/apply', this.sellerData)

              // 管理员创建艺术家 /api/admin/user/register
              // const { resume } = this.sellerData;
              data = await this.$axios
                .$post('/api/admin/seller/create', {
                  // identity: 'seller',
                  // typeName: this.sellerData.seller.type ? this.typeOptions[this.sellerData.seller.type].label : '',
                  ...this.sellerData,
                })
                .catch((err) => {
                  this.isSubmit = false
                })

              // data = await this.$axios.$post('/api/user/seller/apply', {
              //   identity: this.$route.params.identity,
              //   name: this.sellerData.name,
              //   email: this.sellerData.email,
              //   phone: this.sellerData.phone,
              //   password: this.sellerData.password,
              // })
            } else {
              data = await this.$axios
                .$post('/api/admin/seller/update', {
                  // typeName: this.typeOptions[this.sellerData.type].label,
                  ...this.sellerData,
                })
                .catch((err) => {
                  this.isSubmit = false
                })
            }
            this.isSubmit = false

            if (data.success) {
              this.$message({
                showClose: true,
                message: `${this.sellerData.seller.firstname}${
                  this.sellerData.seller.lastname
                }，${this.typeText}${this.$t('content.success')}`,
                type: 'success',
              })
              if (this.isCreate) {
                // this.$refs[sellerData].resetFields()
                this.isCreate = false;
                this.$router.push({ query: {
                  sellerId: data.data.sellerId
                } })
              }
            } else {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}, ${data.message}`,
                type: 'error',
              })
            }
          } catch (error) {
            // console.log('error', error)
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}`,
              type: 'error',
            })
          }
          // if (data.success) {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.sellerData.firstname}${this.sellerData.lastname}，${this.typeText}成功`,
          //     type: 'success',
          //   })
          //   if (this.isCreate) {
          //     this.$refs[sellerData].resetFields()
          //   }
          // } else {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.typeText}失败!${data.message}`,
          //     type: 'error',
          //   })
          // }
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(sellerData) {
      this.$refs[sellerData].resetFields()
    },
    async selectUserBtn() {
      // if(this.user && !this.user.length) {
        this.userPagination.currentPage = 1;
        await this.userSearchSubmit(1);
      // }
      this.dialogVisible = true;
    },
    // 查找用户
    async userSearchSubmit(currentPage) {


        const userSearch = await this.$axios.$get('/api/admin/user/search', {
          params: {
            identity: this.userSearch.identity,
            name: this.userSearch.name,
            email: this.userSearch.email,
            phone: this.userSearch.phone,
            pageSize: this.userPagination.pageSize,
            currentPage: currentPage,
          },
        })
        this.userPagination.total = userSearch.data.total
        this.user = userSearch.data.list

    },
    changeUserCurrentPage(currentPage) {
      this.userSearchSubmit(currentPage)
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    onMock() {
      const firstname = Mock.mock('@cfirst');
      const lastname = Mock.mock('@cfirst');
      this.sellerData = {

        user: {
          userId: '',
          avatar: '',
          name: '',
          email: '',
          phone: '',
          password: '',
        },
        seller: {
          state: 1,
          type: 0,
          choice: false,
          banner: '',
          tags: [],
          firstname: firstname,
          lastname: lastname,
          gender: '',
          country: Mock.mock('@province'),
        },
        metadata: {
          language: '',
          findUs: '',
          isFullTime: '',
          onlineSell: '',
          sold: '',
          channel: '',
          gallery: '',
          medium: '',
          galleryInfo: '',
          recommend: '',
          prize: '',
          website: '',
          profileZhcn: '',
          profileEnus: '',
          profileJajp: '',
          profileEses: '',
        },
        studio: {
          banner: '',
          name: '',
          introduce: '',
          video: '',
          photo: '',
        },
        resume: {
          prize: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          individua: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          organizing: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          publish: [
            // {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
        },


      }
    },
    handleUserAvatarSuccess(res, file) {
      // this.sellerData.avatar = URL.createObjectURL(file.raw);
      this.sellerData.user.avatar = res.data.src
    },
    handleSellerBannerSuccess(res, file) {
      this.sellerData.seller.banner = res.data.src
    },
    handleStudioBannerSuccess(res, file) {
      this.sellerData.studio.banner = res.data.src
    },
    handleStudioPhotoSuccess(res, file) {
      this.sellerData.studio.photo = res.data.src
    },
    handleStudioVideoPhotoSuccess(res, file) {
      this.sellerData.studio.videoPhoto = res.data.src
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    handleClose(tag) {
      this.sellerData.tags.splice(this.sellerData.tags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.sellerData.seller.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    handleClick(tab, event) {
      // console.log(tab, event)
    },

    async resumeCreate(type, item) {
      // console.log(this.sellerData.resume[type], type, item)
      this.sellerData.resume[type].push(this.defaultResume[type])
      this.defaultResume[type] = {
              zhcn: {
          year: '',
          resume: '',
        },
              enus: {
          year: '',
          resume: '',
        },
              jajp: {
          year: '',
          resume: '',
        },
              eses: {
          year: '',
          resume: '',
        }
            }

      return;


    },

    async resumeDelete(type,  index) {
      this.sellerData.resume[type].splice(index, 1)
      return;


    },

      onEditorChangeZhcn({ editor, html, text }, type) {
        console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.sellerData.metadata.profileZhcn = html;
      },
    onEditorChangeEnus({ editor, html, text }, type) {
        console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.sellerData.metadata.profileEnus = html;
      },
      onEditorChangeJajp({ editor, html, text }, type) {
        console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.sellerData.metadata.profileJajp = html;
      },
      onEditorChangeEses({ editor, html, text }, type) {
        console.log('editor change!', editor, html, text, type)
        // this.content = html
        this.sellerData.metadata.profileEses = html;
      },
  },
}
</script>
<style scoped>
/* .user-create {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-create-form {
  width: 100%;
} */

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.seller-banner-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 239px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.seller-banner {
  width: 239px;
  height: 100px;
  display: block;
}
</style>

