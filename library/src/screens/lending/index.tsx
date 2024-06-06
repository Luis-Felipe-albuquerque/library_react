import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '@/screens/lending/styles';

export default function LendingScreen() {
    // Estados para armazenar o usuário e o livro selecionados, a data e a visibilidade do DateTimePicker (Onde vou conectar com o BE)
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedBook, setSelectedBook] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Função para emprestar um livro e aparecer um pop-up de retorno
    const handleLendBook = () => {
        Alert.alert("Livro Emprestado");
    };

    // Função para devolver um livro e aparecer um pop-up de retorno
    const handleReturnBook = () => {
        Alert.alert("Livro Entregue");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Usuário</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedUser}
                    onValueChange={(itemValue) => setSelectedUser(itemValue)}
                    style={styles.input}
                >
                    <Picker.Item label="Selecione um usuário" value="" />
                    <Picker.Item label="Usuário 1" value="user1" />
                    <Picker.Item label="Usuário 2" value="user2" />
                </Picker>
            </View>

            <Text style={styles.label}>Livro</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedBook}
                    onValueChange={(itemValue) => setSelectedBook(itemValue)}
                    style={styles.input}
                >
                    <Picker.Item label="Selecione um livro" value="" />
                    <Picker.Item label="Livro 1" value="book1" />
                    <Picker.Item label="Livro 2" value="book2" />
                </Picker>
            </View>

            <Text style={styles.label}>Data</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
                <Text>{new Date(date.getFullYear(), date.getMonth(), date.getDate()).toLocaleDateString('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric' })}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) {
                            setDate(selectedDate);
                        }
                    }}
                />
            )}

            {/* Botão para emprestar o livro */}
            <TouchableOpacity style={styles.button} onPress={handleLendBook}>
                <Text style={styles.textBtn}>EMPRESTAR</Text>
            </TouchableOpacity>
            {/* Botão para devolver o livro */}
            <TouchableOpacity style={styles.button} onPress={handleReturnBook}>
                <Text style={styles.textBtn}>ENTREGAR</Text>
            </TouchableOpacity>
        </View>
    );
}
