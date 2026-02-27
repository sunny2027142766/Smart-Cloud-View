<template>
  <div class="go-map-box">
    <div class="content" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { PropType, watch, ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { CreateComponentType } from '@/packages/index.d'
import { option as configOption } from './config'
import { SCMap } from '@xyzh/scmap-maplibregl'
import 'xyzh-maplibre-gl/dist/maplibre-gl.css'

const mapContainer = ref(null)
let map: SCMap | null = null

const props = defineProps({
  chartConfig: {
    type: Object as PropType<CreateComponentType & { option: typeof configOption }>,
    required: true
  }
})

let option = reactive({ ...configOption })

onMounted(() => {
  initMap()
})

onBeforeUnmount(() => {
  map?.remove()
})

const applyProjection = () => {
  map?.setProjection({
    type: option.projection
  })
}

/**
 * 初始化地图
 */
const initMap = () => {
  map = new SCMap({
    container: mapContainer.value as HTMLElement,
    style: `/styles/${option.styleName}.json`,

    center: option.center,
    zoom: option.zoom,
    pitch: option.pitch,
    bearing: option.bearing,

    // 缩放限制
    minZoom: option.minZoom,
    maxZoom: option.maxZoom,
    maxPitch: option.maxPitch,

    // 交互
    scrollZoom: option.scrollZoom,
    dragPan: option.dragPan,
    dragRotate: option.dragRotate,
    doubleClickZoom: option.doubleClickZoom,

    // 性能
    attributionControl: option.attributionControl,
    canvasContextAttributes: option.canvasContextAttributes
  })

  map.on('style.load', () => {
    applyProjection()
  })
}

/**
 * 更新地图参数（不重建地图）
 */
const updateMapSetting = () => {
  if (!map) return

  map.setCenter(option.center)
  map.setZoom(option.zoom)
  map.setPitch(option.pitch)
  map.setBearing(option.bearing)

  map.setMinZoom(option.minZoom)
  map.setMaxPitch(option.maxPitch)

  map.scrollZoom.enable(option.scrollZoom)
  map.dragPan.enable(option.dragPan)
  map.dragRotate.enable(option.dragRotate)

  if (option.doubleClickZoom) {
    map.doubleClickZoom.enable()
  } else {
    map.doubleClickZoom.disable()
  }
}

/**
 * 监听参数变化
 */
watch(
  () => props.chartConfig.option,
  (newData: any) => {
    const oldStyle = option.styleName
    const oldProjection = option.projection

    Object.assign(option, newData)

    if (oldStyle !== option.styleName) {
      map?.setStyle(`/styles/${option.styleName}.json`)
      return
    }

    if (oldProjection !== option.projection) {
      applyProjection()
      return
    }

    updateMapSetting()
  },
  { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped>
@include go('map-box') {
  display: flex;
  align-items: center;
  overflow: hidden;

  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
