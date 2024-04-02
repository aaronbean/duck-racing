<script setup xmlns="http://www.w3.org/1999/html">
import { reactive } from "vue";

import laneData from "../../assets/data/lanes.json";

const props = defineProps({
    laneSettings: {
        type: Object,
        default: {}
    },
    laneIndex: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(["settingsChanged"]);
const changedLaneSettings = reactive({
    ...props.laneSettings
});

function laneColorChangeHandler(e) {
    changedLaneSettings.laneColor = e.target.value;
    emit("settingsChanged", changedLaneSettings);
}

function nameChangeHandler(e) {
    changedLaneSettings.racerName = e.target.value;
    emit("settingsChanged", changedLaneSettings);
}

function reset(laneIndex) {
    changedLaneSettings.laneColor = laneData[laneIndex].laneColor;
    changedLaneSettings.racerName = laneData[laneIndex].racerName;
    emit("settingsChanged", changedLaneSettings);
}

function toggleAcceleration(e) {
    changedLaneSettings.stats.accel = e.target.checked ? 1.5 : 1;
    emit("settingsChanged", changedLaneSettings);
}

function toggleDizzy(e) {
    changedLaneSettings.stats.change = e.target.checked ? 500 : 1000;
    emit("settingsChanged", changedLaneSettings);
}

function toggleEnabled(e) {
    changedLaneSettings.enabled = e.target.checked;
    emit("settingsChanged", changedLaneSettings);
}

function toggleEmbiggen(e) {
    changedLaneSettings.stats.size = e.target.checked ? 1.2 : 1;
    emit("settingsChanged", changedLaneSettings);
}

function toggleFast(e) {
    changedLaneSettings.stats.speed = e.target.checked ? 1.5 : 1;
    emit("settingsChanged", changedLaneSettings);
}
</script>

<template>
    <div class="settings-container">
        <label class="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                @change="toggleEnabled"
                class="sr-only peer"
                :checked="props.laneSettings.enabled"
            />
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span class="index-symbol">{{ props.laneIndex + 1 }}</span>
        <input
            type="text"
            :value="props.laneSettings.racerName"
            @change="nameChangeHandler"
            placeholder="Racer Name"
            class="racer-name-input"
        />
        <label class="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                @change="toggleEmbiggen"
                class="sr-only peer"
                :checked="props.laneSettings.stats.size > 1"
            />
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">🍄</span>
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        </label>
        <label class="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                @change="toggleFast"
                class="sr-only peer"
                :checked="props.laneSettings.stats.speed > 1"
            />
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">🐰</span>
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
        </label>
        <label class="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                @change="toggleAcceleration"
                class="sr-only peer"
                :checked="props.laneSettings.stats.accel > 1"
            />
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">⛽</span>
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
        </label>
        <label class="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                @change="toggleDizzy"
                class="sr-only peer"
                :checked="props.laneSettings.stats.change < 1000"
            />
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">🌀</span>
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        </label>
        <span class="lane-color">Lane Color:
        <input
            type="color"
            :value="props.laneSettings.laneColor"
            @change="laneColorChangeHandler"
            class="color-picker"
         /></span>
        <button class="reset-button" @click="reset(props.laneIndex)"><i class="bi bi-arrow-counterclockwise"></i></button>
    </div>
</template>

<style scoped>
.settings-container {
    @apply flex gap-2 dark:text-white border rounded-md p-2 border-neutral-400;
}

.index-symbol {
    @apply flex h-8 w-8 items-center justify-center rounded-full text-white bg-gradient-to-br from-pink-500 to-orange-400 pb-0.5 text-lg;
}

.racer-name-input {
    @apply border rounded px-1 bg-transparent border-neutral-400 dark:border-neutral-700 w-40;
}

.lane-color {
    @apply flex items-center gap-2 text-xs sm:text-base;
}

.color-picker {
    -webkit-appearance: none;
    @apply p-0 border border-neutral-700 rounded-full w-8 h-8;
}

.color-picker::-webkit-color-swatch {
    @apply p-0 border-none rounded-full;
}

.color-picker::-webkit-color-swatch-wrapper {
    @apply p-0 border-none rounded-full;
}

.reset-button {
    @apply bg-gray-500 hover:bg-gray-700 text-white font-bold px-2 rounded-full;
}
</style>
