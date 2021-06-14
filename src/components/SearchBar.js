import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical:10,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

const SearchBar = ({term, onTermChange, onTermSubmit})=>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false} 
                style={styles.inputStyle}
                placeholder="search" 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
           />
        </View>
    )
}

export default SearchBar;