<template>
  <el-main>
    <Chart
      caption='用户统计'
      title='用户数据统计'
      subtitle='用户统计'
      seriesName='用户数量'
      yAxis='用户'
      :points='[10, 8, 6, 4, 2, 0, 6, 10]'


    />
    <Chart
      caption='商品统计'
      title='商品数据统计'
      subtitle='商品统计'
      seriesName='商品数量'
      yAxis='商品'
      :points='[10, 0, 8, 2, 6, 4, 5, 5]'
      />
  </el-main>
</template>

<style>
</style>
