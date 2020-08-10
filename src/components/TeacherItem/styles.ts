import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f9',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#3e4372',
    fontSize: 20,
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#5f719d',
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 27,
    color: '#6a6180',
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#5f719d',
    fontSize: 16,
    marginLeft: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },

  favoriteButton: {
    backgroundColor: '#5f719d',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d'
  },

  contactButton: {
    backgroundColor: '#8cb4d2',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize:16,
    marginLeft: 16,
  },
})

export default styles