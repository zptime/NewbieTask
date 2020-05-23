const setHeaderConfigAction = (name) => {
  const config = {
    showBack: true,
    title: '机票预订'
  }

  if (name === 'index') {
    config.showBack = false
    config.title = '机票预订'
  }

  if (name === 'trip') {
    config.showBack = false
    config.title = '我的行程'
  }

  if (name === 'mine') {
    config.showBack = false
    config.title = '个人中心'
  }

  if (name === 'login') {
    config.title = '登录'
  }

  return config
}

const setMenuConfigAction = (name) => {
  let config = {}

  if (name === 'index') {
    config = {
      showMenu: true,
      currentIndex: 0
    }
  }

  if (name === 'trip') {
    config = {
      showMenu: true,
      currentIndex: 1
    }
  }

  if (name === 'mine') {
    config = {
      showMenu: true,
      currentIndex: 2
    }
  }

  return config
}

export { setHeaderConfigAction, setMenuConfigAction }
