<i18n>
{
  "zh": {
    "chart": {
      "user": "用户",
      "commodity": "商品",
      "statistics": "统计",
      "data": "数据",
      "number": "数量",
      "module2": "{msg1}{msg2}",
      "module3": "{msg1}{msg2}{msg3}"
    }

  },
  "en": {
    "chart": {
      "user": "User",
      "commodity": "Commodity",
      "statistics": "Statistics",
      "data": "Data",
      "number": "Number",
      "module2": "{msg1}{msg2}",
      "module3": "{msg1}{msg2}{msg3}"
    }
  },
  "ja": {
    "hello": "こんにちは、世界!"
  },
  "fr": {
    "hello": "法语你好世界!"
  }
}
</i18n>
<template>

  <el-main>
    <Chart
      :caption="$t('chart.module2', { msg1: $t('chart.user'), msg2: $t('chart.statistics') })"
      :title="$t('chart.module3', { msg1: $t('chart.user'), msg2: $t('chart.data'), msg3: $t('chart.statistics') })"
      :subtitle="$t('chart.module2', { msg1: $t('chart.user'), msg2: $t('chart.data') })"
      :seriesName="$t('chart.module2', { msg1: $t('chart.user'), msg2: $t('chart.number') })"
      :yAxis="$t('chart.user')"
      :points='[10, 8, 6, 4, 2, 0, 6, 10]'


    />
    <Chart
      :caption="$t('chart.module2', { msg1: $t('chart.commodity'), msg2: $t('chart.statistics') })"
      :title="$t('chart.module3', { msg1: $t('chart.commodity'), msg2: $t('chart.data'), msg3: $t('chart.statistics') })"
      :subtitle="$t('chart.module2', { msg1: $t('chart.commodity'), msg2: $t('chart.data') })"
      :seriesName="$t('chart.module2', { msg1: $t('chart.commodity'), msg2: $t('chart.number') })"
      :yAxis="$t('chart.commodity')"
      :points='[10, 0, 8, 2, 6, 4, 5, 5]'
      />
  </el-main>
</template>

<style>
</style>
