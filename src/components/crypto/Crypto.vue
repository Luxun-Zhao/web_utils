<template>
  <div>
    <password :passwordData="raw" v-if="showPassword"></password>
    <v-textarea
        v-model="raw"
        color="teal"
    >
      <template v-slot:label>
        <div>原始数据</div>
      </template>
    </v-textarea>

    <v-radio-group
        v-model="selectedCryptoType"
        row
        mandatory
    >
      <v-radio
          v-for="item in cryptoType"
          :label="item"
          :value="item"
          :key="item"
      ></v-radio>
    </v-radio-group>

    <v-text-field
        prepend-icon="mdi-key-chain-variant"
        v-model="key"
        type="password"
        v-if="selectedCryptoType && cryptoObj[selectedCryptoType].key"
    >
    </v-text-field>

    <v-btn
        class="ma-1"
        @click="encode"
    >
      加密
    </v-btn>
    <v-btn
        class="ma-1"
        @click="decode"
    >
      解密
    </v-btn>

    <v-textarea
        v-model="decodeStr"
        color="teal"
    >
      <template v-slot:label>
        <div>加密数据</div>
      </template>
    </v-textarea>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import cryptoObj from './methods'
import Password from "@/components/Password";

export default {
  name: "Crypto",
  components: {Password},
  data: () => ({
    raw: "",
    decodeStr: "",
    selectedCryptoType: null,
    key: "",
    cryptoType: [
        "AES",
    ],
    showPassword: false,
    count: 0,
    cryptoObj
  }),
  created(){
    window.c = CryptoJS
  },
  watch: {
    count(){
      if (this.count > 10){
        this.showPassword = true
        this.decodeStr = localStorage.getItem('decodeStr')
      }
    }
  },
  methods:{
    showPasswordAction(){
      if (this.count === 0)
        setTimeout(() => {this.count = 0}, 5000)
      this.count = this.count + 1
    },
    decode(){
      this.showPasswordAction()
      this.raw = cryptoObj[this.selectedCryptoType].decode(this.decodeStr, this.key)
    },
    encode(){
      this.decodeStr = cryptoObj[this.selectedCryptoType].encode(this.raw, this.key)
      localStorage.setItem('decodeStr', this.decodeStr)
    }
  }
}
</script>

<style scoped>

</style>
