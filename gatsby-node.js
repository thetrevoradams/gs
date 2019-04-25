exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(vcf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
  })
}
