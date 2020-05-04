<template>
    <div class="download-popup">
        <div class="download-popup--popup">
            <button @click="close(false)"
                    class="download-popup--close">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 21L21 1" stroke="#526172" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 21L1 1" stroke="#526172" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div ref="signature">
                <div class="download-popup--signature">
                    <span>{{ text }}</span>
                </div>
            </div>
            <div v-if="uri">
                <img :src="uri" alt="">
            </div>
            <div v-if="prepareForDownload" class="download-popup--download">
                <button @click="download">Download eSignature</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import html2canvas from "html2canvas";

export default {
    data() {
        return {
            prepareForDownload: false,
            link: null,
            uri: null
        }
    },
    computed: {
        ...mapState("typing", {
            text: "currentText",
            color: "currentColor",
            font: "currentFont"
        })
    },
    methods: {
        ...mapMutations("typing", { close: "setReady" }),
        download() {
            if(this.link) {
                this.link.click();
                document.body.removeChild(this.link);
            } else window.open(this.uri);
        }
    },
    mounted() {
        html2canvas(this.$refs.signature, {
            backgroundColor: null,
            scrollX: 0,
            scrollY: 0
        }).then((canvas) => {
            const uri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            this.link = document.createElement("a");
            if(typeof this.link.download === "string") {
                this.link.href = uri;
                this.link.download = "signature.png";
                document.body.appendChild(this.link);
            } else this.uri = uri;
            this.uri = uri;
            this.prepareForDownload = true
        }).catch(e => console.log(e));
    }
}
</script>

<style lang="scss" scoped>
.download-popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba($appColor7, .9);
    padding: 10px;

    &--popup {
        position: relative;
        margin: 0 auto;
        margin-top: 180px;
        background-color: $mainBgColor;
        width: 100%;
        max-width: 590px;
        padding: 65px 70px 55px;
        border-radius: 30px;
        box-shadow:  0 10px 44px rgba(11, 32, 52, .11), 0 4px 24px rgba(0, 163, 250, .09);
    }

    &--close {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 25px;
        right: 35px;
        cursor: pointer;
    }

    &--signature {
        text-align: center;
        padding: 35px 10px;
        border: 1px solid $appColor2;
        border-radius: 12px;
        font-size: 52px;
        margin-bottom: 15px;
        background-color: $mainBgColor;
    }

    &--download {
        text-align: center;
    }
}
</style>