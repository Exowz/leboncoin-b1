<script setup>
import { ref, toRefs } from 'vue';
import { usePage } from '@inertiajs/vue3';

import ShowPostOptionOverlay from '@/Components/ShowPostOptionOverlay.vue';
import LikeSection from '@/Components/LikeSection.vue';

import Close from 'vue-material-design-icons/Close.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import EmoticonHappyOutline from 'vue-material-design-icons/EmoticonHappyOutline.vue';

let comment = ref('');
let deleteType = ref(null);
let id = ref(null);

const user = usePage().props.auth.user;

const props = defineProps(['post']);
const { post } = toRefs(props);

defineEmits(['closeOverlay', 'addComment', 'updateLike', 'deleteSelected']);

const textareaInput = (e) => {
    textarea.value.style.height = "auto";
    textarea.value.style.height = `${e.target.scrollHeight}px`;
};
</script>

<template>
    <div id="OverlaySection" class="fixed top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3">
        <button class="absolute right-3" @click="$emit('closeOverlay')">
            <Close :size="27" fillColor="#FFFFFF"/>
        </button>

        <div class="max-w-6xl b-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl">
            <div class="w-full md:flex h-full overflow-auto rounded-xl">
                <div class="flex items-center bg-black w-full">
                    <img class="rounded-xl min-w-[400px] p-4 mx-auto" :src="post.file">  
                </div>
                <div class="md:max-w-[500px] w-full relative">
                    <div class="flex items-center justify-between p-3 border-b">
                        <div class="flex items-center">
                            <img :src="post.user.file" class="rounded-full w-[38px] h-[38px]">
                            <div class="ml-4 font-extrabold text-[15px]">{{ post.user.pseudo }}</div>
                            <div class="flex items-center text-[15px] text-gray-500">
                                <span class="-mt-5 ml-2 mr-[5px] text-[35px]">.</span>
                                <div>{{ post.created_at }}</div>
                            </div>
                        </div>
                        <button>
                            <DotsHorizontal :size="27" class="cursor-pointer"/>
                        </button>
                    </div>

                    <div class="overflow-y-auto h-[calc(100%-170px)]">
                        <div class="p-3">
                            <div class="text-[15px] text-gray-900">
                                <div class="font-extrabold">Titre:</div>
                                <div>{{ post.titre }}</div>
                            </div>
                            <div class="text-[15px] text-gray-900">
                                <div class="font-extrabold">Catégorie:</div>
                                <div>{{ post.categorie }}</div>
                            </div>
                            <div class="text-[15px] text-gray-900">
                                <div class="font-extrabold">Prix:</div>
                                <div>{{ post.prix }} €</div>
                            </div>
                            <div class="text-[15px] text-gray-900">
                                <div class="font-extrabold">État:</div>
                                <div>{{ post.etat }}</div>
                            </div>
                            <div class="text-[15px] text-gray-900">
                                <div class="font-extrabold">Localisation:</div>
                                <div>{{ post.localisation }}</div>
                            </div>
                            <div class="text-[15px] text-gray-900">
                                <div class="font-extrabold">Description:</div>
                                <div>{{ post.text }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-0 left-0 w-full flex justify-center p-3 bg-blue-100">
                        <button class="bg-blue-600 text-white font-extrabold py-2 px-4 rounded-lg">
                            Contacter le vendeur
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ShowPostOptionOverlay v-if="deleteType"/>
</template>
