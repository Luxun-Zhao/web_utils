<template>
    <div>
        <div>
            随机字段
        </div>
        <v-text-field
            prepend-icon="mdi-key-chain-variant"
            v-model="length"
            type="number"
        >
        </v-text-field>
        <v-text-field
            prepend-icon="mdi-key-chain-variant"
            v-model="charset"
        >
        </v-text-field>
        <v-text-field
            prepend-icon="mdi-key-chain-variant"
            v-model="password"
        >
        </v-text-field>

        <v-btn
            class="ma-1"
            @click="generatePassword"
        >
        随机
        </v-btn>
        <v-btn
            class="ma-1"
            @click="generateQRCode"
        >
        生成二维码
        </v-btn>
        <div>
            <div v-if="password">
                <canvas ref="qrcode"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
import QRCode from "qrcode"

export default {
  name: "Random",    
  data: () => ({
    password: "",
    charset: "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^&*",
    length: 12
  }),
  created(){
  },
  watch: {
  },
  methods:{
    generatePassword() {
            const length = 12;
            const charset = this.charset
            let retVal = "";
            for (let i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            this.password = retVal;
            setTimeout(this.generateQRCode, 1000)
    },
    generateQRCode() {
            const canvas = this.$refs.qrcode;
            QRCode.toCanvas(canvas, this.password, {
                width: 200,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#ffffff'
                }
            }, function (error) {
                if (error) console.error(error);
                console.log('QR code generated!');
            });
    }
  }
}
</script>

<style scoped>

</style>
