webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_app_scss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_sass_app_scss__);
/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.debug = "production" !== 'production';

/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */


__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.baseURL = "https://api.github.com/";
__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.common.Accept = 'application/vnd.github.v3+json';
Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype, '$http', {
  get() {
    return __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
  }
});

/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_3__routes__["a" /* default */]
});
/* harmony export (immutable) */ __webpack_exports__["a"] = router;


/* ============
 * Vue Material
 * ============
 *
 * Vue Material is lightweight framework built exactly
 * according to the Material Design specs.
 *
 * https://vuematerial.github.io
 */


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_material___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme('default', {
  primary: 'deep-orange',
  accent: 'blue'
});

/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 *
 * http://sass-lang.com/
 */


/* unused harmony default export */ var _unused_webpack_default_export = ({
  router
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * The name of the application.
   */
  name: 'GitHubCrawler',

  /**
   * Bind Vue Router to the Vue instance.
   */
  router: __WEBPACK_IMPORTED_MODULE_1__bootstrap__["a" /* router */],

  /**
   * The data that the Vue component can use.
   *
   * @returns {Object} The data.
   */
  data() {
    return {
      user: null,
      username: null,
      repositories: []
    };
  },

  /**
   * The watchers.
   */
  watch: {
    /**
     * Will watch the username and fetch
     * new data once the username has been updated.
     *
     * @param {String} username The new username.
     */
    username(username) {
      this.setUsername(username);
    }
  },

  /**
   * The methods of this Vue instance.
   */
  methods: {
    /**
     * Method used to toggle the side navigation.
     */
    toggleSidenav() {
      this.$refs.sidenav.toggle();
    },

    /**
     * Method used to close the side navigation.
     */
    closeSidenav() {
      this.$refs.sidenav.close();
    },

    /**
     * Method to fetch the repositories by a given username.
     *
     * @param {String} username The given username.
     */
    fetchRepositories(username) {
      this.$http.get(`users/${username}/repos`).then(({ data }) => {
        this.repositories = data;
      });
    },

    /**
     * Method used to fetch the user information by a given username.
     *
     * @param {String} username The given username.
     */
    fetchUser(username) {
      this.$http.get(`users/${username}`).then(({ data }) => {
        this.user = data;
      });
    },

    /**
     * Method used to set the username and fetch
     * information on debounce.
     */
    setUsername: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (username) {
      if (username) {
        this.fetchUser(username);
        this.fetchRepositories(username);
      }

      if (!username) {
        this.user = null;
        this.repositories = [];
      }
    }, 500)
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * The properties this component can receive.
   */
  props: {
    repositories: {
      type: Array,
      required: true
    }
  },

  /**
   * The methods this component can use.
   */
  methods: {
    /**
     * Method used to sort the items.
     *
     * @param {Object} sorting The sorting data.
     */
    sortRepositories(sorting) {
      this.repositories.sort((a, b) => {
        if (a[sorting.name] > b[sorting.name]) {
          return sorting.type === 'asc' ? 1 : -1;
        }

        if (a[sorting.name] < b[sorting.name]) {
          return sorting.type === 'asc' ? -1 : 1;
        }

        return 0;
      });
    }
  }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * The properties this component can receive.
   */
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap__ = __webpack_require__(5);




new __WEBPACK_IMPORTED_MODULE_0_vue__["default"](__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a).$mount('#app');

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_repositories_table_repositories_table_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_repositories_table_repositories_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_repositories_table_repositories_table_vue__);


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Computed properties the page can use.
   */
  computed: {
    /**
     * Fetch the repositories from the root.
     *
     * @returns {Array} The repositories.
     */
    repositories() {
      return this.$root.repositories;
    }
  },

  /**
   * The components that are being used in this page.
   */
  components: {
    RepositoriesTable: __WEBPACK_IMPORTED_MODULE_0__components_repositories_table_repositories_table_vue___default.a
  },

  /**
   * Fires when the component has been mounted.
   */
  mounted() {
    this.$root.closeSidenav();
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_card_user_card_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_card_user_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_user_card_user_card_vue__);


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * The computed properties this page can use.
   */
  computed: {
    /**
     * The user from the root.
     *
     * @returns {Object} The user from the root.
     */
    user() {
      return this.$root.user;
    }
  },

  /**
   * The components this page can use.
   */
  components: {
    UserCard: __WEBPACK_IMPORTED_MODULE_0__components_user_card_user_card_vue___default.a
  },

  /**
   * Fires when the component has been mounted.
   */
  mounted() {
    this.$root.closeSidenav();
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* ============
 * The routes
 * ============
 *
 * The routes that are being used for the application,
 * are shown here.
 */
/* harmony default export */ __webpack_exports__["a"] = ([
// Route /repositories
{
  path: '/repositories',
  name: 'repositories',
  component: __webpack_require__(45)
},

// Route /user
{
  path: '/user',
  name: 'user',
  component: __webpack_require__(46)
},

// Redirect / to /repositories
{
  path: '/',
  redirect: '/repositories'
},

// Redirect /* to /repositories
{
  path: '/*',
  redirect: '/repositories'
}]);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-card', [_c('md-card-header', [_c('md-card-header-text', [_c('div', {
    staticClass: "md-title"
  }, [_vm._v("\n        " + _vm._s(_vm.user.login) + "\n      ")]), _vm._v(" "), (_vm.user.name) ? _c('div', {
    staticClass: "md-subhead"
  }, [_vm._v("\n        " + _vm._s(_vm.user.name) + "\n      ")]) : _vm._e()]), _vm._v(" "), _c('md-card-media', [_c('img', {
    attrs: {
      "src": _vm.user.avatar_url
    }
  })])], 1), _vm._v(" "), _c('md-card-content', [(_vm.user.bio) ? _c('p', [_vm._v("\n      " + _vm._s(_vm.user.bio) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('md-list', [(_vm.user.location) ? _c('md-list-item', [_c('md-icon', [_vm._v("location_on")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.user.location))])], 1) : _vm._e(), _vm._v(" "), _c('md-list-item', [_c('md-icon', [_vm._v("class")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.user.public_repos) + " public repos")])], 1), _vm._v(" "), _c('md-list-item', [_c('md-icon', [_vm._v("people")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.user.followers) + " followers")])], 1), _vm._v(" "), _c('md-list-item', [_c('md-icon', [_vm._v("people_outline")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.user.following) + " following")])], 1)], 1)], 1), _vm._v(" "), _c('md-card-actions', [_c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "href": _vm.user.html_url,
      "target": "_blank"
    }
  }, [_vm._v("\n      Profile\n    ")]), _vm._v(" "), (_vm.user.blog) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "href": _vm.user.blog,
      "target": "_blank"
    }
  }, [_vm._v("\n      Website\n    ")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-table', {
    attrs: {
      "md-sort-type": "desc"
    },
    on: {
      "sort": _vm.sortRepositories
    }
  }, [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', {
    attrs: {
      "md-sort-by": "name"
    }
  }, [_vm._v("\n        Name\n      ")]), _vm._v(" "), _c('md-table-head', [_vm._v("\n        Description\n      ")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "stargazers_count"
    }
  }, [_vm._v("\n        Number of Stars\n      ")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "forks_count"
    }
  }, [_vm._v("\n        Number of Forks\n      ")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "open_issues_count"
    }
  }, [_vm._v("\n        Number of Open Issues\n      ")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "language"
    }
  }, [_vm._v("\n        Language\n      ")]), _vm._v(" "), _c('md-table-head', {
    attrs: {
      "md-sort-by": "size"
    }
  }, [_vm._v("\n        Size\n      ")])], 1)], 1), _vm._v(" "), _c('md-table-body', [_vm._l((_vm.repositories), function(repository) {
    return _c('md-table-row', {
      key: repository
    }, [_c('md-table-cell', [_c('a', {
      attrs: {
        "href": repository.html_url,
        "target": "_blank"
      }
    }, [_vm._v("\n          " + _vm._s(repository.name) + "\n        ")])]), _vm._v(" "), _c('md-table-cell', [_vm._v("\n        " + _vm._s(repository.description) + "\n      ")]), _vm._v(" "), _c('md-table-cell', [_vm._v("\n        " + _vm._s(repository.stargazers_count) + "\n      ")]), _vm._v(" "), _c('md-table-cell', [_vm._v("\n        " + _vm._s(repository.forks_count) + "\n      ")]), _vm._v(" "), _c('md-table-cell', [_vm._v("\n        " + _vm._s(repository.open_issues_count) + "\n      ")]), _vm._v(" "), _c('md-table-cell', [_vm._v("\n        " + _vm._s(repository.language) + "\n      ")]), _vm._v(" "), _c('md-table-cell', [_vm._v("\n        " + _vm._s(repository.size) + "Kb\n      ")])], 1)
  }), _vm._v(" "), (_vm.repositories.length === 0) ? _c('md-table-row', [_c('md-table-cell', {
    attrs: {
      "colspan": "7"
    }
  }, [_vm._v("\n        No repositories found...\n      ")])], 1) : _vm._e()], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('md-toolbar', {
    staticClass: "md-medium"
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function($event) {
        _vm.toggleSidenav($event)
      }
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
    staticClass: "md-title"
  }, [_vm._v("GitHub")]), _vm._v(" "), _c('md-input-container', {
    staticStyle: {
      "flex": "1"
    }
  }, [_c('md-input', {
    attrs: {
      "placeholder": "Search username"
    },
    model: {
      value: (_vm.username),
      callback: function($$v) {
        _vm.username = $$v
      },
      expression: "username"
    }
  })], 1)], 1), _vm._v(" "), _c('md-sidenav', {
    ref: "sidenav",
    staticClass: "md-left"
  }, [_c('md-toolbar', {
    staticClass: "md-medium"
  }, [_c('md-button', {
    staticClass: "md-icon-button",
    nativeOn: {
      "click": function($event) {
        _vm.toggleSidenav($event)
      }
    }
  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
    staticClass: "md-title"
  }, [_vm._v("GitHub")])], 1), _vm._v(" "), _c('md-list', [_c('md-list-item', [_c('router-link', {
    attrs: {
      "to": {
        name: 'repositories'
      }
    }
  }, [_vm._v("\n          Repositories\n        ")])], 1), _vm._v(" "), _c('md-list-item', [_c('router-link', {
    attrs: {
      "to": {
        name: 'user'
      }
    }
  }, [_vm._v("\n          User\n        ")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "main-content"
  }, [_c('md-layout', [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.user) ? _c('user-card', {
    attrs: {
      "user": _vm.user
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('repositories-table', {
    attrs: {
      "repositories": _vm.repositories
    }
  })], 1)
},staticRenderFns: []}

/***/ })
],[34]);
//# sourceMappingURL=app.231fe60caeed8c27d7c2.js.map