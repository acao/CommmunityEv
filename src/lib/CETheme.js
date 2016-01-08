
import {setTheme, getTheme} from 'react-native-material-kit';
import {CEColors} from '../lib';
const theme = {
  primaryColor: MKColor.Indigo,
  RGBPrimaryColor: MKColor.RGBIndigo,
  accentColor: MKColor.Pink,
  RGBAccentColor: MKColor.RGBPink,
  bgPlain: 'rgba(158,158,158,.2)',
  bgDisabled: 'rgba(0,0,0,.12)',
  fontColor: 'rgb(117, 117, 117)',
  fontSize: 14,
  rippleColor: 'rgba(255,255,255,0.125)',
  toggleStyle: {
    onColor: `rgba(${MKColor.RGBIndigo},.4)`,
    offColor: 'rgba(0,0,0,0.25)',
    thumbOnColor: MKColor.Indigo,
    thumbOffColor: MKColor.Silver,
    rippleColor: `rgba(${MKColor.RGBIndigo},.2)`,
  },
  radioStyle: {
    borderOnColor: MKColor.Indigo,
    borderOffColor: MKColor.Indigo,
    fillColor: MKColor.Indigo,
    rippleColor: `rgba(${MKColor.RGBIndigo},.2)`,
  },
  checkboxStyle: {
    borderOnColor: MKColor.Indigo,
    borderOffColor: 'rgba(0,0,0,.56)',
    fillColor: MKColor.Indigo,
    rippleColor: `rgba(${MKColor.RGBIndigo},.2)`,
    inset: 0,
  },
};


function invokeTheme(){
  setTheme(Object.assign(theme, getTheme()));
};

export default invokeTheme();
