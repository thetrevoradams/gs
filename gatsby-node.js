exports.onCreateWebpackConfig = ({ actions }) => {
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
