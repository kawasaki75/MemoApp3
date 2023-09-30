import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
    const { label, onPress }= props;
    return (
     <TouchableOpacity style={styles.buttomContainer} onPress={onPress}>
        <Text style={styles.buttomLabel}>{ label }</Text>
     </TouchableOpacity>

    );
}

Button.propTypes = {
    label: string.isRequired,
    onPress: func,
};

Button.defaultProps ={
    onPress: null,
}

const styles = StyleSheet.create({
    buttomContainer: {
        backgroundColor: '#467FD3',
        borderRadius:4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttomLabel: {
        fontsize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#ffffff',
    },
})
