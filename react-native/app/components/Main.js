import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import Note from './Note';

export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            noteArray: [],
            noteText: '',
        }
    }

    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val} deleteMethod={ () => this.deleteNote(key)} />
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style= {styles.headerText}>Notes</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <KeyboardAvoidingView  style={styles.moveInput} behavior="padding">
                    <TextInput 
                    style={styles.textInput} 
                    onChangeText={(noteText) => this.setState({noteText})}
                    value={this.state.noteText}
                    placeholder='>note' 
                    placeholderTextColor='white' 
                    underlineColorAndroid='transparent' >

                    </TextInput>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote(){
        if(this.state.noteText){
            var date = new Date();
            this.state.noteArray.push({
                'date': date.getDate() + 
                "." + (date.getMonth() + 1) +
                "." + date.getFullYear() + 
                " " + date.getHours() +":"+ date.getMinutes() ,
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray});
            this.setState({ noteText: ''});
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
    }
    /*
    saveData(){
        let obj = {
            textNote: '',
            dateNote: '',
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }
    /*
    showData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parse = JSON.parse(user);
            alert(parse.textNoteuser);
        }
        catch(error){
            alert(user);
        }
    }
    */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    moveInput:{
        justifyContent: 'space-between',
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        alignItems: 'center',
    },/*
    saveDatas: {
        position: 'absolute',
        zIndex: 11,
        left: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        //borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        //elevation: 8,
    },*/
});
