<script setup>
import GradientButton from "./Shared/GradientButton.vue";
import IconButton from "./Shared/IconButton.vue";
import Image from "./Shared/Image.vue";

const props = defineProps({
    title: {
        type: String,
        default: "Default Header Title"
    },
    darkMode: {
        type: Boolean,
        default: true
    },
    mainBtnText: {
        type: String,
        default: "Main Button"
    },
    mainBtnDisable: {
        type: Boolean,
        default: false
    },
    titleIcon: {
        type: String,
        default: "downtown_stillwater.png"
    },
    titleIcon2: {
        type: String,
        default: "beardon.png"
    },
    titleSrc: {
        type: String,
        default: "https://downtownstillwater.org"
    },
    titleSrc2: {
        type: String,
        default: "https://beardon.com"
    },
});

const emit = defineEmits(["darkModeClick", "mainBtnClick"]);
</script>

<template>
    <header class="header-bar">
        <div class="header-container">
        <span class="title-group">
            <a
            :href="props.titleSrc"
            target="_blank"
            rel="noopener noreferrer"
            >
                <img
                    :src="props.titleIcon"
                    class="object-fit w-32"
                    alt="site logo"
                />
            </a>
            <span class="text-2xl sm:text-4xl">+</span>
            <a
                :href="props.titleSrc2"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    :src="props.titleIcon2"
                    class="object-fit w-32"
                    alt="site logo"
                />
            </a>
            <span class="text-2xl sm:text-4xl">{{ props.title }}</span>
      </span>
            <div class="btn-group">
                <IconButton
                    @click="emit('darkModeClick')"
                    aria-label="dark mode switch"
                    class="bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400"
                >
                    <i
                        v-if="props.darkMode"
                        class="bi bi-brightness-high text-2xl text-transparent hover:text-gray-300"
                    ></i>
                    <i
                        v-else
                        class="bi bi-moon-stars text-2xl text-transparent hover:text-gray-300"
                    ></i>
                </IconButton>
                <GradientButton
                    aria-label="start race"
                    :btnDisable="props.mainBtnDisable"
                    :btnText="props.mainBtnText"
                    @click="emit('mainBtnClick')"
                ></GradientButton>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header-bar {
    @apply border-b dark:bg-neutral-800 dark:text-white dark:border-neutral-700 shadow dark:shadow-zinc-900;
}

.header-container {
    @apply flex justify-between items-center py-2 px-2 sm:px-4 max-w-7xl mx-auto;
}

.title-group {
    @apply flex items-center gap-1;
}

.btn-group {
    @apply flex gap-2 sm:gap-4 items-center;
}
</style>
