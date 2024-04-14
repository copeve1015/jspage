const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // JavaScript, CSS, 이미지 확장자 파일
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env']}
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pages/openapi.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,  // html 속성 쿼트 제거
        collapseWhitespace: true, // html 줄넘김을 한 줄로
        removeComments: true, // 주석 제거
      },
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',
      chunkFilename: 'style.css',
    }),
  ],
  // 최적화
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          mangle: {
            properties: true,
          },
          compress: {
            drop_console: true,
            pure_funcs: ['console.log'],
          },  // 콘솔 명령어 제거
          format: {
            comments: false,  // 주석 제거
          },
          keep_fnames: true,
        }
      })
    ]
  },
  entry: './script.js', // 프론트엔드 스크립트
  output: {
    filename: 'script.js',  // 아웃풋 파일명
    path: path.resolve(__dirname, 'dist'),  // 아웃풋 폴더명
  },
  mode: 'production', // 배포 모드
}