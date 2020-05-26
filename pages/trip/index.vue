<template>
  <div class="section-wrap mescroll">
    <div class="top-list">
      <div class="top-list-left">
        <div class="item">
          <input v-model="city" class="item-input" placeholder="请输入城市名，防抖模糊查询">
          <img class="item-search" src="/images/icon_search.png">
        </div>
        <div class="list">
          <div v-for="item in cityList" :key="item.id" class="list-item">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="top-list-right">
        <el-button type="primary" class="item-button" @click="searchCity">
          我的接口查询
        </el-button>
        <div class="list">
          <div v-for="item in citiesData.datas" :key="item.id" class="list-item">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="log-list">
      "/api/logs/analysis"接口的日志统计：{{ logData }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: '',
      cityList: [],
      citiesData: [],
      logData: '',
      debouncedCity: null
    }
  },
  watch: {
    city (val) {
      if (val && val.trim().length > 0) {
        this.debouncedCity()
      }
    }
  },
  created () {
    this.debouncedCity = this.debounce(this.initData, 2000)
  },
  mounted () {
    // this.cityList = [
    //   { name: '北京南苑', pinying: 'BEIJING', initial: 'BJ', code: 'NAY', fullname: '北京南苑', tag: '', order: 999, meta: '', country: '', english: '' },
    //   { name: '北京首都', pinying: 'BEIJING', initial: 'BJ', code: 'PEK', fullname: '北京首都', tag: '热门', order: '1', meta: '', country: '', english: '' },
    //   { name: '北京大兴', pinying: 'BEIJING', initial: 'BJ', code: 'PKI', fullname: '北京大兴', tag: '', order: 999, meta: '', country: '', english: '' },
    //   { name: '北京大兴', pinying: 'BEIJING', initial: 'BJ', code: 'PKX', fullname: '北京大兴', tag: '热门', order: '28', meta: '', country: '', english: '' },
    //   { name: '北京', pinying: 'BEIJING', initial: 'BJ', code: 'BJS_C', fullname: '北京', tag: '热门', order: '1', meta: '北京南苑|北京首都|北京大兴|北京大兴', country: '', english: '' }
    // ]
  },
  methods: {
    initData () {
      if (this.city && this.city.length > 0) {
        this.$axios.get('/basic/search_airport', {
          params: { q: this.city }
        }).then((res) => {
          this.cityList = res
        })
      }
    },
    searchCity () {
      if (this.city && this.city.length > 0) {
        this.$axios.get('/api/cities', {
          params: { keyword: this.city }
        }).then((res) => {
          this.citiesData = res
          console.log(this.citiesData)
        })
      }
      // 日志查询
      this.$axios.post('/api/logs/analysis', {
        keyword: '/basic/search_airport'
      }).then((res) => {
        this.logData = JSON.stringify(res)
      })
    },
    debounce (fn, wait) {
      // 防抖函数：重复点击，只执行最后一次
      const delay = wait || 500
      let timer
      return function () {
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, delay)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-list {
  display: flex;
  flex-direction: row;

  .top-list-left {
    flex: 2;
  }
  .top-list-right {
    flex: 1;

    .item-button{
      margin: 0.38rem 0.1rem;
    }
  }
}

.item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 0.12rem;
  height: 0.96rem;
  font-size: 0.3rem;
  background-color: #fff;
  margin: 0.3rem;
  padding: 0 0.2rem;

  .item-search {
    width: 0.4rem;
    height: 0.4rem;
  }
  .item-input {
    flex: 1;
    height: inherit;
    color: #00001B;
    font-weight: bold;
    width: 100%;

    &::placeholder {
      color: #C0C6CC;
      font-size: 0.24rem;
      font-weight: normal;
    }
  }
}

.list {
  margin: 0 0.3rem 0.2rem;
  background-color: #fff;

  .list-item {
    height: 0.8rem;
    line-height: 0.8rem;
    color: #000;
    padding: 0 0.2rem;
  }
}

.log-list{
  margin: 0.1rem 0.3rem;
  padding: 0.1rem;
  word-break: break-all;
  background-color: #fff;
}
</style>
