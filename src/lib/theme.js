
import { setTheme, getTheme } from 'react-native-material-kit';
const colors = require('./colors');

const theme = {
  primaryColor: colors.Indigo,
  RGBPrimaryColor: colors.RGBIndigo,
  accentColor: colors.Pink,
  RGBAccentColor: colors.RGBPink,
  bgPlain: 'rgba(158,158,158,.2)',
  bgDisabled: 'rgba(0,0,0,.12)',
  fontColor: 'rgb(117, 117, 117)',
  fontSize: 14,
  rippleColor: 'rgba(255,255,255,0.125)',
  toggleStyle: {
    onColor: `rgba(${colors.RGBIndigo},.4)`,
    offColor: 'rgba(0,0,0,0.25)',
    thumbOnColor: colors.Indigo,
    thumbOffColor: colors.Silver,
    rippleColor: `rgba(${colors.RGBIndigo},.2)`,
  },
  radioStyle: {
    borderOnColor: colors.Indigo,
    borderOffColor: colors.Indigo,
    fillColor: colors.Indigo,
    rippleColor: `rgba(${colors.RGBIndigo},.2)`,
  },
  checkboxStyle: {
    borderOnColor: colors.Indigo,
    borderOffColor: 'rgba(0,0,0,.56)',
    fillColor: colors.Indigo,
    rippleColor: `rgba(${colors.RGBIndigo},.2)`,
    inset: 0,
  },
};

function invokeTheme() {
  setTheme(Object.assign(theme, getTheme()));
}

export default invokeTheme();
