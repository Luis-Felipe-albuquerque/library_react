import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from '@/screens/historic/styles';

export default function HistoricScreen() {
    // Estados para armazenar o usuário, livros emprestados e devolvidos (ATÉ QUE INTEGRE COM O BE)
    const [selectedUser, setSelectedUser] = useState('');
    const [borrowedBooks, setBorrowedBooks] = useState<Book[]>([]);
    const [returnedBooks, setReturnedBooks] = useState<ReturnedBook[]>([]);

    // Interface para definir o tipo de livro
    interface Book {
        id: number;
        title: string;
    }

    // Interface para definir o tipo de livro devolvido
    interface ReturnedBook {
        id: number;
        title: string;
        returnDate: Date;
    }

    // Função para lidar com a devolução de um livro emprestado
    const handleReturnBook = (bookId: number) => {
        // Atualizar os estados de "borrowedBooks" e "returnedBooks" (INTEGRAR COM BE [PESQUISAR SOBRE])
        const updatedBorrowedBooks = borrowedBooks.filter(book => book.id !== bookId);
        setBorrowedBooks(updatedBorrowedBooks);
        setReturnedBooks([...returnedBooks, { id: bookId, title: borrowedBooks.find(book => book.id === bookId)?.title || '', returnDate: new Date() }]); // Adicionar data de devolução ao objeto do livro devolvido
        Alert.alert('Livro devolvido com sucesso!');
    };

    return (
        <View style={styles.container}>
            {/* Seção "Meus Livros" */}
            <Text style={styles.sectionTitle}>Meus Livros</Text>
            <FlatList
                data={borrowedBooks}
                renderItem={({ item }) => (
                    <View style={styles.borrowedBookItem}>
                        <Text style={styles.borrowedBookTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.returnButton} onPress={() => handleReturnBook(item.id)}>
                            <Text style={styles.returnButtonText}>Entregar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id.toString()} // Chave única para cada item
            />

            {/* Seção "Livros Entregues" */}
            <Text style={styles.sectionTitle}>Livros Entregues</Text>
            <FlatList
                data={returnedBooks}
                renderItem={({ item }) => (
                    <View style={styles.returnedBookItem}>
                        <Text style={styles.returnedBookTitle}>{item.title}</Text>
                        <Text style={styles.returnedBookDate}>
                            Data de Entrega: {item.returnDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric' })}
                        </Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}
