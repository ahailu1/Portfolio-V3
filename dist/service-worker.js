if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let r = Promise.resolve();
      return (
        s[e] ||
          (r = new Promise(async (r) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = r);
            } else importScripts(e), r();
          })),
        r.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(r) };
  self.define = (r, i, t) => {
    s[r] ||
      (s[r] = Promise.resolve().then(() => {
        let s = {};
        const o = { uri: location.origin + r.slice(1) };
        return Promise.all(
          i.map((r) => {
            switch (r) {
              case "exports":
                return s;
              case "module":
                return o;
              default:
                return e(r);
            }
          })
        ).then((e) => {
          const r = t(...e);
          return s.default || (s.default = r), s;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-f7715658"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "index.html", revision: "a2d180504111b8e55d38cf9c9ea678c7" },
        { url: "main.js", revision: "6584850b3d8afab176455b07942ced20" },
      ],
      {}
    );
});
