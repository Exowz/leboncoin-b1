<script setup>
import { ref } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

import Magnify from 'vue-material-design-icons/Magnify.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import Compass from 'vue-material-design-icons/Compass.vue';
import SendOutline from 'vue-material-design-icons/SendOutline.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import AccountOutline from 'vue-material-design-icons/AccountOutline.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import AccountPlusOutline from 'vue-material-design-icons/AccountPlusOutline.vue';

import MenuItem from '@/Components/MenuItem.vue';
import CreatePostOverlay from '@/Components/CreatePostOverlay.vue';

const showCreatePost = ref(false);
const page = usePage();
const user = page.props.auth.user;
</script>

<template>
    <div id="Main Layout" class="w-full h-screen flex">
        <!-- Side Navigation -->
        <div id="SideNav" class="fixed h-full bg-white xl:w-[280px] w-[80px] border-r border-r-gray-300">
            <Link href="/">
                <img class="xl:hidden block w-[25px] mt-10 ml-[25px] mb-10 cursor-pointer" src="/logo.png">
                <img class="xl:block hidden w-[120px] mt-10 ml-6 mb-10 cursor-pointer" src="/logo.png">
            </Link>

            <div class="px-3">
                <Link href="/">
                    <MenuItem iconString="Accueil" class="mb-4"/>
                </Link>
                <Link href="/search">
                    <MenuItem iconString="Recherche" class="mb-4"/>
                </Link>
                <MenuItem @click="showCreatePost = true" iconString="Publier" class="mb-4"/>
                <Link href="/notifications">
                    <MenuItem iconString="Notifications" class="mb-4"/>
                </Link>
                <Link href="/messages">
                    <MenuItem iconString="Messages" class="mb-4"/>
                </Link>
                <Link :href="route('users.show', { id: user.id })">
                    <MenuItem iconString="Profil" class="mb-4"/>
                </Link>
            </div>
            <Link href="/logout" class="absolute bottom-0 px-3 w-full">
                <MenuItem iconString="Déconnexion" class="mb-4"/>
            </Link>
        </div>

        <!-- Main Content Area -->
        <div class="flex-grow bg-white h-full overflow-auto">
            <div class="mx-auto md:pt-6 pt-20" :class="$page.url === '/' ? 'lg:w-8/12 w-full' : 'max-w-[1200px]'">
                <main>
                    <slot />
                </main>
            </div>
        </div>

        <!-- User Profile Section -->
        <div id="UserProfileSection" class="fixed right-0 h-full bg-white xl:w-[280px] w-[80px] border-l border-l-gray-300">
            <div class="mt-10 px-3">
                <Link :href="route('users.show', { id: user.id })" class="flex items-center justify-between max-w-[300px]">
                    <div class="flex items-center">
                        <img class="rounded-full z-10 w-[58px] h-[58px]" :src="user.file">
                        <div class="pl-4">
                            <div class="text-black font-extrabold">{{ user.pseudo }}</div>
                            <div class="text-gray-500 text-extrabold text-sm">{{ user.name }} {{ user.surname }}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        
        <!-- Top Navigation for Home Page -->
        <div v-if="$page.url === '/'" id="TopNavHome" class="fixed z-30 md:hidden block w-full bg-white h-[61px] border-b border-b-gray-300">
            <div class="flex items-center justify-between h-full">
                <Link href="/">
                    <img class="w-[105px] ml-6 cursor-pointer" src="/logo.png">
                </Link>
                <div class="flex items-center w-[50%]">
                    <div class="flex items-center w-full bg-gray-100 rounded-lg">
                        <Magnify class="pl-4" fillColor="#8E8E8E" :size="27" />
                        <input
                            type="text"
                            placeholder="Recherche"
                            class="bg-transparent w-full placeholder-[#8E8E8E] border-0 ring-0 focus:ring-0"
                        >
                    </div>
                    <HeartOutline class="pl-4 pr-3" fillColor="#000000" :size="27" />
                </div>
            </div>
        </div>

        <!-- Top Navigation for User Page -->
        <div v-if="$page.url !== '/'" id="TopNavUser" class="md:hidden fixed flex items-center justify-between z-30 w-full bg-white h-[61px] border-b border-b-gray-300">
            <Link href="/" class="px-4">
                <ChevronLeft :size="30" class="cursor-pointer"/>
            </Link>
            <div class="font-extrabold text-lg">{{ user.name }}</div>
            <AccountPlusOutline :size="30" class="cursor-pointer px-4"/>
        </div>

        <!-- Bottom Navigation -->
        <div id="BottomNav" class="fixed z-30 bottom-0 w-full md:hidden flex items-center justify-around bg-white border-t py-2 border-t-gray-300">
            <Link href="/">
                <HomeOutline fillColor="#000000" :size="33" class="cursor-pointer" />
            </Link>
            <Link href="/explore">
                <Compass fillColor="#000000" :size="33" class="cursor-pointer" />
            </Link>
            <Link href="/messages">
                <SendOutline fillColor="#000000" :size="33" class="cursor-pointer" />
            </Link>
            <Plus @click="showCreatePost = true" fillColor="#000000" :size="33" class="cursor-pointer" />
            <Link :href="route('users.show', { id: user.id })">
                <AccountOutline fillColor="#000000" :size="33" class="cursor-pointer" />
            </Link>
            <Link :href="route('users.show', { id: user.id })">
                <img
                    class="rounded-full w-[30px] cursor-pointer"
                    :src="user.file"
                >
            </Link>
        </div>
    </div>

    <CreatePostOverlay v-if="showCreatePost" @close="showCreatePost = false" />
</template>
