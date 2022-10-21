(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });

  // src/jsxFactory.ts
  var h = (type, props = {}, ...children) => {
    if (typeof type === "function")
      return type({ ...props, children });
    if (props?.className) {
      props.class = props.className;
      delete props.className;
    }
    if (props?.style) {
      props.style = parseStyleToString(props.style);
    }
    return `<${type} ${parsePropsToString(props ?? {})}>
  ${children.length ? `${children.flat().join("\n")}
</${type}>` : ""}`;
  };
  var parseStyleToString = (style) => typeof style === "string" ? style : Object.entries(style).map(([key, value]) => `${key}: ${value}`).join(";");
  var parsePropsToString = (props) => Object.entries(props).map(([key, value]) => `${key}="${value}"`).join(" ");

  // src/utils/getArticleDetails.ts
  var getArticleDetails = (article) => article._embedded["wp:term"].reduce(
    (acc, next) => Object.assign(
      acc,
      next.reduce((acc2, next2) => {
        acc2[next2.taxonomy] = next2.name;
        return acc2;
      }, {})
    ),
    {}
  );

  // src/utils/getArticles.ts
  var getArticles = async () => {
    try {
      const response = await fetch(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        }
      );
      if (!response.ok)
        throw new Error(response.statusText);
      const articles = await response.json();
      return articles;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  // src/components/BlogCard.tsx
  var BlogCard = ({ article }) => {
    const { category, post_tag, topic, group } = getArticleDetails(article);
    return /* @__PURE__ */ h("div", {
      class: "col-4 col-medium-2 p-card u-align--left p-card--highlighted p-card__post flex-column card-border__top"
    }, /* @__PURE__ */ h("p", {
      class: "p-muted-heading"
    }, group ?? topic ?? post_tag), /* @__PURE__ */ h("hr", {
      class: "u-sv1"
    }), /* @__PURE__ */ h("div", {
      class: "flex-column full-height"
    }, /* @__PURE__ */ h("img", {
      class: "p-card__image",
      src: article.featured_media,
      width: "16",
      height: "9"
    }), /* @__PURE__ */ h("a", {
      href: article.link
    }, /* @__PURE__ */ h("h2", {
      class: "p-heading--3 weight-base"
    }, article.title.rendered)), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("em", null, "By", " ", /* @__PURE__ */ h("a", {
      href: article._embedded.author[0].link
    }, article._embedded.author[0].name), " ", "on", " ", new Date(article.date_gmt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })))), /* @__PURE__ */ h("hr", {
      class: "u-sv1"
    }), /* @__PURE__ */ h("span", null, category));
  };

  // src/components/BlogList.tsx
  var BlogList = ({ articles }) => /* @__PURE__ */ h("div", {
    class: "u-align--center u-vertically-center min-h-screen"
  }, /* @__PURE__ */ h("div", {
    class: "grid"
  }, /* @__PURE__ */ h("div", {
    class: "row"
  }, articles.map((article) => /* @__PURE__ */ h(BlogCard, {
    article
  })))));

  // src/index.tsx
  var import_promises = __require("node:fs/promises");
  var init = async () => {
    const articles = await getArticles();
    const content = /* @__PURE__ */ h(BlogList, {
      articles
    });
    const index = await (0, import_promises.readFile)("./src/static/index.html", "utf8");
    await (0, import_promises.writeFile)(
      "./dist/index.html",
      index.replace("{{ content_for_body }}", content)
    );
  };
  init();
})();
