const { addBabelPlugin, override } = require('customize-cra');

// substituir algumas configs do Create-react-App
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src', // pasta 'raiz' do sistema
    },
  ])
);
