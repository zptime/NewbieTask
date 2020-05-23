import Cookies from 'js-cookie'

const TokenKey = 'token' // token

// 获取客户端token
export function getToken () {
  return Cookies.get(TokenKey)
}

// 获取服务端token
export function getTokenInServer (req) {
  let serviceCookie = ''
  if (req && req.ctx && req.ctx.cookies) {
    serviceCookie = req.ctx.cookies.get(TokenKey)
  }
  return serviceCookie
}

// 从本地缓存取值，如cookies
export function getCookieCache (name) {
  return Cookies.get(name)
}

// 本地缓存设置值，如cookies
export function setCookieCache (name, value, time) {
  const timer = time || 365
  return Cookies.set(name, value, { expires: timer, path: '/' })
}

// 本地缓存移除值，如cookies
export function removeCookieCache (name) {
  Cookies.remove(name)
}

// 从本地缓存取值，如localStorage
export function getLocalCache (name) {
  return window.localStorage.getItem(name)
}

// 本地缓存设置值，如localStorage
export function setLocalCache (name, value) {
  return window.localStorage.setItem(name, value)
}

// 本地缓存移除值，如localStorage
export function removeLocalCache (name) {
  window.localStorage.removeItem(name)
}
