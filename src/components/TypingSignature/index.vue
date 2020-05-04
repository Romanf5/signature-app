<template>
    <div class="typing">
        <signature-title class="typing--title">Type your signature</signature-title>
        <typing-input class="typing--input"/>
        <signature-settings class="typing--settings"/>
    </div>
</template>

<script>
import SignatureTitle from "@/components/global/SignatureTitle";
import TypingInput from "./TypingInput";
import SignatureSettings from "./SignatureSettings";

export default {
    components: {
        "signature-title": SignatureTitle,
        "typing-input": TypingInput,
        "signature-settings": SignatureSettings
    }
};
</script>

<style lang="scss" scoped>
.typing {
    &--title {
        margin-bottom: 30px;
    }

    &--input {
        margin-bottom: 30px;
    }
}
</style>