<template>
    <div v-click-outside="hide" class="selector">
        <div @click="isOpen = !isOpen" class="selector--select flex justify-between items-center">
            <span class="selector--selected">{{ selectedText }}</span>
            <svg
                :class="classList.arrow"
                class="selector--arrow"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5.60425 9.53674e-07C5.73482 -0.000160694 5.86392 0.0275283 5.98294 0.0812201C6.10195 0.134912 6.20815 0.213371 6.29444 0.311362L10.2108 4.76303C10.3346 4.91055 10.3957 5.10064 10.3812 5.29266C10.3666 5.48468 10.2775 5.66339 10.1329 5.79057C9.98835 5.91775 9.79973 5.98331 9.60742 5.97323C9.41512 5.96315 9.23439 5.87823 9.10388 5.73663L5.6793 1.84382C5.66993 1.83313 5.65839 1.82457 5.64545 1.81871C5.63251 1.81284 5.61846 1.8098 5.60425 1.8098C5.59004 1.8098 5.576 1.81284 5.56306 1.81871C5.55012 1.82457 5.53857 1.83313 5.52921 1.84382L2.10463 5.73663C2.04147 5.81191 1.96389 5.8738 1.87647 5.91866C1.78904 5.96353 1.69353 5.99047 1.59555 5.99789C1.49756 6.00532 1.39908 5.99308 1.30589 5.9619C1.21271 5.93072 1.12669 5.88123 1.05291 5.81633C0.979121 5.75143 0.919053 5.67243 0.876233 5.58399C0.833413 5.49554 0.808706 5.39943 0.803563 5.3013C0.79842 5.20317 0.812945 5.105 0.846285 5.01256C0.879625 4.92013 0.931106 4.83529 0.997704 4.76303L4.91287 0.312959C4.99931 0.214726 5.10567 0.136014 5.22487 0.0820551C5.34408 0.0280962 5.4734 0.000124931 5.60425 9.53674e-07Z" fill="#919FAF"/>
            </svg>
        </div>
        <div
            :class="classList.list"
            class="selector--list">
            <div
               :key="item.value"
               v-for="item in list" class="selector--item">
                <span @click="select(item)">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
    props: {
        placeholder: {
            type: String,
            default: "Select..."
        },
        list: {
            type: Array,
            required: true,
            validator(list) {
                const propCheck = [ "text", "value" ];
                return list.every((item) => {
                    return propCheck.reduce((acc, prop) => acc && Object.prototype.hasOwnProperty.call(item, prop),true);
                });
            }
        },
        value: {
            type: [ String, Number, Boolean, Object ],
            default() {
                return false;
            },
            validator(val) {
                return !(typeof val === "boolean" && val);

            }
        }
    },
    data() {
        return {
            isOpen: false,
            selected: null
        };
    },
    computed: {
        classList() {
            return {
                arrow: { "selector--arrow__open": this.isOpen },
                list: { "selector--list__open": this.isOpen }
            };
        },
        selectedText() {
            if(!this.value) return this.placeholder;
            let searchValue = typeof this.value === "object" ? this.value.value: this.value;
            let item = this.list.find((item) => searchValue === item.value);
            return item ? item.text : this.placeholder;
        }
    },
    methods: {
        hide() {
            this.isOpen = false;
        },
        select(item) {
            if(!this.value) this.$emit("input", item);
            else if(typeof this.value === "object") {
                if(this.value.value !== item.value) this.$emit("input", item);
            } else if(this.value !== item.value) this.$emit("input", item);
            this.hide();
        }
    },
    directives: { ClickOutside }
};
</script>

<style lang="scss" scoped>
.selector {
    position: relative;

    &--select {
        border: 1px solid $appColor5;
        border-radius: 180px;
        padding: 15px 30px;
        cursor: pointer;
        background-color: $mainBgColor;
    }

    &--select, &--item {
        font-size: $appFontSize2;
        color: $appColor6;
    }

    &--arrow {
        transform: rotate(180deg);

        &__open {
            transform: rotate(0deg);
        }
    }

    &--list {
        position: absolute;
        display: none;
        border: 1px solid $appColor4;
        border-radius: 7px;
        box-shadow:  0 6px 10px rgba(27, 57, 85, .06), 0 2px 8px rgba(0, 163, 250, .08);
        left: 0;
        right: 0;
        background-color: $mainBgColor;
        top: calc(100% + 10px);
        padding: 20px;

        &__open {
            display: block;
        }
    }

    &--item {
        &:not(:last-child) {
            margin-bottom: 20px;
        }

        span {
            cursor: pointer;
        }
    }
}
</style>