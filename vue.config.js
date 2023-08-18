module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  pwa: {
    themeColor: '#808080',
    msTileColor: '#808080',
    manifestOptions: {
      background_color: '#121212'
    },
    name: 'lawnmower'
  }
};
