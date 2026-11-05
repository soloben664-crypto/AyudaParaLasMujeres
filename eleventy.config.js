const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/*.css"],
  });

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("es-MX").toLocaleString(DateTime.DATE_FULL);
  });

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  return {
    dir: {
      input: "src",
    },
    templateFormats: ["njk", "md"],
  };
};
