module.exports = function () {
    return {
      name: 'accessibility',
      injectHtmlTags() {
        return {
          postBodyTags: [
            {
              tagName: 'script',
              innerHTML: `
                nl_pos = "bl";
                nl_compact = "1";
                nl_accordion = "1";
                nl_dir = "nagishli-files";
              `,
            },
            {
              tagName: 'script',
              attributes: {
                src: 'nagishli.js',
                charset: 'utf-8',
                defer: true,
              },
            },
          ],
        };
      },
    };
  };
