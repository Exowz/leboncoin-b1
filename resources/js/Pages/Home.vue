<script setup>
import { ref, onMounted, toRefs } from 'vue'
import { Head, Link, router } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue'

import LikeSection from '@/Components/LikeSection.vue'
import ShowPostOverlay from '@/Components/ShowPostOverlay.vue'

// Si vous utilisez vraiment le carousel, décommentez la ligne suivante
// import 'vue3-carousel/dist/carousel.css'

import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';

let wWidth = ref(window.innerWidth)
let currentSlide = ref(0)
let currentPost = ref(null)
let openOverlay = ref(false)

const props = defineProps({ posts: Object, allUsers: Object })
const { posts, allUsers } = toRefs(props)

onMounted(() => {
    window.addEventListener('resize', () => {
        wWidth.value = window.innerWidth
    })
})

const updateLike = (event) => {
    // Ajoutez ici le code pour mettre à jour les likes si nécessaire
};
</script>

<template>
    <Head title="LeBonPlan" />

    <MainLayout>
        <div class="mx-auto lg:pl-0 md:pl-[80px] pl-0">
            <div id="Posts" class="px-4 max-w-[600px] mx-auto mt-10" v-for="post in posts.data" :key="post.id">
                <div class="flex items-center justify-between py-2">
                    <div class="flex items-center">
                        <Link :href="route('users.show', { id: post.user.id })" class="flex items-center">
                            <img :src="post.user.file" class="rounded-full w-[30px]">
                            <div class="ml-4 font-extrabold text-[15px]">{{ post.user.name }}</div>
                        </Link>
                        <div class="flex items-center text-[15px] text-gray-500">
                            <span class="mt-5 ml-2 mr-[5px] text-[35px]">.</span>
                            <div>{{ post.created_at }}</div>
                        </div>
                    </div>
                    <DotsHorizontal class="cursor-pointer" :size="27" />
                </div>
                <div class="bg-black rounded-lg w-full min-h-[400px] flex items-center">
                    <img class="mx-auto w-full" :src="post.file" />
                </div>

                <LikeSection 
                    :post="post"
                    @like="updateLike"
                />
                <div class="text-black font-extrabold py-1"> {{ post.likes.length }} personnes sont intéressées</div>
                <div>
                    <span class="text-black font-extrabold">{{ post.user.name }}</span>
                    {{ post.text }}
                </div>
                <button 
                @click="currentPost = post; openOverlay = true"
                class="text-gray-500 font-extrabold py-1">
                    Plus d'informations
                </button>
            </div>
            <div class="pb-20"></div>
        </div>
    </MainLayout>
    <<ShowPostOverlay
        v-if="openOverlay"
        :post="currentPost"
        @addComment="addComment($event)"
        @updateLike="updateLike($event)"
        @deleteSelected="
            deleteFunc($event);
        "
        @closeOverlay="openOverlay = false"
    />
</template>
