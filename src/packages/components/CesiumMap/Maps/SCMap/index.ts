import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'

export const SCMapConfig: ConfigType = {
  key: 'SCMap',
  chartKey: 'VSCMap',
  conKey: 'VcSCMap',
  title: 'maplibre底图',
  category: ChatCategoryEnum.Maps,
  categoryName: ChatCategoryEnumName.Maps,
  package: PackagesCategoryEnum.CesiumMap,
  chartFrame: ChartFrameEnum.COMMON,
  image: 'SCMap.jpg'
}
