<template>
  <!-- 底图设置 -->
  <collapse-item name="底图设置" :expanded="true">
    <setting-item-box name="底图样式">
      <setting-item>
        <n-select v-model:value="optionData.styleName" size="small" :options="styleOptions" />
      </setting-item>
    </setting-item-box>
    <setting-item-box name="地图投影">
      <setting-item>
        <n-select v-model:value="optionData.projection" size="small" :options="projectionOptions" />
      </setting-item>
    </setting-item-box>
  </collapse-item>

  <!-- 地图视角与交互 -->
  <collapse-item name="视角与交互">
    <setting-item-box name="中心点">
      <setting-item>
        <n-input-number v-model:value="optionData.center[0]" size="small" placeholder="经度" />
        <n-input-number v-model:value="optionData.center[1]" size="small" placeholder="纬度" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="缩放">
      <setting-item>
        <n-input-number v-model:value="optionData.zoom" size="small" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="俯仰角">
      <setting-item>
        <n-input-number v-model:value="optionData.pitch" size="small" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="旋转角">
      <setting-item>
        <n-input-number v-model:value="optionData.bearing" size="small" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="最大俯仰角">
      <setting-item>
        <n-input-number v-model:value="optionData.maxPitch" size="small" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="滚轮缩放">
      <setting-item>
        <n-switch v-model:value="optionData.scrollZoom" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="允许旋转">
      <setting-item>
        <n-switch v-model:value="optionData.dragRotate" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="双击缩放">
      <setting-item>
        <n-switch v-model:value="optionData.doubleClickZoom" />
      </setting-item>
    </setting-item-box>

    <setting-item-box name="拖拽移动">
      <setting-item>
        <n-switch v-model:value="optionData.dragPan" />
      </setting-item>
    </setting-item-box>
  </collapse-item>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { option } from './config'
import { CollapseItem, SettingItemBox, SettingItem } from '@/components/Pages/ChartItemSetting'

const styleOptions = [
  { label: '暗黑主题', value: 'dark' },
  { label: '亮色主题', value: 'light' },
  { label: '蓝色科技', value: 'blue' },
  { label: '卫星影像', value: 'satellite' }
]

const projectionOptions = [
  { label: '二维', value: 'mercator' },
  { label: '三维', value: 'globe' }
]

defineProps({
  optionData: {
    type: Object as PropType<typeof option>,
    required: true
  }
})
</script>
