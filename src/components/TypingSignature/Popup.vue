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
            <div class="download-popup--signature">
                <div ref="signature" class="download-popup--signature-inner flex justify-center items-center">
                    <span :style="{ color: color, fontFamily: font }">{{ text }}</span>
                </div>
            </div>
            <div v-if="prepareForDownload" class="download-popup--download">
                <download-button @click="download"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import html2canvas from "html2canvas";
import DownloadButton from "@/components/global/DownloadButton";
import downloadMixin from "@/components/downloadMixin";

export default {
    mixins: [ downloadMixin ],
    components: { "download-button": DownloadButton },
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
    methods: { ...mapMutations("typing", { close: "setReady" }) },
    mounted() {
        const ratio = 2000 / this.$refs.signature.offsetWidth;
        html2canvas(this.$refs.signature, {
            backgroundColor: null,
            scale: ratio,
            scrollX: 0,
            scrollY: 0
        }).then((canvas) => {
            this.makeLink(canvas);
            this.prepareForDownload = true
        }).catch(e => console.log(e));
    },
    created() {
        document.body.style.overflow = "hidden";
    },
    beforeDestroy() {
        document.body.style.overflow = "auto";
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

        @include max-w(690px) {
            padding: 65px 20px 55px;
        }

        @include max-w(450px) {
            padding: 65px 10px 55px;
        }
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
        height: 110px;
        border: 1px solid $appColor2;
        border-radius: 12px;
        font-size: 52px;
        margin-bottom: 15px;
        background-color: $mainBgColor;
        overflow: hidden;

        &-inner {
            padding: 10px;
            width: 100%;
            height: 100%;

            @include max-w(450px) {
                padding: 5px;
            }
        }
    }

    &--download {
        text-align: center;
    }
}
</style>