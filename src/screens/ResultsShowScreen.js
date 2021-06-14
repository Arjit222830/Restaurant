import React,{useState} from 'react';
import { useEffect } from 'react';
import {View,Text,StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 200
    }
});

const ResultsShowScreen = ({navigation})=>{

    const [result, setResult] =  useState(null);

    const id= navigation.getParam('id');

    useEffect(()=>{
        getResult(id)   
    },[])

    const getResult = async(id) =>{
        const response= await yelp.get(`/${id}`);
        setResult(response.data);
    }

    if(!result)
        return null;

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    )
}

export default ResultsShowScreen;