
import { getCookieCache, setCookieCache, getLocalCache, setLocalCache } from '../assets/js/utils.js'

export default ({ app: { $axios } }, inject) => {
  inject('setCookie', setCookieCache)
  inject('getCookie', getCookieCache)
  inject('setStorage', setLocalCache)
  inject('getStorage', getLocalCache)
}
