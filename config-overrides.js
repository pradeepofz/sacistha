const paths = require('react-scripts/config/paths')
const path = require('path')

// Make the "app" folder be treated as the "src" folder
paths.appSrc = path.resolve(__dirname, 'app')
// Tell the app that "src/index.js" has moved to "app/index.js"
paths.appJs = path.resolve(__dirname, 'app/core/App.tsx')
paths.appIndexJs = path.resolve(__dirname, 'app/core/index.tsx')
paths.appTypeDeclarations = path.resolve(__dirname, 'react-app-env.d.ts')
