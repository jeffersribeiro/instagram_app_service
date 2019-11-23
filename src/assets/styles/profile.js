import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pageProfile: {
    flex: 10,
    justifyContent: 'flex-start',
  },
  inforProfile: {
    flexDirection: 'row',
    height: 100,
  },
  inforProfileTtext: {
    flex: 1,
    fontSize: 11,
    display: 'flex',
    margin: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inforProfileNumber: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  inforProfileImage: {
    margin: 7,
    height: 110,
    width: 110,
    borderRadius: 110,
    backgroundColor: 'darkgray',
  },
  inforProfileButtons: {
    borderColor: 'darkgray',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inforProfileButtonsText: {
    fontSize: 15,
    marginHorizontal: 13,
    fontWeight: 'bold',
  },
  inforProfileButtonslayout: {
    width: 400,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  iconStyle: {
    position: 'relative',
    right: 40,
    top: 90,
    backgroundColor: 'skyblue',
    color: 'white',
    alignSelf: 'flex-end',
    textAlign: 'center',
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  ProfileDescriptions: {
    flex: 1.8,
    margin: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  ProfileDescriptionsText: {
    fontSize: 16,
  },
  ProfileFeatured: {
    flex: 1.8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  ProfileContacts: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginVertical:10
  },
  ProfileContactsText: {
    color: 'skyblue',
    marginHorizontal: 20,
    fontSize: 18,
  },
  profilePosts: {
    flex: 4,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  },
});

export default styles;
