<template>
  <el-main>
    <highchart :options="userChartOptions" />
  </el-main>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  // layout: 'index',
  data() {
    return {
      caption: '统计',
      title: '数据统计',
      subtitle: '用户统计',
      points: [10, 0, 8, 2, 6, 4, 5, 5],
      seriesColor: '',
      animationDuration: 1000,
      chartType: '',
      colorInputIsSupported: null,
      chartTypes: [],
      durations: [0, 500, 1000, 2000],
      seriesName: '用户数量',
      yAxis: '人数',
      watchers: undefined,
      colors: [
        'Red',
        'Green',
        'Blue',
        'Pink',
        'Orange',
        'Brown',
        'Black',
        'Purple',
      ],
      lastPointClicked: {
        timestamp: '',
        x: '',
        y: '',
      },
      sexy: false,
    }
  },
  computed: {
    invertedColor() {
      return (offset = 0) =>
        '#' +
        (
          (parseInt(`0x${this.seriesColor.split('#')[1]}`) ^ 0xffffff) +
          offset
        ).toString(16)
    },
    userChartOptions() {
      const ctx = this
      return {
        caption: {
          text: this.caption,
          style: {
            color: this.sexy ? this.invertedColor(0) : '#black',
          },
        },
        chart: {
          backgroundColor: this.sexy
            ? {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                  [0, this.seriesColor],
                  [0.5, '#ffffff'],
                  [1, this.seriesColor],
                ],
              }
            : '#ffffff',
          className: 'my-chart',
          type: this.chartType.toLowerCase(),
        },
        plotOptions: {
          series: {
            cursor: 'pointer',
            point: {
              events: {
                click() {
                  ctx.$emit('pointClicked', this)
                },
              },
            },
          },
        },
        yAxis: [
          {
            title: {
              text: this.yAxis,
              style: {
                color: '#000000',
              },
            },
          },
        ],
        title: {
          style: {
            color: this.sexy ? this.invertedColor(0) : '#black',
          },
          text:
            `${this.title} ` +
            (this.lastPointClicked.timestamp !== ''
              ? `(Point clicked: ${this.lastPointClicked.timestamp})`
              : ''),
        },
        subtitle: {
          style: {
            color: this.sexy ? this.invertedColor(0) : '#black',
          },
          text: `${this.subtitle}`,
        },
        legend: {
          itemStyle: {
            color: this.sexy ? this.invertedColor(0) : '#black',
          },
        },
        series: [
          {
            name: this.seriesName,
            data: this.points,
            color: this.seriesColor,
          },
        ],
      }
    },
  },
}
</script>

<style>
</style>
