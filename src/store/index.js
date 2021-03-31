import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import user from '@/store/modules/user'
import common from '@/store/modules/common'
import getters from '@/store/getters'
import fullScreen from '@/store/modules/fullScreen'
import permission from '@/store/modules/permission'
import tagsView from '@/store/modules/tagsView'
import errorLog from '@/store/modules/errorLog'
import dictionary from "@/store/modules/dictionary"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
//   modules: ['user']
// })

const store = new Vuex.Store({
  modules: {
    app,
    user,
    common,
    fullScreen,
    permission,
    tagsView,
    errorLog,
    dictionary
  },
  getters
  // plugins: [vuexLocal.plugin]
})

export default store
