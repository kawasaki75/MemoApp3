import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.appbar}>
       <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>Logout</Text>
       </View>
     </View>

     <View>
       <View style={styles.momoListItem}>
        <View>
          <Text style={styles.momoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
       </View>

       <View style={styles.momoListItem}>
        <View>
          <Text style={styles.momoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
       </View>

       <View style={styles.momoListItem}>
        <View>
          <Text style={styles.momoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
       </View>

       <View style={styles.momoListItem}>
        <View>
          <Text style={styles.momoListItemTitle}>買い物リスト</Text>
          <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
       </View>
     </View>

     <View style={styles.circleButtom}>
      <Text style={styles.circleButtomLabel}>+</Text>
     </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appbar: {
    width:'100%',
    height:104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position:'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  momoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0, 0.15)',
  },
  momoListItemTitle: {
    fontSize: 16,
    LineHeight: 32,
  },

  momoListItemDate: {
    fontSize:12,
    LineHeight: 16,
    color: '#848484',
  },

  circleButtom: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom:40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtomLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },

});
