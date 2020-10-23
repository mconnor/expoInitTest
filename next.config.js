const { withExpo } = require("@expo/next-adapter");

const withFonts = require("next-fonts");
const withTM = require('next-transpile-modules')(['react-native', '@ui-kitten']); // pass the modules you would like to see transpiled
module.exports = withTM(
  withExpo(
    withFonts(
{
        projectRoot: __dirname,
      }
    )
  )
);