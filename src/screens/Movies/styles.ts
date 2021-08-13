import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.black,
  },
  button: {
    zIndex: 333,
    position: 'absolute',
    padding: 10,
    width: 70,
    height: 70,
    backgroundColor: COLORS.blue,
    bottom: 30,
    right: 15,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});
