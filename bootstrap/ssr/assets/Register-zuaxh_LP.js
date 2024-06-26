import { withCtx, unref, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { G as GuestLayout } from "./GuestLayout-BjAri33y.js";
import { a as _sfc_main$1, b as _sfc_main$2 } from "./TextInput-Bq3bXff-.js";
import { _ as _sfc_main$3 } from "./PrimaryButton-C_rIuqoS.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      surname: "",
      name: "",
      email: "",
      pseudo: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<img class="mx-auto pt-8 pb-10" width="200" src="/logo.png"${_scopeId}><div class="text-gray-600 text-center font-extrabold text-[20px] mb-4"${_scopeId}>Inscrivez-vous pour acheter ou troquer localement !</div><form${_scopeId}><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              id: "surname",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).surname,
              "onUpdate:modelValue": ($event) => unref(form).surname = $event,
              required: "",
              autofocus: "",
              autocomplete: "surname",
              placeholder: "Nom"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name",
              placeholder: "Prénom"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username",
              placeholder: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              id: "pseudo",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).pseudo,
              "onUpdate:modelValue": ($event) => unref(form).pseudo = $event,
              required: "",
              autocomplete: "pseudo",
              placeholder: "Pseudo"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.pseudo
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password",
              placeholder: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password",
              placeholder: "Confirmation du mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: ["mt-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-center mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Déjà inscrit ? `);
                } else {
                  return [
                    createTextVNode(" Déjà inscrit ? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-center mt-4"${_scopeId}> Vous avez un compte ? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "pl-1 font-bold text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Se connecter `);
                } else {
                  return [
                    createTextVNode(" Se connecter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("img", {
                class: "mx-auto pt-8 pb-10",
                width: "200",
                src: "/logo.png"
              }),
              createVNode("div", { class: "text-gray-600 text-center font-extrabold text-[20px] mb-4" }, "Inscrivez-vous pour acheter ou troquer localement !"),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    id: "surname",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).surname,
                    "onUpdate:modelValue": ($event) => unref(form).surname = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "surname",
                    placeholder: "Nom"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name",
                    placeholder: "Prénom"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username",
                    placeholder: "Email"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    id: "pseudo",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).pseudo,
                    "onUpdate:modelValue": ($event) => unref(form).pseudo = $event,
                    required: "",
                    autocomplete: "pseudo",
                    placeholder: "Pseudo"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.pseudo
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password",
                    placeholder: "Mot de passe"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$1, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password",
                    placeholder: "Confirmation du mot de passe"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode(_sfc_main$3, {
                  class: ["mt-4", { "opacity-25": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Register ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Déjà inscrit ? ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                  createTextVNode(" Vous avez un compte ? "),
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "pl-1 font-bold text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Se connecter ")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
