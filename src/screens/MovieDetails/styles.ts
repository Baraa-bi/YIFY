import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.black,
  },
  imageContainer: {
    height: 350,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: COLORS.grey,
  },
  image: {
    height: 300,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  section: {
    fontSize: 25,
    marginVertical: 20,
    color: 'white',
    fontWeight: '600',
  },
  summary: {
    color: 'white',
    lineHeight: 35,
  },
  button: {
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    marginVertical: 44,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
