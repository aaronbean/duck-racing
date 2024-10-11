<template>
    <footer class="footer-bar">
        <div class="footer-container">
            <div class="footer-text">
                <div>Built By <a href="https://beardon.com" target="_blank" class="hover:text-red-900">Beardon</a>.</div>
                <div>Hosted by <a href="https://juvoweb.com" target="_blank" class="hover:text-blue-600">Juvo Web</a>.</div>
            </div>
            <nav>
                <ul class="footer-navlist">
                    <li>
                        <a href="https://www.facebook.com/BeardonServices" target="_blank">
                            <i class="bi bi-facebook hover:text-blue-600 p-2"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aaron-bean-b9834820" target="_blank">
                            <i class="bi bi-linkedin hover:text-blue-600 p-2"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/aaronbean/duck-racing" target="_blank">
                            <i class="bi bi-github hover:text-black dark:hover:text-white p-2"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<style scoped>
.footer-bar {
    @apply sticky top-[100vh] max-w-7xl mx-auto py-2 px-1 sm:px-4;
}

.footer-container {
    @apply p-2 flex justify-between items-center rounded-lg shadow border dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:shadow-zinc-900;
}

.footer-text {
    @apply text-sm text-gray-500 sm:text-left dark:text-gray-400;
}

.footer-navlist {
    @apply flex flex-wrap gap-2 items-center text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400 text-2xl sm:text-3xl;
}
</style>
