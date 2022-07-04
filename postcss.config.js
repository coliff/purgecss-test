module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./content/*.md",
        "./node_modules/bootstrap/scss/_tooltip.scss",
        "./layouts/**/*.html",
        "./public/index.html",
        "./public/**/index.html",
        "./assets/js/*.js",
        "./static/js/*.js",
      ],
      safelist: [
        "arrow",
        "bs-tooltip-auto",
        "bs-tooltip-bottom",
        "bs-tooltip-top",
        "btn-outline-secondary",
        "btn-primary",
      ],
      blocklist: ["btn-group-vertical", "carousel", "carousel-item"],
    },
    autoprefixer: {},
  },
};
