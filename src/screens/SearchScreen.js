import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';


const styles = StyleSheet.create({});

const SearchScreen = () =>{

    const [term,setTerm]= useState('');

    const [searchApi, results, errorMessage]= useResults();

    const filterResultsByPrice= (price)=>{

        return results.filter(result=>{
            return result.price===price;
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=> searchApi(term)}
            />
            {
                errorMessage?<Text>{errorMessage}</Text>:null
            }
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />

                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Bit Pricer" 
                />

                <ResultsList 
                    results={filterResultsByPrice('$$')}
                    title="Big Spender" 
                />

            </ScrollView>
        </>
    )
}

export default SearchScreen;