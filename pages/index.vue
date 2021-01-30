<i18n>
{
  "zh-cn": {
    "chart": {
      "user": "用户",
      "commodity": "艺术品",
      "statistics": "统计",
      "data": "数据",
      "number": "数量",
      "module2": "{msg1}{msg2}",
      "module3": "{msg1}{msg2}{msg3}"
    }
  },
  "en-us": {
    "chart": {
      "user": "User",
      "commodity": "artwork",
      "statistics": "Statistics",
      "data": "Data",
      "number": "Number",
      "module2": "{msg1}{msg2}",
      "module3": "{msg1}{msg2}{msg3}"
    }
  },
  "ja-jp": {
    "chart": {
      "user": "ユーザー",
      "commodity": "アートワーク",
      "statistics": "統計",
      "data": "データ",
      "number": "量",
      "module2": "{msg1}{msg2}",
      "module3": "{msg1}{msg2}{msg3}"
    }
  },
  "es-es": {
    "chart": {
      "user": "usuario",
      "commodity": "obra de arte",
      "statistics": "Estadísticas",
      "data": "datos",
      "number": "Cantidad",
      "module2": "{msg1}{msg2}",
      "module3": "{msg1}{msg2}{msg3}"
    }
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
<script>
// "fr-fr": {
  //   "chart": {
  //     "user": "utilisateur",
  //     "commodity": "ouvrages d'art",
  //     "statistics": "statistiques",
  //     "data": "Les données",
  //     "number": "Quantité",
  //     "module2": "{msg1}{msg2}",
  //     "module3": "{msg1}{msg2}{msg3}"
  //   }
  // }
export default {

}
</script>
<style>
</style>
