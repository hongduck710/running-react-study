const path = require("path");

module.exports = {
  entry: "./src/index.js", // 진입 파일 설정
  output: {
    path: __dirname + '/dist/assets',
    filename: "bundle.js", // 번들된 파일명
  },
  mode: "development", // 개발 모드
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JS와 JSX 파일 처리
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/, // JSON 파일 처리
        type: "json",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // 확장자 생략 가능하도록 설정
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    port: 3000,
  },
};
