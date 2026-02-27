import { PublicConfigClass } from '@/packages/public'
import { CreateComponentType } from '@/packages/index.d'
import { SCMapConfig } from './index'
import cloneDeep from 'lodash/cloneDeep'

export const option = {
  // 内置样式
  styleName: 'dark', // dark | light | blue | satellite

  // 视角
  center: [114.45208328183844, 33.54070881694486],
  zoom: 5.763277834403245,
  pitch: 0,
  bearing: 0,
  projection: 'globe',

  // 缩放
  minZoom: 2,
  maxZoom: 18,

  // 三维
  maxPitch: 60,

  // 交互
  scrollZoom: true,
  dragPan: true,
  dragRotate: true,
  doubleClickZoom: false,

  // 性能
  attributionControl: false,
  canvasContextAttributes: {
    antialias: true
  }
}

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = SCMapConfig.key
  public chartConfig = cloneDeep(SCMapConfig)
  public option = cloneDeep(option)
}
