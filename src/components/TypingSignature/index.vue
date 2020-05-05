<template>
    <div class="typing">
        <signature-title class="typing--title">Type your signature</signature-title>
        <typing-input class="typing--input"/>
        <signature-settings class="typing--settings"/>
        <typing-grid v-if="readyForSelectFont" class="typing--grid"/>
        <download-popup v-if="readyForDownload"/>
    </div>
</template>

<script>
import SignatureTitle from "@/components/global/SignatureTitle";
import TypingInput from "./TypingInput";
import SignatureSettings from "./SignatureSettings";
import TypingGrid from "./Grid";
import DownloadPopup from "./Popup";
import { mapState } from "vuex";

export default {
    components: {
        "signature-title": SignatureTitle,
        "typing-input": TypingInput,
        "signature-settings": SignatureSettings,
        "typing-grid": TypingGrid,
        "download-popup": DownloadPopup
    },
    computed: {
        ...mapState("typing", {
            ready: "readyForDownload",
            type: "fontType",
            text: "currentText"
        }),
        readyForDownload() {
            return this.ready && this.text && this.type;
        },
        readyForSelectFont() {
            return this.type && this.text;
        }
    }
};
</script>

<style lang="scss" scoped>
.typing {
    margin-bottom: 30px;

    &--title {
        margin-bottom: 30px;
    }

    &--input {
        margin-bottom: 30px;
    }

    &--grid {
        margin-top: 30px;
    }
}
</style>