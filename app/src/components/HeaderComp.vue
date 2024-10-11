<script setup>
import GradientButton from "./Shared/GradientButton.vue";
import IconButton from "./Shared/IconButton.vue";

const props = defineProps({
    title: {
        type: String,
        default: "Default Header Title"
    },
    subtitle: {
        type: String,
        default: ""
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
    titleLogo: {
        type: String,
        default: "logo.png"
    },
    titleSrc: {
        type: String,
        default: "https://downtownstillwater.org"
    },
});

const emit = defineEmits([ "darkModeClick", "settingsBtnClick", "startBtnClick" ]);
</script>

<template>
    <header class="header-bar">
        <div class="header-container">
        <div class="title-group">
            <a :href="props.titleSrc" target="_blank" rel="noopener noreferrer">
                <img :src="props.titleLogo" class="h-8 sm:h-16" alt="Logo" />
            </a>
            <div class="p-2 -space-y-2">
                <div class="text-xl sm:text-4xl">{{ props.title }}</div>
                <div class="text-md sm:text-2xl italic text-green-600">{{ props.subtitle }}</div>
            </div>
        </div>
            <div class="btn-group">
                <IconButton @click="emit('darkModeClick')" aria-label="Dark Mode" class="bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">
                    <i v-if="props.darkMode" class="bi bi-brightness-high text-2xl text-transparent hover:text-yellow-400" />
                    <i v-else class="bi bi-moon-stars text-2xl text-transparent hover:text-blue-800" />
                </IconButton>
                <IconButton @click="emit('settingsBtnClick')" aria-label="Settings" class="bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">
                    <i class="bi bi-gear-fill text-transparent text-2xl hover:text-gray-500"></i>
                </IconButton>
                <GradientButton aria-label="start race" :btnDisable="props.mainBtnDisable" :btnText="props.mainBtnText" @click="emit('startBtnClick')" />
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
