<template>
    <div class="grid-settings flex justify-end">
        <div @click="$emit('selectGrid', 'grid')"
             :class="classList.grid.root"
             class="grid-settings--item gsi">
            <svg
                :class="classList.grid.icon"
                class="gsi--icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.68036 0H1.40377C0.628218 0 -0.000488281 0.628707 -0.000488281 1.40426V4.68085C-0.000488281 5.4564 0.628218 6.08511 1.40377 6.08511H4.68036C5.45591 6.08511 6.08462 5.4564 6.08462 4.68085V1.40426C6.08462 0.628707 5.45591 0 4.68036 0Z" fill="#1B3955"/>
                <path d="M4.68036 7.9574H1.40377C0.628218 7.9574 -0.000488281 8.5861 -0.000488281 9.36165V12.6382C-0.000488281 13.4138 0.628218 14.0425 1.40377 14.0425H4.68036C5.45591 14.0425 6.08462 13.4138 6.08462 12.6382V9.36165C6.08462 8.5861 5.45591 7.9574 4.68036 7.9574Z" fill="#1B3955"/>
                <path d="M4.68036 15.9149H1.40377C0.628218 15.9149 -0.000488281 16.5436 -0.000488281 17.3192V20.5958C-0.000488281 21.3713 0.628218 22 1.40377 22H4.68036C5.45591 22 6.08462 21.3713 6.08462 20.5958V17.3192C6.08462 16.5436 5.45591 15.9149 4.68036 15.9149Z" fill="#1B3955"/>
                <path d="M12.6379 0H9.36129C8.58574 0 7.95703 0.628707 7.95703 1.40426V4.68085C7.95703 5.4564 8.58574 6.08511 9.36129 6.08511H12.6379C13.4134 6.08511 14.0421 5.4564 14.0421 4.68085V1.40426C14.0421 0.628707 13.4134 0 12.6379 0Z" fill="#1B3955"/>
                <path d="M12.6379 7.9574H9.36129C8.58574 7.9574 7.95703 8.5861 7.95703 9.36165V12.6382C7.95703 13.4138 8.58574 14.0425 9.36129 14.0425H12.6379C13.4134 14.0425 14.0421 13.4138 14.0421 12.6382V9.36165C14.0421 8.5861 13.4134 7.9574 12.6379 7.9574Z" fill="#1B3955"/>
                <path d="M12.6379 15.9149H9.36129C8.58574 15.9149 7.95703 16.5436 7.95703 17.3192V20.5958C7.95703 21.3713 8.58574 22 9.36129 22H12.6379C13.4134 22 14.0421 21.3713 14.0421 20.5958V17.3192C14.0421 16.5436 13.4134 15.9149 12.6379 15.9149Z" fill="#1B3955"/>
                <path d="M20.5952 0H17.3186C16.543 0 15.9143 0.628707 15.9143 1.40426V4.68085C15.9143 5.4564 16.543 6.08511 17.3186 6.08511H20.5952C21.3707 6.08511 21.9994 5.4564 21.9994 4.68085V1.40426C21.9994 0.628707 21.3707 0 20.5952 0Z" fill="#1B3955"/>
                <path d="M20.5952 7.9574H17.3186C16.543 7.9574 15.9143 8.5861 15.9143 9.36165V12.6382C15.9143 13.4138 16.543 14.0425 17.3186 14.0425H20.5952C21.3707 14.0425 21.9994 13.4138 21.9994 12.6382V9.36165C21.9994 8.5861 21.3707 7.9574 20.5952 7.9574Z" fill="#1B3955"/>
                <path d="M20.5952 15.9149H17.3186C16.543 15.9149 15.9143 16.5436 15.9143 17.3192V20.5958C15.9143 21.3713 16.543 22 17.3186 22H20.5952C21.3707 22 21.9994 21.3713 21.9994 20.5958V17.3192C21.9994 16.5436 21.3707 15.9149 20.5952 15.9149Z" fill="#1B3955"/>
            </svg>

            <span class="gsi--name">Grid</span>
        </div>
        <div @click="$emit('selectGrid', 'list')"
             :class="classList.list.root"
             class="grid-settings--item gsi">
            <svg
                :class="classList.list.icon"
                class="gsi--icon" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.49951 5C3.88022 5 4.99951 3.88071 4.99951 2.5C4.99951 1.11929 3.88022 0 2.49951 0C1.1188 0 -0.000488281 1.11929 -0.000488281 2.5C-0.000488281 3.88071 1.1188 5 2.49951 5Z" fill="#919FAF"/>
                <path d="M8.49951 3.50195H22.9995C23.2647 3.50195 23.5191 3.3966 23.7066 3.20906C23.8942 3.02152 23.9995 2.76717 23.9995 2.50195C23.9995 2.23674 23.8942 1.98238 23.7066 1.79485C23.5191 1.60731 23.2647 1.50195 22.9995 1.50195H8.49951C8.2343 1.50195 7.97994 1.60731 7.79241 1.79485C7.60487 1.98238 7.49951 2.23674 7.49951 2.50195C7.49951 2.76717 7.60487 3.02152 7.79241 3.20906C7.97994 3.3966 8.2343 3.50195 8.49951 3.50195Z" fill="#919FAF"/>
                <path d="M2.49951 13C3.88022 13 4.99951 11.8807 4.99951 10.5C4.99951 9.11929 3.88022 8 2.49951 8C1.1188 8 -0.000488281 9.11929 -0.000488281 10.5C-0.000488281 11.8807 1.1188 13 2.49951 13Z" fill="#919FAF"/>
                <path d="M22.9995 9.50195H8.49951C8.2343 9.50195 7.97994 9.60731 7.79241 9.79485C7.60487 9.98238 7.49951 10.2367 7.49951 10.502C7.49951 10.7672 7.60487 11.0215 7.79241 11.2091C7.97994 11.3966 8.2343 11.502 8.49951 11.502H22.9995C23.2647 11.502 23.5191 11.3966 23.7066 11.2091C23.8942 11.0215 23.9995 10.7672 23.9995 10.502C23.9995 10.2367 23.8942 9.98238 23.7066 9.79485C23.5191 9.60731 23.2647 9.50195 22.9995 9.50195Z" fill="#919FAF"/>
                <path d="M2.49951 21C3.88022 21 4.99951 19.8807 4.99951 18.5C4.99951 17.1193 3.88022 16 2.49951 16C1.1188 16 -0.000488281 17.1193 -0.000488281 18.5C-0.000488281 19.8807 1.1188 21 2.49951 21Z" fill="#919FAF"/>
                <path d="M22.9995 17.502H8.49951C8.2343 17.502 7.97994 17.6073 7.79241 17.7948C7.60487 17.9824 7.49951 18.2367 7.49951 18.502C7.49951 18.7672 7.60487 19.0215 7.79241 19.2091C7.97994 19.3966 8.2343 19.502 8.49951 19.502H22.9995C23.2647 19.502 23.5191 19.3966 23.7066 19.2091C23.8942 19.0215 23.9995 18.7672 23.9995 18.502C23.9995 18.2367 23.8942 17.9824 23.7066 17.7948C23.5191 17.6073 23.2647 17.502 22.9995 17.502Z" fill="#919FAF"/>
            </svg>
            <span class="gsi--name">List</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        gridType: {
            required: true,
            type: String,
            validator(type) {
                return [ "grid", "list" ].includes(type);
            }
        }
    },
    computed: {
        classList() {
            return {
                grid: {
                    root: { "gsi__selected": this.gridType === "grid" },
                    icon: { "gsi--icon__selected": this.gridType === "grid" }
                },
                list: {
                    root: { "gsi__selected": this.gridType === "list" },
                    icon: { "gsi--icon__selected": this.gridType === "list" }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.gsi {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: $appColor5;
    transition: color .3s ease-in-out;

    &__selected {
        color: $appColor3;
    }

    &--name {
        margin-left: 13px;
    }

    &--icon {
        path {
            transition: color .3s ease-in-out;
            fill: $appColor5;
        }

        &__selected {
            path {
                fill: $appColor3;
            }
        }
    }

    &:not(:last-child) {
        margin-right: 30px;
    }
}
</style>