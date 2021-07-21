(() => {
  var e = {
      590: () => {
        alert("hello world");
      },
    },
    o = {};
  function r(t) {
    var l = o[t];
    if (void 0 !== l) return l.exports;
    var a = (o[t] = { exports: {} });
    return e[t](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var o = e && e.__esModule ? () => e.default : () => e;
    return r.d(o, { a: o }), o;
  }),
    (r.d = (e, o) => {
      for (var t in o)
        r.o(o, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
    (r.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (() => {
      "use strict";
      r(590), console.log("whats up ottawa"), console.log("Hello World!");
    })();
})();
