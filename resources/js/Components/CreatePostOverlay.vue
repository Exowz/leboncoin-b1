<script setup>
import { ref, reactive } from 'vue';
import { router, usePage } from '@inertiajs/vue3';

import Close from 'vue-material-design-icons/Close.vue';
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue';
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';

const user = usePage().props.auth.user;

const emit = defineEmits(['close']);

const form = reactive({
    text: '',
    titre: '',
    categorie: '',
    prix: '',
    etat: '',
    localisation: '',
    file: null,
});

let isValidFile = ref(null);
let fileDisplay = ref('');
let error = reactive({
    text: null,
    file: null,
});

const createPostFunc = () => {
    error.text = null;
    error.file = null;

    router.post('/posts', form, {
        forceFormData: true,
        preserveScroll: true,
        onError: errors => {
            if (errors) {
                if (errors.text) error.text = errors.text;
                if (errors.file) error.file = errors.file;
            }
        },
        onSuccess: () => {
            closeOverlay();
        },
    });
};

const getUploadedImage = (e) => {
    form.file = e.target.files[0];
    const extension = form.file.name.substring(form.file.name.lastIndexOf('.') + 1).toLowerCase();

    if (['png', 'jpg', 'jpeg'].includes(extension)) {
        isValidFile.value = true;
        fileDisplay.value = URL.createObjectURL(e.target.files[0]);
        setTimeout(() => {
            document.getElementById('TextAreaSection').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    } else {
        isValidFile.value = false;
    }
};

const closeOverlay = () => {
    form.text = '';
    form.titre = '';
    form.categorie = '';
    form.prix = '';
    form.etat = '';
    form.localisation = '';
    form.file = null;
    fileDisplay.value = '';
    emit('close');
};
</script>

<template>
    <div id="OverlaySection" class="fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3">
        <button class="absolute right-3 cursor-pointer" @click="closeOverlay">
            <Close :size="27" fillColor="#FFFFFF" />
        </button>
        <div class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl">
            <div class="flex items-center justify-between w-full rounded-t-xl p-3 border-b border-b-gray-300">
                <ArrowLeft :size="30" fillColor="#000000" @click="closeOverlay" />
                <div class="text-lg font-extrabold">Nouvelle annonce</div>
                <button @click="createPostFunc" class="text-lg text-blue-500 hover:text-gray-900 font-extrabold">
                    Publier
                </button>
            </div>
            <div class="w-full md:flex h-[calc(100%-55px)] rounded-xl overflow-auto">
                <div class="flex items-center bg-gray-100 w-full h-full overflow-hidden">
                    <div v-if="!fileDisplay" class="flex flex-col items-center mx-auto">
                        <label
                            for="file"
                            class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold cursor-pointer"
                        >
                            Sélectionner depuis l'ordinateur
                        </label>
                        <input
                            id="file"
                            class="hidden"
                            type="file"
                            @input="getUploadedImage"
                        >
                        <div v-if="error.file" class="text-red-500 text-center p-2 font-extrabold">{{ error.file }}</div>
                        <div v-if="!fileDisplay && isValidFile === false" class="text-red-500 text-center p-2 font-extrabold">
                            Fichier non accepté
                        </div>
                    </div>
                    <img v-if="fileDisplay && isValidFile === true" class="min-w-[400px] p-4 mx-auto" :src="fileDisplay" />
                </div>
                <div id="TextAreaSection" class="max-w-[720px] w-full relative">
                    <div class="flex items-center justify-between p-3">
                        <div class="flex items-center">
                            <img class="rounded-full w-[38px] h-[38px]" :src="user.file || '/default-avatar.png'" alt="User avatar">
                            <div class="ml-4 font-extrabold text-[15px]">{{ user.name }}</div>
                        </div>
                    </div>
                    <div v-if="error.text" class="text-red-500 p-2 font-extrabold">{{ error.text }}</div>
                    <div class="flex w-full max-h-[200px] bg-white border-b">
                        <textarea
                            ref="textarea"
                            v-model="form.text"
                            placeholder="Écrivez une description de votre produit"
                            rows="10"
                            class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-50 focus:ring-0 text-gray-600 text-[18px]"
                        ></textarea>
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <input
                            v-model="form.titre"
                            type="text"
                            placeholder="Ajouter un titre"
                            class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0"
                        />
                        <ChevronDown :size="27" />
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <input
                            v-model="form.categorie"
                            type="text"
                            placeholder="Choisir la catégorie"
                            class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0"
                        />
                        <ChevronDown :size="27" />
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <input
                            v-model="form.etat"
                            type="text"
                            placeholder="État du produit"
                            class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0"
                        />
                        <ChevronDown :size="27" />
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <input
                            v-model="form.prix"
                            type="number"
                            placeholder="Prix"
                            class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0"
                        />
                        <ChevronDown :size="27" />
                    </div>
                    <div class="flex items-center justify-between border-b p-3">
                        <input
                            v-model="form.localisation"
                            type="text"
                            placeholder="Localisation"
                            class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0"
                        />
                        <MapMarkerOutline :size="27" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
