<template>
  <v-list>
    <v-list-group
        v-for="type in passwordObj"
        :key="type.name"
        v-model="type.open"
        :prepend-icon="type.icon"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="type.name"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-group
          v-for="app in type.apps"
          :key="app.name"
          v-model="app.open"
          :prepend-icon="app.icon"
          no-action
          sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item>
              <div>{{app.name}}</div>
              <v-spacer></v-spacer>
              <v-btn
                  style="width: 100px"
                  @click="open(app.name)"
              >
                open
              </v-btn>
            </v-list-item>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="child in app.items"
            :key="child.name"
            link
        >
          <v-list-item-content>
            <v-list-item>
              <div>{{child.name}}</div>
              <v-spacer></v-spacer>
              <v-btn
                  class="ma-1"
                  @click="copyStringToClipboard(child.name)"
              >
                账号
              </v-btn>
              <v-btn
                  class="ma-1"
                  @click="copyStringToClipboard(child.password)"
              >
                密码
              </v-btn>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>

    </v-list-group>
  </v-list>
</template>

<script>
import _ from 'lodash'
export default {
  name: "Password",
  props: [
      'passwordData'
  ],
  data: () => ({
    key: '',
    hover: null,
  }),
  computed:{
    passwordObj(){
      window.passwordObj = this.passwordData
      let typeList = []
      let type = {apps:[]}
      let app = {items:[]}
      let item = {}
      this.passwordData.split('\n').forEach(s=>{
        let info = s.split(' ')
        if (info.length !== 2)
          return
        if (info[0].length === 1){
          if (app.items.length)
            type.apps.push(_.cloneDeep(app))
          if (type.apps.length)
            typeList.push(_.cloneDeep(type))
          type.name = info[1]
          type.apps = []
          app = {items:[]}
        }
        if (info[0].length === 2){
          if (app.items.length)
            type.apps.push(_.cloneDeep(app))
          app.name = info[1]
          app.items = []
          item = {}
        }
        if (info[0].length === 3){
          item.name = info[1]
        }
        if (info[0].length === 4){
          item.password = info[1]
          app.items.push(_.cloneDeep(item))
        }
      })
      if (app.items.length)
        type.apps.push(_.cloneDeep(app))
      if (type.apps.length)
        typeList.push(_.cloneDeep(type))
      return typeList
    }
  },
  methods:{
    open(url){
      window.open(url)
    },
    copyStringToClipboard(string) {
      const el = document.createElement('textarea')
      el.value = string
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      // 跳複製成功通知
      this.$toast.success("复制成功")
    },
  }
}
</script>

<style scoped>

</style>
