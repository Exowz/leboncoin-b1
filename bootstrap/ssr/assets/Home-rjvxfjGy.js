import { ref, toRefs, onMounted, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, isRef, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1, D as DotsHorizontal, a as _sfc_main$2, b as _sfc_main$3 } from "./ShowPostOverlay-BGPHozqa.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: { posts: Object, allUsers: Object },
  setup(__props) {
    let wWidth = ref(window.innerWidth);
    ref(0);
    let currentPost = ref(null);
    let openOverlay = ref(false);
    const props = __props;
    const { posts, allUsers } = toRefs(props);
    onMounted(() => {
      window.addEventListener("resize", () => {
        wWidth.value = window.innerWidth;
      });
    });
    const updateLike = (event) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "LeBonPlan" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto lg:pl-0 md:pl-[80px] pl-0"${_scopeId}><!--[-->`);
            ssrRenderList(unref(posts).data, (post) => {
              _push2(`<div id="Posts" class="px-4 max-w-[600px] mx-auto mt-10"${_scopeId}><div class="flex items-center justify-between py-2"${_scopeId}><div class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("users.show", { id: post.user.id }),
                class: "flex items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", post.user.file)} class="rounded-full w-[30px]"${_scopeId2}><div class="ml-4 font-extrabold text-[15px]"${_scopeId2}>${ssrInterpolate(post.user.name)}</div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: post.user.file,
                        class: "rounded-full w-[30px]"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "ml-4 font-extrabold text-[15px]" }, toDisplayString(post.user.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex items-center text-[15px] text-gray-500"${_scopeId}><span class="mt-5 ml-2 mr-[5px] text-[35px]"${_scopeId}>.</span><div${_scopeId}>${ssrInterpolate(post.created_at)}</div></div></div>`);
              _push2(ssrRenderComponent(DotsHorizontal, {
                class: "cursor-pointer",
                size: 27
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="bg-black rounded-lg w-full min-h-[400px] flex items-center"${_scopeId}><img class="mx-auto w-full"${ssrRenderAttr("src", post.file)}${_scopeId}></div>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                post,
                onLike: updateLike
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-black font-extrabold py-1"${_scopeId}>${ssrInterpolate(post.likes.length)} personnes sont intéressées</div><div${_scopeId}><span class="text-black font-extrabold"${_scopeId}>${ssrInterpolate(post.user.name)}</span> ${ssrInterpolate(post.text)}</div><button class="text-gray-500 font-extrabold py-1"${_scopeId}> Plus d&#39;informations </button></div>`);
            });
            _push2(`<!--]--><div class="pb-20"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto lg:pl-0 md:pl-[80px] pl-0" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(posts).data, (post) => {
                  return openBlock(), createBlock("div", {
                    id: "Posts",
                    class: "px-4 max-w-[600px] mx-auto mt-10",
                    key: post.id
                  }, [
                    createVNode("div", { class: "flex items-center justify-between py-2" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("users.show", { id: post.user.id }),
                          class: "flex items-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: post.user.file,
                              class: "rounded-full w-[30px]"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ml-4 font-extrabold text-[15px]" }, toDisplayString(post.user.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("div", { class: "flex items-center text-[15px] text-gray-500" }, [
                          createVNode("span", { class: "mt-5 ml-2 mr-[5px] text-[35px]" }, "."),
                          createVNode("div", null, toDisplayString(post.created_at), 1)
                        ])
                      ]),
                      createVNode(DotsHorizontal, {
                        class: "cursor-pointer",
                        size: 27
                      })
                    ]),
                    createVNode("div", { class: "bg-black rounded-lg w-full min-h-[400px] flex items-center" }, [
                      createVNode("img", {
                        class: "mx-auto w-full",
                        src: post.file
                      }, null, 8, ["src"])
                    ]),
                    createVNode(_sfc_main$2, {
                      post,
                      onLike: updateLike
                    }, null, 8, ["post"]),
                    createVNode("div", { class: "text-black font-extrabold py-1" }, toDisplayString(post.likes.length) + " personnes sont intéressées", 1),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-black font-extrabold" }, toDisplayString(post.user.name), 1),
                      createTextVNode(" " + toDisplayString(post.text), 1)
                    ]),
                    createVNode("button", {
                      onClick: ($event) => {
                        isRef(currentPost) ? currentPost.value = post : currentPost = post;
                        isRef(openOverlay) ? openOverlay.value = true : openOverlay = true;
                      },
                      class: "text-gray-500 font-extrabold py-1"
                    }, " Plus d'informations ", 8, ["onClick"])
                  ]);
                }), 128)),
                createVNode("div", { class: "pb-20" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` &lt;`);
      if (unref(openOverlay)) {
        _push(ssrRenderComponent(_sfc_main$3, {
          post: unref(currentPost),
          onAddComment: ($event) => _ctx.addComment($event),
          onUpdateLike: ($event) => updateLike(),
          onDeleteSelected: ($event) => {
            _ctx.deleteFunc($event);
          },
          onCloseOverlay: ($event) => isRef(openOverlay) ? openOverlay.value = false : openOverlay = false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
