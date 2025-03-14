<script setup>
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'

const items = ref([])
const loading = ref(true)

// Process frontmatter data and paths
const processItems = modules => {
    return Object.entries(modules)
        .map(([path, module]) => {
            const relativePath = path.replace('../../../', '')
            const pagePath = relativePath
                .replace(/\.md$/, '')
                .replace(/index$/, '')

            return {
                title: module.frontmatter?.title || formatTitle(relativePath),
                path: withBase(pagePath),
                date: module.frontmatter?.date || '',
            }
        })
        .filter(item => item.path !== withBase(window.location.pathname)) // Exclude current page
}

// Format title from filename
const formatTitle = path => {
    return path
        .split('/')
        .pop()
        .replace(/\.md$/, '')
        .replace(/-/g, ' ')
        .replace(/^\w/, c => c.toUpperCase())
}

// Get all markdown files
const getItems = async () => {
    const modules = import.meta.glob('../../../**/*.md', { eager: true })
    items.value = processItems(modules).sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    ) // Sort by date descending
    loading.value = false
}

onMounted(() => {
    getItems()
})
</script>

<template>
    <div class="toc-container">
        <div v-if="loading" class="loading">Loading table of contents...</div>
        <ul v-else class="toc-list">
            <li v-for="item in items" :key="item.path" class="toc-item">
                <a class="toc-link" :href="item.path">{{ item.title }}</a>
                <span v-if="item.date" class="toc-date">{{
                    new Date(item.date).toLocaleDateString()
                }}</span>
            </li>
        </ul>
    </div>
</template>

<style>
.toc-container {
    margin: 2rem 0;
}

.loading {
    color: #666;
    font-style: italic;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toc-link {
    color: var(--vp-c-brand);
    text-decoration: none;
    transition: color 0.25s;
}

.toc-link:hover {
    color: var(--vp-c-brand-dark);
}

.toc-date {
    font-size: 0.875rem;
    color: #666;
}
</style>
