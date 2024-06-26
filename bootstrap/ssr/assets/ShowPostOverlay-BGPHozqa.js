import { useSSRContext, mergeProps, toRefs, unref, createVNode, resolveDynamicComponent, reactive, ref, withCtx, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$o = {
  name: "MagnifyIcon",
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
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon magnify-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Magnify.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Magnify = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$n = {
  name: "HeartOutlineIcon",
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
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon heart-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/HeartOutline.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const HeartOutline = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$m = {
  name: "HomeOutlineIcon",
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
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon home-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/HomeOutline.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const HomeOutline = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$l = {
  name: "CompassIcon",
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
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon compass-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M14.19,14.19L6,18L9.81,9.81L18,6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.9A1.1,1.1 0 0,0 10.9,12A1.1,1.1 0 0,0 12,13.1A1.1,1.1 0 0,0 13.1,12A1.1,1.1 0 0,0 12,10.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Compass.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Compass = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$k = {
  name: "SendOutlineIcon",
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
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon send-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/SendOutline.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const SendOutline = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$j = {
  name: "PlusIcon",
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
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon plus-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Plus.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Plus = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$i = {
  name: "AccountOutlineIcon",
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
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon account-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountOutline.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AccountOutline = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$h = {
  name: "ChevronLeftIcon",
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
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon chevron-left-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChevronLeft.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$g = {
  name: "AccountPlusOutlineIcon",
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
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon account-plus-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountPlusOutline.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const AccountPlusOutline = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$f = {
  name: "MenuIcon",
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
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon menu-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Menu.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$e = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: { iconString: String },
  setup(__props) {
    const props = __props;
    const { iconString } = toRefs(props);
    let icon = null;
    if (iconString.value === "Accueil") icon = HomeOutline;
    if (iconString.value === "Recherche") icon = Magnify;
    if (iconString.value === "Messages") icon = SendOutline;
    if (iconString.value === "Notifications") icon = HeartOutline;
    if (iconString.value === "Publier") icon = Plus;
    if (iconString.value === "Profil") icon = AccountOutline;
    if (iconString.value === "Déconnexion") icon = Menu;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full xl:inline-block xl:hover:bg-gray-100 p-2 rounded-full transition duration-300 ease-in-out cursor-pointer" }, _attrs))}><div class="flex items-center">`);
      if (unref(iconString) === "Profil") {
        _push(`<img class="${ssrRenderClass([{ "mr-1": unref(iconString) === "Profil" }, "rounded-full ml-[2px] w-[30px] cursor-pointer"])}"${ssrRenderAttr("src", _ctx.user.file)}>`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icon)), {
          fillColor: "#000000",
          size: 36
        }, null), _parent);
      }
      _push(`<span class="xl:block hidden text-black font-extrabold text-[18px] pl-2 mt-0.5">${ssrInterpolate(unref(iconString))}</span></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MenuItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  name: "CloseIcon",
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
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon close-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Close.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Close = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$c = {
  name: "ArrowLeftIcon",
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon arrow-left-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ArrowLeft.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = {
  name: "MapMarkerOutlineIcon",
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon map-marker-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/MapMarkerOutline.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const MapMarkerOutline = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = {
  name: "ChevronDownIcon",
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : true,
    "aria-label": $props.title,
    class: "material-design-icon chevron-down-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChevronDown.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {
  __name: "CreatePostOverlay",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const user = usePage().props.auth.user;
    const emit = __emit;
    const form = reactive({
      text: "",
      titre: "",
      categorie: "",
      prix: "",
      etat: "",
      localisation: "",
      file: null
    });
    let isValidFile = ref(null);
    let fileDisplay = ref("");
    let error = reactive({
      text: null,
      file: null
    });
    const closeOverlay = () => {
      form.text = "";
      form.titre = "";
      form.categorie = "";
      form.prix = "";
      form.etat = "";
      form.localisation = "";
      form.file = null;
      fileDisplay.value = "";
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "OverlaySection",
        class: "fixed z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"
      }, _attrs))}><button class="absolute right-3 cursor-pointer">`);
      _push(ssrRenderComponent(Close, {
        size: 27,
        fillColor: "#FFFFFF"
      }, null, _parent));
      _push(`</button><div class="max-w-6xl h-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"><div class="flex items-center justify-between w-full rounded-t-xl p-3 border-b border-b-gray-300">`);
      _push(ssrRenderComponent(ArrowLeft, {
        size: 30,
        fillColor: "#000000",
        onClick: closeOverlay
      }, null, _parent));
      _push(`<div class="text-lg font-extrabold">Nouvelle annonce</div><button class="text-lg text-blue-500 hover:text-gray-900 font-extrabold"> Publier </button></div><div class="w-full md:flex h-[calc(100%-55px)] rounded-xl overflow-auto"><div class="flex items-center bg-gray-100 w-full h-full overflow-hidden">`);
      if (!unref(fileDisplay)) {
        _push(`<div class="flex flex-col items-center mx-auto"><label for="file" class="hover:bg-blue-700 bg-blue-500 rounded-lg p-2.5 text-white font-extrabold cursor-pointer"> Sélectionner depuis l&#39;ordinateur </label><input id="file" class="hidden" type="file">`);
        if (unref(error).file) {
          _push(`<div class="text-red-500 text-center p-2 font-extrabold">${ssrInterpolate(unref(error).file)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(fileDisplay) && unref(isValidFile) === false) {
          _push(`<div class="text-red-500 text-center p-2 font-extrabold"> Fichier non accepté </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(fileDisplay) && unref(isValidFile) === true) {
        _push(`<img class="min-w-[400px] p-4 mx-auto"${ssrRenderAttr("src", unref(fileDisplay))}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div id="TextAreaSection" class="max-w-[720px] w-full relative"><div class="flex items-center justify-between p-3"><div class="flex items-center"><img class="rounded-full w-[38px] h-[38px]"${ssrRenderAttr("src", unref(user).file || "/default-avatar.png")} alt="User avatar"><div class="ml-4 font-extrabold text-[15px]">${ssrInterpolate(unref(user).name)}</div></div></div>`);
      if (unref(error).text) {
        _push(`<div class="text-red-500 p-2 font-extrabold">${ssrInterpolate(unref(error).text)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-full max-h-[200px] bg-white border-b"><textarea placeholder="Écrivez une description de votre produit" rows="10" class="placeholder-gray-500 w-full border-0 mt-2 mb-2 z-50 focus:ring-0 text-gray-600 text-[18px]">${ssrInterpolate(form.text)}</textarea></div><div class="flex items-center justify-between border-b p-3"><input${ssrRenderAttr("value", form.titre)} type="text" placeholder="Ajouter un titre" class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0">`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><input${ssrRenderAttr("value", form.categorie)} type="text" placeholder="Choisir la catégorie" class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0">`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><input${ssrRenderAttr("value", form.etat)} type="text" placeholder="État du produit" class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0">`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><input${ssrRenderAttr("value", form.prix)} type="number" placeholder="Prix" class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0">`);
      _push(ssrRenderComponent(ChevronDown, { size: 27 }, null, _parent));
      _push(`</div><div class="flex items-center justify-between border-b p-3"><input${ssrRenderAttr("value", form.localisation)} type="text" placeholder="Localisation" class="text-lg font-extrabold text-gray-500 flex-grow bg-transparent border-0 focus:ring-0">`);
      _push(ssrRenderComponent(MapMarkerOutline, { size: 27 }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CreatePostOverlay.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showCreatePost = ref(false);
    const page = usePage();
    const user = page.props.auth.user;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="Main Layout" class="w-full h-screen flex"><div id="SideNav" class="fixed h-full bg-white xl:w-[280px] w-[80px] border-r border-r-gray-300">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="xl:hidden block w-[25px] mt-10 ml-[25px] mb-10 cursor-pointer" src="/logo.png"${_scopeId}><img class="xl:block hidden w-[120px] mt-10 ml-6 mb-10 cursor-pointer" src="/logo.png"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "xl:hidden block w-[25px] mt-10 ml-[25px] mb-10 cursor-pointer",
                src: "/logo.png"
              }),
              createVNode("img", {
                class: "xl:block hidden w-[120px] mt-10 ml-6 mb-10 cursor-pointer",
                src: "/logo.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="px-3">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, {
              iconString: "Accueil",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, {
                iconString: "Accueil",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/search" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, {
              iconString: "Recherche",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, {
                iconString: "Recherche",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$e, {
        onClick: ($event) => showCreatePost.value = true,
        iconString: "Publier",
        class: "mb-4"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/notifications" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, {
              iconString: "Notifications",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, {
                iconString: "Notifications",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/messages" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, {
              iconString: "Messages",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, {
                iconString: "Messages",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("users.show", { id: unref(user).id })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, {
              iconString: "Profil",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, {
                iconString: "Profil",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/logout",
        class: "absolute bottom-0 px-3 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$e, {
              iconString: "Déconnexion",
              class: "mb-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$e, {
                iconString: "Déconnexion",
                class: "mb-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-grow bg-white h-full overflow-auto"><div class="${ssrRenderClass([_ctx.$page.url === "/" ? "lg:w-8/12 w-full" : "max-w-[1200px]", "mx-auto md:pt-6 pt-20"])}"><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div><div id="UserProfileSection" class="fixed right-0 h-full bg-white xl:w-[280px] w-[80px] border-l border-l-gray-300"><div class="mt-10 px-3">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("users.show", { id: unref(user).id }),
        class: "flex items-center justify-between max-w-[300px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><img class="rounded-full z-10 w-[58px] h-[58px]"${ssrRenderAttr("src", unref(user).file)}${_scopeId}><div class="pl-4"${_scopeId}><div class="text-black font-extrabold"${_scopeId}>${ssrInterpolate(unref(user).pseudo)}</div><div class="text-gray-500 text-extrabold text-sm"${_scopeId}>${ssrInterpolate(unref(user).name)} ${ssrInterpolate(unref(user).surname)}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("img", {
                  class: "rounded-full z-10 w-[58px] h-[58px]",
                  src: unref(user).file
                }, null, 8, ["src"]),
                createVNode("div", { class: "pl-4" }, [
                  createVNode("div", { class: "text-black font-extrabold" }, toDisplayString(unref(user).pseudo), 1),
                  createVNode("div", { class: "text-gray-500 text-extrabold text-sm" }, toDisplayString(unref(user).name) + " " + toDisplayString(unref(user).surname), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.$page.url === "/") {
        _push(`<div id="TopNavHome" class="fixed z-30 md:hidden block w-full bg-white h-[61px] border-b border-b-gray-300"><div class="flex items-center justify-between h-full">`);
        _push(ssrRenderComponent(unref(Link), { href: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-[105px] ml-6 cursor-pointer" src="/logo.png"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-[105px] ml-6 cursor-pointer",
                  src: "/logo.png"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex items-center w-[50%]"><div class="flex items-center w-full bg-gray-100 rounded-lg">`);
        _push(ssrRenderComponent(Magnify, {
          class: "pl-4",
          fillColor: "#8E8E8E",
          size: 27
        }, null, _parent));
        _push(`<input type="text" placeholder="Recherche" class="bg-transparent w-full placeholder-[#8E8E8E] border-0 ring-0 focus:ring-0"></div>`);
        _push(ssrRenderComponent(HeartOutline, {
          class: "pl-4 pr-3",
          fillColor: "#000000",
          size: 27
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.url !== "/") {
        _push(`<div id="TopNavUser" class="md:hidden fixed flex items-center justify-between z-30 w-full bg-white h-[61px] border-b border-b-gray-300">`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/",
          class: "px-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ChevronLeft, {
                size: 30,
                class: "cursor-pointer"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(ChevronLeft, {
                  size: 30,
                  class: "cursor-pointer"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="font-extrabold text-lg">${ssrInterpolate(unref(user).name)}</div>`);
        _push(ssrRenderComponent(AccountPlusOutline, {
          size: 30,
          class: "cursor-pointer px-4"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="BottomNav" class="fixed z-30 bottom-0 w-full md:hidden flex items-center justify-around bg-white border-t py-2 border-t-gray-300">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomeOutline, {
              fillColor: "#000000",
              size: 33,
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomeOutline, {
                fillColor: "#000000",
                size: 33,
                class: "cursor-pointer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/explore" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Compass, {
              fillColor: "#000000",
              size: 33,
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Compass, {
                fillColor: "#000000",
                size: 33,
                class: "cursor-pointer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/messages" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SendOutline, {
              fillColor: "#000000",
              size: 33,
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SendOutline, {
                fillColor: "#000000",
                size: 33,
                class: "cursor-pointer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Plus, {
        onClick: ($event) => showCreatePost.value = true,
        fillColor: "#000000",
        size: 33,
        class: "cursor-pointer"
      }, null, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("users.show", { id: unref(user).id })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AccountOutline, {
              fillColor: "#000000",
              size: 33,
              class: "cursor-pointer"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(AccountOutline, {
                fillColor: "#000000",
                size: 33,
                class: "cursor-pointer"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("users.show", { id: unref(user).id })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="rounded-full w-[30px] cursor-pointer"${ssrRenderAttr("src", unref(user).file)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "rounded-full w-[30px] cursor-pointer",
                src: unref(user).file
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (showCreatePost.value) {
        _push(ssrRenderComponent(_sfc_main$9, {
          onClose: ($event) => showCreatePost.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  name: "HeartIcon",
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
    class: "material-design-icon heart-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Heart.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Heart = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  name: "CommentOutlineIcon",
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
    class: "material-design-icon comment-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/CommentOutline.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CommentOutline = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {
  name: "BookmarkOutlineIcon",
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
    class: "material-design-icon bookmark-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/BookmarkOutline.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BookmarkOutline = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {
  __name: "LikeSection",
  __ssrInlineRender: true,
  props: ["post"],
  emits: ["like"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex z-20 items-center justify-between" }, _attrs))}><div class="flex items-center"><button class="-mt-[14px]">`);
      _push(ssrRenderComponent(HeartOutline, {
        class: "pl-3 cursor-pointer",
        size: 30
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(CommentOutline, {
        class: "pl-3 pt-[10px]",
        size: 30
      }, null, _parent));
      _push(ssrRenderComponent(SendOutline, {
        class: "pl-3 pt-[10px]",
        size: 30
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(BookmarkOutline, {
        class: "pl-3 pt-[10px]",
        size: 30
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LikeSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ShowPostOptionOverlay",
  __ssrInlineRender: true,
  props: { deleteType: String, id: Number },
  emits: ["close", "deleteSelected"],
  setup(__props) {
    const props = __props;
    const { deleteType, id } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "ShowPostOptionsOverlay",
        class: "fixed flex items-center z-50 top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"
      }, _attrs))}><div class="max-w-sm w-full mx-auto mt-10 bg-white rounded-xl text-center"><button class="font-extrabold w-full text-red-600 p-3 text-lg border-b border-b-gray-300 cursor-pointer"> Delete ${ssrInterpolate(unref(deleteType))}</button><div class="p-3 text-lg cursor-pointer">Cancel</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShowPostOptionOverlay.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  name: "DotsHorizontalIcon",
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
    class: "material-design-icon dots-horizontal-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/DotsHorizontal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DotsHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  name: "EmoticonHappyOutlineIcon",
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/EmoticonHappyOutline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ShowPostOverlay",
  __ssrInlineRender: true,
  props: ["post"],
  emits: ["closeOverlay", "addComment", "updateLike", "deleteSelected"],
  setup(__props) {
    ref("");
    let deleteType = ref(null);
    ref(null);
    usePage().props.auth.user;
    const props = __props;
    const { post } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="OverlaySection" class="fixed top-0 left-0 w-full h-screen bg-[#000000] bg-opacity-60 p-3"><button class="absolute right-3">`);
      _push(ssrRenderComponent(Close, {
        size: 27,
        fillColor: "#FFFFFF"
      }, null, _parent));
      _push(`</button><div class="max-w-6xl b-[calc(100%-100px)] mx-auto mt-10 bg-white rounded-xl"><div class="w-full md:flex h-full overflow-auto rounded-xl"><div class="flex items-center bg-black w-full"><img class="rounded-xl min-w-[400px] p-4 mx-auto"${ssrRenderAttr("src", unref(post).file)}></div><div class="md:max-w-[500px] w-full relative"><div class="flex items-center justify-between p-3 border-b"><div class="flex items-center"><img${ssrRenderAttr("src", unref(post).user.file)} class="rounded-full w-[38px] h-[38px]"><div class="ml-4 font-extrabold text-[15px]">${ssrInterpolate(unref(post).user.pseudo)}</div><div class="flex items-center text-[15px] text-gray-500"><span class="-mt-5 ml-2 mr-[5px] text-[35px]">.</span><div>${ssrInterpolate(unref(post).created_at)}</div></div></div><button>`);
      _push(ssrRenderComponent(DotsHorizontal, {
        size: 27,
        class: "cursor-pointer"
      }, null, _parent));
      _push(`</button></div><div class="overflow-y-auto h-[calc(100%-170px)]"><div class="p-3"><div class="text-[15px] text-gray-900"><div class="font-extrabold">Titre:</div><div>${ssrInterpolate(unref(post).titre)}</div></div><div class="text-[15px] text-gray-900"><div class="font-extrabold">Catégorie:</div><div>${ssrInterpolate(unref(post).categorie)}</div></div><div class="text-[15px] text-gray-900"><div class="font-extrabold">Prix:</div><div>${ssrInterpolate(unref(post).prix)} €</div></div><div class="text-[15px] text-gray-900"><div class="font-extrabold">État:</div><div>${ssrInterpolate(unref(post).etat)}</div></div><div class="text-[15px] text-gray-900"><div class="font-extrabold">Localisation:</div><div>${ssrInterpolate(unref(post).localisation)}</div></div><div class="text-[15px] text-gray-900"><div class="font-extrabold">Description:</div><div>${ssrInterpolate(unref(post).text)}</div></div></div></div><div class="absolute bottom-0 left-0 w-full flex justify-center p-3 bg-blue-100"><button class="bg-blue-600 text-white font-extrabold py-2 px-4 rounded-lg"> Contacter le vendeur </button></div></div></div></div></div>`);
      if (unref(deleteType)) {
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShowPostOverlay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  BookmarkOutline as B,
  DotsHorizontal as D,
  Heart as H,
  _sfc_main$8 as _,
  _sfc_main$4 as a,
  _sfc_main as b
};
