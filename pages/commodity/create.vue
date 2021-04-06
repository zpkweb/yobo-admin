<template>
  <el-form ref="form" :model="form" label-width="108px">
    <el-form-item>
      <el-button
        v-if="isCreate"
        type="primary"
        icon="el-icon-circle-plus-outline"
        @click="onSubmit('form')"
      >
        {{ $t('content.create') }}
      </el-button>

      <el-button
        v-else
        type="primary"
        icon="el-icon-check"
        @click="onSubmit('form')"
      >
        {{ $t('content.update') }}
      </el-button>
      <el-button icon="el-icon-check" @click="onMock">
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
            $t('langname', { lang: $t('lang.zh'), name: $t('commodity.name') })
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
            $t('langname', { lang: $t('lang.en'), name: $t('commodity.name') })
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
            $t('langname', { lang: $t('lang.ja'), name: $t('commodity.name') })
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
      <el-col :span="6"
        >
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
            $t('langname', { lang: $t('lang.es'), name: $t('commodity.name') })
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
          ></el-input>
          </el-form-item
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', { lang: $t('lang.zh'), name: $t('commodity.desc') })
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
            $t('langname', { lang: $t('lang.en'), name: $t('commodity.desc') })
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
            $t('langname', { lang: $t('lang.ja'), name: $t('commodity.desc') })
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
      <el-col :span="6"
        >
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
            $t('langname', { lang: $t('lang.es'), name: $t('commodity.desc') })
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
          ></el-input>
          </el-form-item
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
            message: `${$t('lang.price.zh')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.price['zh-cn']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.zh') })"
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
            message: `${$t('lang.price.en')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.price['en-us']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.en') })"
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
            message: `${$t('lang.price.ja')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.price['ja-jp']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.ja') })"
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
            message: `${$t('lang.price.es')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.price['es-es']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.es') })"
            ><template slot="append">€</template></el-input
          >
          </el-form-item
        ></el-col
      >
      <!-- <el-col :span="6"
          ><el-input v-model="form.price['fr-fr']" placeholder="请输入法郎价格"><template slot="append">₣</template></el-input
        ></el-col> -->
    </el-row>

    <el-row :gutter="20">
      <el-col :span="10">
        <el-form-item
          :label="$t('commodity.width.title')"
          :prop="'width'"
          :rules="{
            required: true,
            message: `${$t('commodity.width.title')}${$t('form.noEmpty')}`,
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
      <el-col :span="10">
        <el-form-item
          :label="$t('commodity.height.title')"
          :prop="'height'"
          :rules="{
            required: true,
            message: `${$t('commodity.height.title')}${$t('form.noEmpty')}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.height"
            type="input"
            :placeholder="
              $t('form.placeholder', { msg: $t('commodity.height.title') })
            "
          >
            <template slot="append">cm</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>


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
      <el-checkbox name="type" v-for="(item, index) in categorys" :key="index" :label="item" :value="item['zh-cn']">
        {{item['zh-cn']}}
      </el-checkbox>
    </el-checkbox-group>

      <!-- <el-select
        v-model="form.categorys"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.category') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in categorys"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
    </el-form-item>
    <!-- "classification": "分类", -->
    <el-form-item
      :label="$t('commodity.classification')"
      :prop="'classifications'"
      :rules="{
        required: false,
        message: `${$t('commodity.classification')}${$t('form.noEmpty')}`,
        trigger: 'change',
      }"
    >
      <el-select
        v-model="form.classifications"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.classification') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in classifications"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.materials"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.material') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in materials"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.models"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.model') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in models"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.places"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.place') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in places"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.ruiwus"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.ruiwu') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in ruiwus"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.shapes"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.shape') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in shapes"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.specifications"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.specification') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in specifications"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.styles"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.style') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in styles"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.techniques"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.technique') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in techniques"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
          <el-select
            v-model="form.themes"
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('commodity.theme') })
            "
            clearable
          >
            <el-option
              v-for="(item, index) in themes"
              :key="index"
              :label="item['zh-cn']"
              :value="item.id"
            >
              <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
              <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
              <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
              <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
              <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
            </el-option>
          </el-select>
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
      <el-select
        v-model="form.types"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.type') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in types"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
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
      <el-select
        v-model="form.uses"
        :placeholder="
          $t('form.selectPlaceholder', { msg: $t('commodity.use') })
        "
        clearable
      >
        <el-option
          v-for="(item, index) in uses"
          :key="index"
          :label="item['zh-cn']"
          :value="item.id"
        >
          <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
          <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
          <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
          <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select>
    </el-form-item>



    <el-form-item :label="$t('commodity.color.title')">
      <el-row :gutter="10">
        <el-col v-for="(item, index) in form.colors" :key="index" :span="2">
          <el-form-item
            :prop="'colors.' + index + '.name'"
            :rules="{
              required: false,
              message: `${$t('commodity.color.title')}${$t('form.noEmpty')}`,
              trigger: 'blur',
            }"
          >
            <el-color-picker
              v-model="form.colors[index].name"
            ></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-button icon="el-icon-circle-plus-outline" @click="addColors">
          </el-button>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item :label="$t('commodity.photo')">
      <el-upload
        :file-list="form.photos"
        :action="`${$config.origin}/api/upload/images`"
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
      </el-dialog>
    </el-form-item>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item :label="$t('commodity.state.title')" :prop="'state'">
          <el-radio-group v-model="form.state">
            <el-radio :label="0">{{ $t('commodity.state.added') }}</el-radio>
            <el-radio :label="1">{{ $t('commodity.state.onsale') }}</el-radio>
            <el-radio :label="2">{{ $t('commodity.state.sold') }}</el-radio>
            <el-radio :label="3">{{ $t('commodity.state.offline') }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item :label="$t('commodity.seller')">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input v-model="form.sellerId" :placeholder="$t('form.placeholder', { msg: $t('user.seller.id') })" ></el-input>

          <!-- <el-select
            v-model="form.sellerId"
            filterable
            remote
            reserve-keyword
            :placeholder="
              $t('form.placeholder', { msg: $t('commodity.sellerId') })
            "
          > -->
          <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> -->
          <!-- </el-select> -->
        </el-col>
      </el-row>
    </el-form-item>


  </el-form>
</template>
<script>
import Mock from 'mockjs'

export default {
  async fetch() {
    this.isCreate = true
    this.reset()

    // "category": "类别",
    const optionsCategory = await this.$axios.$get(
      `/api/admin/commodity/retrieve/category`
    )
    if (optionsCategory.data && optionsCategory.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'categorys',
        data: optionsCategory.data,
      })
    }
    // "classification": "分类",
    const optionsClassification = await this.$axios.$get(
      `/api/admin/commodity/retrieve/classification`
    )
    if (optionsClassification.data && optionsClassification.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'classifications',
        data: optionsClassification.data,
      })
    }
    // "material": "材质",
    const optionsMaterial = await this.$axios.$get(
      `/api/admin/commodity/retrieve/material`
    )
    if (optionsMaterial.data && optionsMaterial.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'materials',
        data: optionsMaterial.data,
      })
    }
    // "model": "款式",
    const optionsModel = await this.$axios.$get(
      `/api/admin/commodity/retrieve/model`
    )
    if (optionsModel.data && optionsModel.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'models',
        data: optionsModel.data,
      })
    }
    // "place": "摆放",
    const optionsPlace = await this.$axios.$get(
      `/api/admin/commodity/retrieve/place`
    )
    if (optionsPlace.data && optionsPlace.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'places',
        data: optionsPlace.data,
      })
    }
    // "ruiwu": "瑞物",
    const optionsRuiwu = await this.$axios.$get(
      `/api/admin/commodity/retrieve/ruiwu`
    )
    if (optionsRuiwu.data && optionsRuiwu.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'ruiwus',
        data: optionsRuiwu.data,
      })
    }
    // "shape": "形状",
    const optionsShape = await this.$axios.$get(
      `/api/admin/commodity/retrieve/shape`
    )
    if (optionsShape.data && optionsShape.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'shapes',
        data: optionsShape.data,
      })
    }
    // "specification": "规格",
    const optionsSpecification = await this.$axios.$get(
      `/api/admin/commodity/retrieve/specification`
    )
    if (optionsSpecification.data && optionsSpecification.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'specifications',
        data: optionsSpecification.data,
      })
    }
    // "style": "风格",
    const optionsStyle = await this.$axios.$get(
      `/api/admin/commodity/retrieve/style`
    )
    if (optionsStyle.data && optionsStyle.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'styles',
        data: optionsStyle.data,
      })
    }
    // "technique": "手法",
    const optionsTechnique = await this.$axios.$get(
      `/api/admin/commodity/retrieve/technique`
    )
    if (optionsTechnique.data && optionsTechnique.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'techniques',
        data: optionsTechnique.data,
      })
    }
    // "theme": "主题",
    const optionsTheme = await this.$axios.$get(
      `/api/admin/commodity/retrieve/theme`
    )
    if (optionsTheme.data && optionsTheme.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'themes',
        data: optionsTheme.data,
      })
    }
    // "type": "类型",
    const optionsType = await this.$axios.$get(
      `/api/admin/commodity/retrieve/type`
    )
    if (optionsType.data && optionsType.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'types',
        data: optionsType.data,
      })
    }
    // "use": "用途",
    const optionsUse = await this.$axios.$get(
      `/api/admin/commodity/retrieve/use`
    )
    if (optionsUse.data && optionsUse.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'uses',
        data: optionsUse.data,
      })
    }


    // console.log('this.$route.query', this.$route.query)

    if (this.$route.query && this.$route.query.commodityId) {
      this.form.commodityId = this.$route.query.commodityId

      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.form.commodityId,
        },
      })

      if (commodity.success) {
        const commodityForm = Object.assign({}, this.form, commodity.data)
        console.log("commodityForm", commodityForm)
        this.form.state = commodityForm.state
        this.form.width = commodityForm.width
        this.form.height = commodityForm.height
        this.form.colors = commodityForm.colors

        if (commodityForm.name) {
          this.form.name = commodityForm.name
        }
        if (commodityForm.desc) {
          this.form.desc = commodityForm.desc
        }
        if (commodityForm.price) {
          this.form.price = commodityForm.price
        }

        if (commodityForm.photos) {
          const photos = commodityForm.photos.map((item) => {
            item.url = item.src
            return item
          })
          this.form.photos = photos
        }

        // "category": "类别",
        this.form.categorys = commodityForm.categorys && commodityForm.categorys.length ? commodityForm.categorys : [];
        // "classification": "分类",
        this.form.classifications = commodityForm.classifications && commodityForm.classifications.length ? commodityForm.classifications[0].id : '';
        // "material": "材质",
        this.form.materials = commodityForm.materials && commodityForm.materials.length ? commodityForm.materials[0].id : '';
        // "model": "款式",
        this.form.models = commodityForm.models && commodityForm.models.length ? commodityForm.models[0].id : '';
        // "place": "摆放",
        this.form.places = commodityForm.places && commodityForm.places.length ? commodityForm.places[0].id : '';
        // "ruiwu": "瑞物",
        this.form.ruiwus = commodityForm.ruiwus && commodityForm.ruiwus.length ? commodityForm.ruiwus[0].id : '';
        // "shape": "形状",
        this.form.shapes = commodityForm.shapes && commodityForm.shapes.length ? commodityForm.shapes[0].id : '';
        // "specification": "规格",
        this.form.specifications = commodityForm.specifications && commodityForm.specifications.length ? commodityForm.specifications[0].id : '';
        // "style": "风格",
        this.form.styles = commodityForm.styles && commodityForm.styles.length ? commodityForm.styles[0].id : '';
        // "technique": "手法",
        this.form.techniques = commodityForm.techniques && commodityForm.techniques.length ? commodityForm.techniques[0].id : '';
        // "theme": "主题",
        this.form.themes = commodityForm.themes && commodityForm.themes.length ? commodityForm.themes[0].id : '';
        // "type": "类型",
        this.form.types = commodityForm.types && commodityForm.types.length ? commodityForm.types[0].id : '';
        // "use": "用途",
        this.form.uses = commodityForm.uses && commodityForm.uses.length ? commodityForm.uses[0].id : '';




        if (commodityForm.seller) {
          this.form.sellerId = commodityForm.seller.sellerId
        }

        // this.form = commodityForm;
        this.type = 'edit'
        this.typeText = this.$t('content.update')
        this.isCreate = false
      }

    }
    console.log('this.form', this.form)
  },
  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      form: {},

      dialogImageUrl: '',
      dialogVisible: false,
      loading: false,
    }
  },
  computed: {
    // "category": "类别",
    categorys() {
      return this.$store.state.commodity.options.categorys
    },
    // "classification": "分类",
    classifications() {
      return this.$store.state.commodity.options.classifications
    },
    // "material": "材质",
    materials() {
      return this.$store.state.commodity.options.materials
    },
    // "model": "款式",
    models() {
      return this.$store.state.commodity.options.models
    },
    // "place": "摆放",
    places() {
      return this.$store.state.commodity.options.places
    },
    // "ruiwu": "瑞物",
    ruiwus() {
      return this.$store.state.commodity.options.ruiwus
    },
    // "shape": "形状",
    shapes() {
      return this.$store.state.commodity.options.shapes
    },
    // "specification": "规格",
    specifications() {
      return this.$store.state.commodity.options.specifications
    },
    // "style": "风格",
    styles() {
      return this.$store.state.commodity.options.styles
    },
    // "technique": "手法",
    techniques() {
      return this.$store.state.commodity.options.techniques
    },
    // "theme": "主题",
    themes() {
      return this.$store.state.commodity.options.themes
    },
    // "type": "类型",
    types() {
      return this.$store.state.commodity.options.types
    },
    // "use": "用途",
    uses() {
      return this.$store.state.commodity.options.uses
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['commodityId'],
  mounted() {
    // this.list = this.states.map((item) => {
    //   return { value: `value:${item}`, label: `label:${item}` }
    // })
  },
  methods: {
    onSubmit(formName) {
      console.log('submit!', this.form)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          if (this.isCreate) {
            data = await this.$axios
              .$post('/api/admin/commodity/create', this.form)
              .catch((error) => {
                this.$message({
                  showClose: true,
                  message: `${this.typeText}${this.$t('content.fail')}! ${
                    error.response.data.message
                  }`,
                  type: 'error',
                })
              })
          } else {
            data = await this.$axios
              .$post('/api/admin/commodity/update', this.form)
              .catch((error) => {
                this.$message({
                  showClose: true,
                  message: `${this.typeText}${this.$t('content.fail')}! ${
                    error.response.data.message
                  }`,
                  type: 'error',
                })
              })
          }

          // console.log('data', data)
          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success',
            })
            if (this.isCreate) {
              // this.$refs[formName].resetFields()
              this.resetForm('form')
            }
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
        price: {
          'zh-cn': Mock.mock('@integer(60, 100)'),
          'en-us': Mock.mock('@integer(60, 100)'),
          'ja-jp': Mock.mock('@integer(60, 100)'),
          // 'fr-fr': Mock.mock('@integer(60, 100)'),
          'es-es': Mock.mock('@integer(60, 100)'),
        },

        // "category": "类别",
        categorys: [this.categorys[Mock.mock(`@integer(0,${this.categorys.length - 1})`)]],
        // "classification": "分类",
        classifications: this.classifications[Mock.mock(`@integer(0,${this.classifications.length - 1})`)].id,
        // "material": "材质",
        materials: this.materials[Mock.mock(`@integer(0,${this.materials.length - 1})`)].id,
        // "model": "款式",
        models: this.models[Mock.mock(`@integer(0,${this.models.length - 1})`)].id,
        // "place": "摆放",
        places: this.places[Mock.mock(`@integer(0,${this.places.length - 1})`)].id,
        // "ruiwu": "瑞物",
        ruiwus: this.ruiwus[Mock.mock(`@integer(0,${this.ruiwus.length - 1})`)].id,
        // "shape": "形状",
        shapes: this.shapes[Mock.mock(`@integer(0,${this.shapes.length - 1})`)].id,
        // "specification": "规格",
        specifications: this.specifications[Mock.mock(`@integer(0,${this.specifications.length - 1})`)].id,
        // "style": "风格",
        styles: this.styles[Mock.mock(`@integer(0,${this.styles.length - 1})`)].id,
        // "technique": "手法",
        techniques: this.techniques[Mock.mock(`@integer(0,${this.techniques.length - 1})`)].id,
        // "theme": "主题",
        themes: this.themes[Mock.mock(`@integer(0,${this.themes.length - 1})`)].id,
        // "type": "类型",
        types: this.types[Mock.mock(`@integer(0,${this.types.length - 1})`)].id,
        // "use": "用途",
        uses: this.uses[Mock.mock(`@integer(0,${this.uses.length - 1})`)].id,

        photos: [],
        colors: [
          {
            name: Mock.mock('@color'),
          },
        ],
        width: Mock.mock('@natural(100, 300)'),
        height: Mock.mock('@natural(100, 300)'),
        state: Mock.mock('@integer(0, 3)'),
        sellerId: '',
      }
      console.log('createCommodityMock', createCommodityMock)
      this.form = createCommodityMock

      this.type = 'create'
      this.typeText = this.$t('content.create')
      this.isCreate = true
    },
    resetForm(formName) {
      this.reset()
      this.type = 'create'
      this.typeText = this.$t('content.create')
      this.isCreate = true
      this.$refs[formName].clearValidate()
      // console.log(this.form)
    },
    addColors() {
      this.form.colors.push({
        name: '#fff',
      })
    },
    reset() {
      this.form = {
        commodityId: '',
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
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        // "category": "类别",
        // categorys: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        categorys: [],
        // "classification": "分类",
        // classifications: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        classifications: "",
        // "material": "材质",
        // materials: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        materials: "",
        // "model": "款式",
        // models: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        models: "",
        // "place": "摆放",
        // places: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        places: "",
        // "ruiwu": "瑞物",
        // ruiwus: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        ruiwus: "",
        // "shape": "形状",
        // shapes: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        shapes: "",
        // "specification": "规格",
        // specifications: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        specifications: "",
        // "style": "风格",
        // styles: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        styles: "",
        // "technique": "手法",
        // techniques: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        techniques: "",
        // "theme": "主题",
        // themes: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        themes: "",
        // "type": "类型",
        // types: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        types: "",
        // "use": "用途",
        // uses: [
        //   {
        //     id: '',
        //     'zh-cn': '',
        //     'en-us': '',
        //     'ja-jp': '',
        //     // 'fr-fr': '',
        //     'es-es': '',
        //   },
        // ],
        uses: "",

        photos: [],
        colors: [
          {
            name: '#fff',
          },
        ],
        width: '',
        height: '',
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
      })
      // console.log(this.form)
    },
    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.form.photos)) {
        if (item.name === file.name) {
          this.form.photos.splice(index, 1)
        }
      }
    },
    uploadPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },

  },
}
</script>
<style scoped></style>
