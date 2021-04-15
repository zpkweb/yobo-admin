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
      <el-col :span="6">
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
      <el-col :span="6">
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
      <el-checkbox name="type" v-for="(item, index) in options.categorys" :key="index" :label="item" >
        {{categorys[index]['zh-cn']}}
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

      <el-checkbox-group v-model="form.classifications">
        <el-checkbox name="type" v-for="(item, index) in options.classifications" :key="index" :label="item">
          {{classifications[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.materials" :key="index" :label="item">
          {{materials[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.models" :key="index" :label="item">
          {{models[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.places" :key="index" :label="item">
          {{places[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.ruiwus" :key="index" :label="item">
          {{ruiwus[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.shapes" :key="index" :label="item">
          {{shapes[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.specifications" :key="index" :label="item">
          {{specifications[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.styles" :key="index" :label="item">
          {{styles[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.techniques" :key="index" :label="item">
          {{techniques[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
            <el-checkbox name="type" v-for="(item, index) in options.themes" :key="index" :label="item">
              {{themes[index]['zh-cn']}}
            </el-checkbox>
          </el-checkbox-group>
          <!-- <el-select
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
              <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
            </el-option>
          </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.types" :key="index" :label="item">
          {{types[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
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
        <el-checkbox name="type" v-for="(item, index) in options.uses" :key="index" :label="item">
          {{uses[index]['zh-cn']}}
        </el-checkbox>
      </el-checkbox-group>
      <!-- <el-select
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
          <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
        </el-option>
      </el-select> -->
    </el-form-item>



    <el-form-item :label="$t('commodity.color.title')">
      <el-row :gutter="10">
        <el-col :span="4">
          <el-form-item
            :prop="'colors[0].startColor'"
            label="开始颜色"
            :rules="{
              required: false,
              message: `${$t('commodity.color.title')}${$t('form.noEmpty')}`,
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
              message: `${$t('commodity.color.title')}${$t('form.noEmpty')}`,
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
        <div slot="tip" class="el-upload__tip">艺术品图片，请上传 768X400 比例的图片</div>
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

  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      form: {
      },

      dialogImageUrl: '',
      dialogVisible: false,
      loading: false,
      options: {
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
        // 0:已添加，1:售卖中，2:已售卖，3:已下架
        state: [
          {
            index: 0,
            name: this.$t('commodity.state.added')
          },
          {
            index: 1,
            name: this.$t('commodity.state.onsale')
          },
          {
            index: 2,
            name: this.$t('commodity.state.sold')
          },
          {
            index: 3,
            name: this.$t('commodity.state.offline')
          },
        ],

      },
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
    }
  },
  async fetch() {
    // this.isCreate = true
    // this.reset()

    // 类别
    // const category = await this.$axios.$get(`/api/admin/commodity/retrieve/category`)
    // if (category.data && category.data.length) {
    //   // this.options.category = category.data
    //   this.categorys = category.data;
    //   this.options.categorys = [];
    //   category.data.forEach((item) => {
    //     this.options.categorys.push(item.id)
    //   })
    // }
    // const classification = await this.$axios.$get(`/api/admin/commodity/retrieve/classification`)
    // if (classification.data && classification.data.length) {
    //   // this.options.classification = classification.data
    //   this.classifications = classification.data;
    //   this.options.classifications = [];
    //   classification.data.forEach((item) => {
    //     this.options.classifications.push(item.id)
    //   })
    // }
    // const material = await this.$axios.$get(`/api/admin/commodity/retrieve/material`)
    // if (material.data && material.data.length) {
    //   this.options.material = material.data
    // }
    // const model = await this.$axios.$get(`/api/admin/commodity/retrieve/model`)
    // if (model.data && model.data.length) {
    //   this.options.model = model.data
    // }
    // const place = await this.$axios.$get(`/api/admin/commodity/retrieve/place`)
    // if (place.data && place.data.length) {
    //   this.options.place = place.data
    // }
    // const ruiwu = await this.$axios.$get(`/api/admin/commodity/retrieve/ruiwu`)
    // if (ruiwu.data && ruiwu.data.length) {
    //   this.options.ruiwu = ruiwu.data
    // }
    // const shape = await this.$axios.$get(`/api/admin/commodity/retrieve/shape`)
    // if (shape.data && shape.data.length) {
    //   this.options.shape = shape.data
    // }
    // const specification = await this.$axios.$get(`/api/admin/commodity/retrieve/specification`)
    // if (specification.data && specification.data.length) {
    //   this.options.specification = specification.data
    // }
    // const style = await this.$axios.$get(`/api/admin/commodity/retrieve/style`)
    // if (style.data && style.data.length) {
    //   this.options.style = style.data
    // }
    // const technique = await this.$axios.$get(`/api/admin/commodity/retrieve/technique`)
    // if (technique.data && technique.data.length) {
    //   this.options.technique = technique.data
    // }
    // const theme = await this.$axios.$get(`/api/admin/commodity/retrieve/theme`)
    // if (theme.data && theme.data.length) {
    //   this.options.theme = theme.data
    // }
    // const type = await this.$axios.$get(`/api/admin/commodity/retrieve/type`)
    // if (type.data && type.data.length) {
    //   this.options.type = type.data
    // }
    // const use = await this.$axios.$get(`/api/admin/commodity/retrieve/use`)
    // if (use.data && use.data.length) {
    //   this.options.use = use.data
    // }

    const categorys = await this.$axios.$get(
      `/api/admin/commodity/retrieve/category`
    )
    if (categorys.data && categorys.data.length) {
      this.categorys = categorys.data;
      this.options.categorys = [];
      categorys.data.forEach((item) => {
        this.options.categorys.push(item.id)
      })
    }
    const classifications = await this.$axios.$get(
      `/api/admin/commodity/retrieve/classification`
    )
    if (classifications.data && classifications.data.length) {
      this.classifications = classifications.data;
      this.options.classifications = [];
      classifications.data.forEach((item) => {
        this.options.classifications.push(item.id)
      })

    }
    const materials = await this.$axios.$get(
      `/api/admin/commodity/retrieve/material`
    )
    if (materials.data && materials.data.length) {
      this.materials = materials.data;
      this.options.materials = [];
      materials.data.forEach((item) => {
        this.options.materials.push(item.id)
      })
    }
    const models = await this.$axios.$get(
      `/api/admin/commodity/retrieve/model`
    )
    if (models.data && models.data.length) {
      this.models = models.data;
      this.options.models = [];
      models.data.forEach((item) => {
        this.options.models.push(item.id)
      })
    }
    const places = await this.$axios.$get(
      `/api/admin/commodity/retrieve/place`
    )
    if (places.data && places.data.length) {
      this.places = places.data;
      this.options.places = [];
      places.data.forEach((item) => {
        this.options.places.push(item.id)
      })
    }
    const ruiwus = await this.$axios.$get(
      `/api/admin/commodity/retrieve/ruiwu`
    )
    if (ruiwus.data && ruiwus.data.length) {
      this.ruiwus = ruiwus.data;
      this.options.ruiwus = [];
      ruiwus.data.forEach((item) => {
        this.options.ruiwus.push(item.id)
      })
    }
    const shapes = await this.$axios.$get(
      `/api/admin/commodity/retrieve/shape`
    )
    if (shapes.data && shapes.data.length) {
      this.shapes = shapes.data;
      this.options.shapes = [];
      shapes.data.forEach((item) => {
        this.options.shapes.push(item.id)
      })
    }
    const specifications = await this.$axios.$get(
      `/api/admin/commodity/retrieve/specification`
    )
    if (specifications.data && specifications.data.length) {
      this.specifications = specifications.data;
      this.options.specifications = [];
      specifications.data.forEach((item) => {
        this.options.specifications.push(item.id)
      })
    }
    const styles = await this.$axios.$get(
      `/api/admin/commodity/retrieve/style`
    )
    if (styles.data && styles.data.length) {
      this.styles = styles.data;
      this.options.styles = [];
      styles.data.forEach((item) => {
        this.options.styles.push(item.id)
      })
    }
    const techniques = await this.$axios.$get(
      `/api/admin/commodity/retrieve/technique`
    )
    if (techniques.data && techniques.data.length) {
      this.techniques = techniques.data;
      this.options.techniques = [];
      techniques.data.forEach((item) => {
        this.options.techniques.push(item.id)
      })
    }
    const themes = await this.$axios.$get(
      `/api/admin/commodity/retrieve/theme`
    )
    if (themes.data && themes.data.length) {
      this.themes = themes.data;
      this.options.themes = [];
      themes.data.forEach((item) => {
        this.options.themes.push(item.id)
      })
    }
    const types = await this.$axios.$get(
      `/api/admin/commodity/retrieve/type`
    )
    if (types.data && types.data.length) {
      this.types = types.data;
      this.options.types = [];
      types.data.forEach((item) => {
        this.options.types.push(item.id)
      })
    }
    const uses = await this.$axios.$get(
      `/api/admin/commodity/retrieve/use`
    )
    if (uses.data && uses.data.length) {
      this.uses = uses.data;
      this.options.uses = [];
      uses.data.forEach((item) => {
        this.options.uses.push(item.id)
      })
    }


    console.log('this.options', this.options)


  },
  computed: {
    // // "category": "类别",
    // categorys() {
    //   return this.$store.state.commodity.options.categorys
    // },
    // // "classification": "分类",
    // classifications() {
    //   return this.$store.state.commodity.options.classifications
    // },
    // // "material": "材质",
    // materials() {
    //   return this.$store.state.commodity.options.materials
    // },
    // // "model": "款式",
    // models() {
    //   return this.$store.state.commodity.options.models
    // },
    // // "place": "摆放",
    // places() {
    //   return this.$store.state.commodity.options.places
    // },
    // // "ruiwu": "瑞物",
    // ruiwus() {
    //   return this.$store.state.commodity.options.ruiwus
    // },
    // // "shape": "形状",
    // shapes() {
    //   return this.$store.state.commodity.options.shapes
    // },
    // // "specification": "规格",
    // specifications() {
    //   return this.$store.state.commodity.options.specifications
    // },
    // // "style": "风格",
    // styles() {
    //   return this.$store.state.commodity.options.styles
    // },
    // // "technique": "手法",
    // techniques() {
    //   return this.$store.state.commodity.options.techniques
    // },
    // // "theme": "主题",
    // themes() {
    //   return this.$store.state.commodity.options.themes
    // },
    // // "type": "类型",
    // types() {
    //   return this.$store.state.commodity.options.types
    // },
    // // "use": "用途",
    // uses() {
    //   return this.$store.state.commodity.options.uses
    // },
  },
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['commodityId'],
  async created() {
    this.isCreate = true
    this.reset()



    if (this.$route.query && this.$route.query.commodityId) {
      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.$route.query.commodityId
        },
      })

      if (commodity.success) {
        const commodityForm = commodity.data
        console.log("commodityForm", commodityForm)
        this.form.commodityId = this.$route.query.commodityId
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
        // this.form.categorys = commodityForm.categorys && commodityForm.categorys.length ? commodityForm.categorys[0].id : '';
        this.form.categorys = []
        if(this.categorys && this.categorys.length){
            if(commodityForm.categorys && commodityForm.categorys.length){
              commodityForm.categorys.forEach((item1) => {
                this.categorys.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  this.form.categorys.push(item1.optionId)
                }
              })
              })
            }

        }
        console.log(this.form.categorys)
        // "classification": "分类",
        // this.form.classifications = commodityForm.classifications && commodityForm.classifications.length ? commodityForm.classifications[0].id : '';
        this.form.classifications = []
        console.log("this.classifications", this.classifications)
        console.log("commodityForm.classifications", commodityForm.classifications)

        if(this.classifications && this.classifications.length){
          if(commodityForm.classifications && commodityForm.classifications.length){
            commodityForm.classifications.forEach((item1) => {
              this.classifications.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  console.log("item1", item1)
                  this.form.classifications.push(item1.optionId)
                }
              })
            })
            // this.form.classifications = commodityForm.classifications
          }
        }
        console.log("this.form.classifications", this.form.classifications)
        // "material": "材质",
        // this.form.materials = commodityForm.materials && commodityForm.materials.length ? commodityForm.materials[0].id : '';
        this.form.materials = []
        if(this.materials && this.materials.length){
          if(commodityForm.materials && commodityForm.materials.length){
            commodityForm.materials.forEach((item1) => {
              this.materials.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.materials.push(item1.optionId)
                }
              })
            })
            // this.form.materials = commodityForm.materials
          }
        }
        // "model": "款式",
        // this.form.models = commodityForm.models && commodityForm.models.length ? commodityForm.models[0].id : '';
        this.form.models = []
        if(this.models && this.models.length){
          if(commodityForm.models && commodityForm.models.length){
            commodityForm.models.forEach((item1) => {
              this.models.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.models.push(item1.optionId)
                }
              })
            })
            // this.form.models = commodityForm.models
          }
        }
        // "place": "摆放",
        // this.form.places = commodityForm.places && commodityForm.places.length ? commodityForm.places[0].id : '';
        this.form.places = []
        if(this.places && this.places.length){
          if(commodityForm.places && commodityForm.places.length){
            commodityForm.places.forEach((item1) => {
              this.places.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.places.push(item1.optionId)
                }
              })
            })
            // this.form.places = commodityForm.places
          }
        }
        // "ruiwu": "瑞物",
        // this.form.ruiwus = commodityForm.ruiwus && commodityForm.ruiwus.length ? commodityForm.ruiwus[0].id : '';
        this.form.ruiwus = []
        if(this.ruiwus && this.ruiwus.length){
          if(commodityForm.ruiwus && commodityForm.ruiwus.length){
            commodityForm.ruiwus.forEach((item1) => {
              this.ruiwus.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.ruiwus.push(item1.optionId)
                }
              })
            })
            // this.form.ruiwus = commodityForm.ruiwus
          }
        }
        // "shape": "形状",
        // this.form.shapes = commodityForm.shapes && commodityForm.shapes.length ? commodityForm.shapes[0].id : '';
        this.form.shapes = []
        if(this.shapes && this.shapes.length){
          if(commodityForm.shapes && commodityForm.shapes.length){
            commodityForm.shapes.forEach((item1) => {
              this.shapes.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.shapes.push(item1.optionId)
                }
              })
            })
            // this.form.shapes = commodityForm.shapes
          }
        }
        // "specification": "规格",
        // this.form.specifications = commodityForm.specifications && commodityForm.specifications.length ? commodityForm.specifications[0].id : '';
        this.form.specifications = []
        if(this.specifications && this.specifications.length){
          if(commodityForm.specifications && commodityForm.specifications.length){
            commodityForm.specifications.forEach((item1) => {
              this.specifications.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.specifications.push(item1.optionId)
                }
              })
            })
            // this.form.specifications = commodityForm.specifications
          }
        }
        // "style": "风格",
        // this.form.styles = commodityForm.styles && commodityForm.styles.length ? commodityForm.styles[0].id : '';
        this.form.styles = []
        if(this.styles && this.styles.length){
          if(commodityForm.styles && commodityForm.styles.length){
            commodityForm.styles.forEach((item1) => {
              this.styles.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.styles.push(item1.optionId)
                }
              })
            })
            // this.form.styles = commodityForm.styles
          }
        }
        // "technique": "手法",
        // this.form.techniques = commodityForm.techniques && commodityForm.techniques.length ? commodityForm.techniques[0].id : '';
        this.form.techniques = []
        if(this.techniques && this.techniques.length){
          if(commodityForm.techniques && commodityForm.techniques.length){
            commodityForm.techniques.forEach((item1) => {
              this.techniques.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.techniques.push(item1.optionId)
                }
              })
            })
            // this.form.techniques = commodityForm.techniques
          }
        }
        // "theme": "主题",
        // this.form.themes = commodityForm.themes && commodityForm.themes.length ? commodityForm.themes[0].id : '';
        this.form.themes = []
        if(this.themes && this.themes.length){
          if(commodityForm.themes && commodityForm.themes.length){
            commodityForm.themes.forEach((item1) => {
              this.themes.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.themes.push(item1.optionId)
                }
              })
            })
            // this.form.themes = commodityForm.themes
          }
        }
        // "type": "类型",
        // this.form.types = commodityForm.types && commodityForm.types.length ? commodityForm.types[0].id : '';
        this.form.types = []
        if(this.types && this.types.length){
          if(commodityForm.types && commodityForm.types.length){
            commodityForm.types.forEach((item1) => {
              this.types.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.types.push(item1.optionId)
                }
              })
            })
            // this.form.types = commodityForm.types
          }
        }
        // "use": "用途",
        // this.form.uses = commodityForm.uses && commodityForm.uses.length ? commodityForm.uses[0].id : '';
        this.form.uses = []
        if(this.uses && this.uses.length){
          if(commodityForm.uses && commodityForm.uses.length){
            commodityForm.uses.forEach((item1) => {
              this.uses.forEach((item2) => {
                if(item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.uses.push(item1.optionId)
                }
              })
            })
            // this.form.uses = commodityForm.uses
          }
        }




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
            console.log("this.form", this.form)
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
        categorys: [this.options.categorys[Mock.mock(`@integer(0,${this.options.categorys.length - 1})`)]],
        // "classification": "分类",
        classifications: [this.options.classifications[Mock.mock(`@integer(0,${this.options.classifications.length - 1})`)]],
        // "material": "材质",
        materials: [this.options.materials[Mock.mock(`@integer(0,${this.options.materials.length - 1})`)]],
        // "model": "款式",
        models: [this.options.models[Mock.mock(`@integer(0,${this.options.models.length - 1})`)]],
        // "place": "摆放",
        places: [this.options.places[Mock.mock(`@integer(0,${this.options.places.length - 1})`)]],
        // "ruiwu": "瑞物",
        ruiwus: [this.options.ruiwus[Mock.mock(`@integer(0,${this.options.ruiwus.length - 1})`)]],
        // "shape": "形状",
        shapes: [this.options.shapes[Mock.mock(`@integer(0,${this.options.shapes.length - 1})`)]],
        // "specification": "规格",
        specifications: [this.options.specifications[Mock.mock(`@integer(0,${this.options.specifications.length - 1})`)]],
        // "style": "风格",
        styles: [this.options.styles[Mock.mock(`@integer(0,${this.options.styles.length - 1})`)]],
        // "technique": "手法",
        techniques: [this.options.techniques[Mock.mock(`@integer(0,${this.options.techniques.length - 1})`)]],
        // "theme": "主题",
        themes: [this.options.themes[Mock.mock(`@integer(0,${this.options.themes.length - 1})`)]],
        // "type": "类型",
        types: [this.options.types[Mock.mock(`@integer(0,${this.options.types.length - 1})`)]],
        // "use": "用途",
        uses: [this.options.uses[Mock.mock(`@integer(0,${this.options.uses.length - 1})`)]],

        photos: [],
        colors: [{
          startColor: "#fff",
          endColor: "#000"
        }],
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
    // addColors() {
    //   this.form.colors.push({
    //     name: '#fff',
    //   })
    // },
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
        photos: [],
        colors: [{
          startColor: "#fff",
          endColor: "#000"
        }],
        width: '',
        height: '',
        state: 0,
        sellerId: '',
      }
    },
    uploadSuccess(res, file) {
      console.log(res, file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.form.photos.push({
        src: res.data.src,
        url: res.data.src,
        name: file.name,
        uid: file.uid
      })
      // console.log(this.form)
    },
    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.form.photos)) {
        if (item.uid === file.uid) {
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
