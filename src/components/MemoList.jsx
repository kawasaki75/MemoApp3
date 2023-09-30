import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
    return(
     <View>
       <View style={styles.momoListItem}>
         <View>
           <Text style={styles.momoListItemTitle}>買い物リスト</Text>
           <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
         </View>
         <TouchableOpacity>
           <Feather name="x" size={16} color="#B0B0B0" />
         </TouchableOpacity>
        </View>

        <View style={styles.momoListItem}>
         <View>
           <Text style={styles.momoListItemTitle}>買い物リスト</Text>
           <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
         </View>
         <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
         </TouchableOpacity>
        </View>

        <View style={styles.momoListItem}>
         <View>
           <Text style={styles.momoListItemTitle}>買い物リスト</Text>
           <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
         </View>
         <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
         </TouchableOpacity>
        </View>

        <View style={styles.momoListItem}>
         <View>
           <Text style={styles.momoListItemTitle}>買い物リスト</Text>
           <Text style={styles.momoListItemDate}>2020年12月24日　10:00</Text>
         </View>
         <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
         </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
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
});
