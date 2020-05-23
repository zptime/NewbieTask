export const state = () => {
  return {
    headerConfig: {
      showHeader: true,
      showBack: true,
      showClose: false,
      title: ''
    },
    menuConfig: {
      showMenu: false,
      currentIndex: 0,
      item: [
        {
          name: '机票预订',
          icon: '/images/common/icon_index.png',
          iconCurrent: '/images/common/icon_index_active.png',
          url: '/'
        },
        {
          name: '我的行程',
          icon: '/images/common/icon_trip.png',
          iconCurrent: '/images/common/icon_trip_active.png',
          url: '/trip'
        },
        {
          name: '个人中心',
          icon: '/images/common/icon_mine.png',
          iconCurrent: '/images/common/icon_mine_active.png',
          url: '/mine'
        }
      ]
    },
    dynamicTitle: {
      state: false
    }
  }
}
export const mutations = {
  headerConfig (state, data) {
    Object.assign(state.headerConfig, data)
  },
  menuConfig (state, data) {
    Object.assign(state.menuConfig, data)
  },
  dynamicTitle (state, data) {
    Object.assign(state.dynamicTitle, data)
  }
}
export const actions = {
  start: ({ commit }) => {}
}
