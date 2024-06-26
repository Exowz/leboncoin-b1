import { useSSRContext, toRefs, ref, mergeProps, unref, reactive, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Head, router } from "@inertiajs/vue3";
import { H as Heart, _ as _sfc_main$7, B as BookmarkOutline, b as _sfc_main$8 } from "./ShowPostOverlay-BGPHozqa.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$6 = {
  name: "CommentIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Comment.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "ContentOverlay",
  __ssrInlineRender: true,
  props: ["postByUser"],
  emits: ["selectedPost"],
  setup(__props) {
    const props = __props;
    toRefs(props);
    let isHover = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center cursor-pointer relative" }, _attrs))}>`);
      if (unref(isHover)) {
        _push(`<div class="${ssrRenderClass([unref(isHover) ? "bg-black bg-opacity-40" : "", "absolute w-full h-full z-50 flex items-center justify-around text-lg font-extrabold text-white"])}"><div class="flex items-center justify-around"><div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(Heart, {
          fillColor: "#FFFFFF",
          size: 30
        }, null, _parent));
        _push(`<div class="pl-1">3</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img class="aspect-square mx-auto z-0 object-cover cursor-pointer" src="/logo.png"></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ContentOverlay.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  name: "CogIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon cog-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Cog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Cog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  name: "GridIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon grid-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Grid.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Grid = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "PlayBoxOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon play-box-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/PlayBoxOutline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PlayBoxOutline = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "AccountBoxOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon account-box-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountBoxOutline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AccountBoxOutline = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "User",
  __ssrInlineRender: true,
  props: { postsByUser: Object, user: Object },
  setup(__props) {
    let data = reactive({ post: null });
    const form = reactive({ file: null });
    const props = __props;
    const { postsByUser, user } = toRefs(props);
    const addComment = (object) => {
      router.post(
        "/comments",
        {
          post_id: object.post.id,
          user_id: object.user.id,
          comment: object.comment
        },
        {
          onFinish: () => updatedPost(object)
        }
      );
    };
    const deleteFunc = (object) => {
      let url = "";
      if (object.deleteType === "Post") {
        url = "/posts/" + object.id;
        setTimeout(() => data.post = null, 100);
      } else {
        url = "/comments/" + object.id;
      }
      router.delete(url, {
        onFinish: () => updatedPost(object)
      });
    };
    const updateLike = (object) => {
      let deleteLike = false;
      let id = null;
      for (let i = 0; i < object.post.likes.length; i++) {
        const like = object.post.likes[i];
        if (like.user_id === object.user.id && like.post_id === object.post.id) {
          deleteLike = true;
          id = like.id;
        }
      }
      if (deleteLike) {
        router.delete("/likes/" + id, {
          onFinish: () => updatedPost(object)
        });
      } else {
        router.post("/likes", {
          post_id: object.post.id
        }, {
          onFinish: () => updatedPost(object)
        });
      }
    };
    const updatedPost = (object) => {
      for (let i = 0; i < postsByUser.value.data.length; i++) {
        const post = postsByUser.value.data[i];
        if (post.id === object.post.id) {
          data.post = post;
        }
      }
    };
    const getUploadedImage = (e) => {
      form.file = e.target.files[0];
      router.post(`/users`, form, {
        preserveState: false
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Instagram" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-2 md:pt-6"${_scopeId}></div><div class="max-w-[880px] lg:ml-0 md:ml-[80px] md:pl-20 px-4 w-[100vw]"${_scopeId}><div class="flex items-center md:justify-between"${_scopeId}><label for="fileUser"${_scopeId}><img class="rounded-full object-fit md:w-[200px] w-[100px] cursor-pointer"${ssrRenderAttr("src", unref(user).file)}${_scopeId}></label>`);
            if (unref(user).id === _ctx.$page.props.auth.user.id) {
              _push2(`<input id="fileUser" class="hidden" type="file"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="ml-6 w-full"${_scopeId}><div class="flex items-center md:mb-8 mb-5"${_scopeId}><div class="md:mr-6 mr-3 rounded-lg text-[22px]"${_scopeId}>${ssrInterpolate(unref(user).name)}</div><button class="md:block hidden md:mr-6 p-1 px-4 rounded-lg text-[16px] font-extrabold bg-gray-100 hover:bg-gray-200"${_scopeId}> Edit Profile </button>`);
            _push2(ssrRenderComponent(Cog, {
              size: 28,
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`</div><button class="md:hidden mr-6 p-1 px-4 max-w-[260px] w-full rounded-lg text-[17px] font-extrabold bg-gray-100 hover:bg-gray-200"${_scopeId}> Edit Profile </button><div class="md:block hidden"${_scopeId}><div class="flex items-center text-[18px]"${_scopeId}><div class="mr-6"${_scopeId}><span class="font-extrabold"${_scopeId}>${ssrInterpolate(unref(postsByUser).data.length)}</span> annonces </div><div class="mr-6"${_scopeId}><span class="font-extrabold"${_scopeId}>123</span> ventes </div></div></div></div></div></div><div class="md:hidden"${_scopeId}><div class="w-full flex items-center justify-around border-t border-t-gray-300 mt-8"${_scopeId}><div class="text-center p-3"${_scopeId}><div class="font-extrabold"${_scopeId}>${ssrInterpolate(unref(postsByUser).data.length)}</div><div class="text-gray-400 font-semibold -mt-1.5"${_scopeId}>posts</div></div><div class="text-center p-3"${_scopeId}><div class="font-extrabold"${_scopeId}>43</div><div class="text-gray-400 font-semibold -mt-1.5"${_scopeId}>followers</div></div><div class="text-center p-3"${_scopeId}><div class="font-extrabold"${_scopeId}>55</div><div class="text-gray-400 font-semibold -mt-1.5"${_scopeId}>following</div></div></div><div class="w-full flex items-center justify-between border-t border-t-gray-300"${_scopeId}><div class="p-3 w-1/4 flex justify-center border-t border-t-gray-900"${_scopeId}>`);
            _push2(ssrRenderComponent(Grid, {
              size: 28,
              fillColor: "#0095F6",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-3 w-1/4 flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PlayBoxOutline, {
              size: 28,
              fillColor: "#8E8E8E",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-3 w-1/4 flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(BookmarkOutline, {
              size: 28,
              fillColor: "#8E8E8E",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-3 w-1/4 flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AccountBoxOutline, {
              size: 28,
              fillColor: "#8E8E8E",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div id="ContentSection" class="md:pr-1.5 lg:pl-0 md:pl-[90px]"${_scopeId}><div class="md:block mt-10 hidden border-t border-t-gray-300"${_scopeId}><div class="flex items-center justify-between max-w-[600px] mx-auto font-extrabold text-gray-400 text-[15px]"${_scopeId}><div class="p-[17px] w-1/4 flex justify-center items-center border-t border-t-gray-900"${_scopeId}>`);
            _push2(ssrRenderComponent(Grid, {
              size: 15,
              fillColor: "#000000",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-2 -mb-[1px] text-gray-900"${_scopeId}>POSTS</div></div><div class="p-[17px] w-1/4 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(PlayBoxOutline, {
              size: 15,
              fillColor: "#8E8E8E",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-2 -mb-[1px] text-gray-900"${_scopeId}>REELS</div></div><div class="p-[17px] w-1/4 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(BookmarkOutline, {
              size: 15,
              fillColor: "#8E8E8E",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 -mb-[1px]"${_scopeId}>SAVED</span></div><div class="p-[17px] w-1/4 flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(AccountBoxOutline, {
              size: 15,
              fillColor: "#8E8E8E",
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 -mb-[1px]"${_scopeId}>TAGGED</span></div></div></div><div class="grid md:gap-4 gap-1 grid-cols-3 relative"${_scopeId}><!--[-->`);
            ssrRenderList(unref(postsByUser).data, (postByUser) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                postByUser,
                onSelectedPost: ($event) => unref(data).post = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="pb-20"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-2 md:pt-6" }),
              createVNode("div", { class: "max-w-[880px] lg:ml-0 md:ml-[80px] md:pl-20 px-4 w-[100vw]" }, [
                createVNode("div", { class: "flex items-center md:justify-between" }, [
                  createVNode("label", { for: "fileUser" }, [
                    createVNode("img", {
                      class: "rounded-full object-fit md:w-[200px] w-[100px] cursor-pointer",
                      src: unref(user).file
                    }, null, 8, ["src"])
                  ]),
                  unref(user).id === _ctx.$page.props.auth.user.id ? (openBlock(), createBlock("input", {
                    key: 0,
                    id: "fileUser",
                    class: "hidden",
                    type: "file",
                    onInput: ($event) => getUploadedImage($event)
                  }, null, 40, ["onInput"])) : createCommentVNode("", true),
                  createVNode("div", { class: "ml-6 w-full" }, [
                    createVNode("div", { class: "flex items-center md:mb-8 mb-5" }, [
                      createVNode("div", { class: "md:mr-6 mr-3 rounded-lg text-[22px]" }, toDisplayString(unref(user).name), 1),
                      createVNode("button", { class: "md:block hidden md:mr-6 p-1 px-4 rounded-lg text-[16px] font-extrabold bg-gray-100 hover:bg-gray-200" }, " Edit Profile "),
                      createVNode(Cog, {
                        size: 28,
                        class: "cursor-pointer"
                      })
                    ]),
                    createVNode("button", { class: "md:hidden mr-6 p-1 px-4 max-w-[260px] w-full rounded-lg text-[17px] font-extrabold bg-gray-100 hover:bg-gray-200" }, " Edit Profile "),
                    createVNode("div", { class: "md:block hidden" }, [
                      createVNode("div", { class: "flex items-center text-[18px]" }, [
                        createVNode("div", { class: "mr-6" }, [
                          createVNode("span", { class: "font-extrabold" }, toDisplayString(unref(postsByUser).data.length), 1),
                          createTextVNode(" annonces ")
                        ]),
                        createVNode("div", { class: "mr-6" }, [
                          createVNode("span", { class: "font-extrabold" }, "123"),
                          createTextVNode(" ventes ")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "md:hidden" }, [
                createVNode("div", { class: "w-full flex items-center justify-around border-t border-t-gray-300 mt-8" }, [
                  createVNode("div", { class: "text-center p-3" }, [
                    createVNode("div", { class: "font-extrabold" }, toDisplayString(unref(postsByUser).data.length), 1),
                    createVNode("div", { class: "text-gray-400 font-semibold -mt-1.5" }, "posts")
                  ]),
                  createVNode("div", { class: "text-center p-3" }, [
                    createVNode("div", { class: "font-extrabold" }, "43"),
                    createVNode("div", { class: "text-gray-400 font-semibold -mt-1.5" }, "followers")
                  ]),
                  createVNode("div", { class: "text-center p-3" }, [
                    createVNode("div", { class: "font-extrabold" }, "55"),
                    createVNode("div", { class: "text-gray-400 font-semibold -mt-1.5" }, "following")
                  ])
                ]),
                createVNode("div", { class: "w-full flex items-center justify-between border-t border-t-gray-300" }, [
                  createVNode("div", { class: "p-3 w-1/4 flex justify-center border-t border-t-gray-900" }, [
                    createVNode(Grid, {
                      size: 28,
                      fillColor: "#0095F6",
                      class: "cursor-pointer"
                    })
                  ]),
                  createVNode("div", { class: "p-3 w-1/4 flex justify-center" }, [
                    createVNode(PlayBoxOutline, {
                      size: 28,
                      fillColor: "#8E8E8E",
                      class: "cursor-pointer"
                    })
                  ]),
                  createVNode("div", { class: "p-3 w-1/4 flex justify-center" }, [
                    createVNode(BookmarkOutline, {
                      size: 28,
                      fillColor: "#8E8E8E",
                      class: "cursor-pointer"
                    })
                  ]),
                  createVNode("div", { class: "p-3 w-1/4 flex justify-center" }, [
                    createVNode(AccountBoxOutline, {
                      size: 28,
                      fillColor: "#8E8E8E",
                      class: "cursor-pointer"
                    })
                  ])
                ])
              ]),
              createVNode("div", {
                id: "ContentSection",
                class: "md:pr-1.5 lg:pl-0 md:pl-[90px]"
              }, [
                createVNode("div", { class: "md:block mt-10 hidden border-t border-t-gray-300" }, [
                  createVNode("div", { class: "flex items-center justify-between max-w-[600px] mx-auto font-extrabold text-gray-400 text-[15px]" }, [
                    createVNode("div", { class: "p-[17px] w-1/4 flex justify-center items-center border-t border-t-gray-900" }, [
                      createVNode(Grid, {
                        size: 15,
                        fillColor: "#000000",
                        class: "cursor-pointer"
                      }),
                      createVNode("div", { class: "ml-2 -mb-[1px] text-gray-900" }, "POSTS")
                    ]),
                    createVNode("div", { class: "p-[17px] w-1/4 flex justify-center items-center" }, [
                      createVNode(PlayBoxOutline, {
                        size: 15,
                        fillColor: "#8E8E8E",
                        class: "cursor-pointer"
                      }),
                      createVNode("div", { class: "ml-2 -mb-[1px] text-gray-900" }, "REELS")
                    ]),
                    createVNode("div", { class: "p-[17px] w-1/4 flex justify-center items-center" }, [
                      createVNode(BookmarkOutline, {
                        size: 15,
                        fillColor: "#8E8E8E",
                        class: "cursor-pointer"
                      }),
                      createVNode("span", { class: "ml-2 -mb-[1px]" }, "SAVED")
                    ]),
                    createVNode("div", { class: "p-[17px] w-1/4 flex justify-center items-center" }, [
                      createVNode(AccountBoxOutline, {
                        size: 15,
                        fillColor: "#8E8E8E",
                        class: "cursor-pointer"
                      }),
                      createVNode("span", { class: "ml-2 -mb-[1px]" }, "TAGGED")
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid md:gap-4 gap-1 grid-cols-3 relative" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(postsByUser).data, (postByUser) => {
                    return openBlock(), createBlock("div", { key: postByUser }, [
                      createVNode(_sfc_main$5, {
                        postByUser,
                        onSelectedPost: ($event) => unref(data).post = $event
                      }, null, 8, ["postByUser", "onSelectedPost"])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "pb-20" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(data).post) {
        _push(ssrRenderComponent(_sfc_main$8, {
          post: unref(data).post,
          onAddComment: ($event) => addComment($event),
          onUpdateLike: ($event) => updateLike($event),
          onDeleteSelected: ($event) => {
            deleteFunc($event);
          },
          onCloseOverlay: ($event) => unref(data).post = null
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
