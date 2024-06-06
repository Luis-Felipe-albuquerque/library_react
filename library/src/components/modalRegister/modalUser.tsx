import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import styles from '@/components/modalRegister/styles';

export function ModalUser({ onClose }: { onClose: () => void }) {
    const [selectedGenero, setSelectedGenero] = useState('Escolha');
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.closeBtnContainer}>
                    <TouchableOpacity onPress={onClose}>
                        <MaterialIcons name="close" size={36} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputsContainer}>
                    <Text style={styles.label}>Nome do Usuário</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.label}>CPF</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.label}>Gênero</Text>
                    <Picker
                        selectedValue={selectedGenero}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSelectedGenero(itemValue)}
                    >
                        <Picker.Item label="Escolha" value="Escolha" color="#00000090" />
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Feminino" value="Feminino" />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.textBtn}>CADASTRAR USUÁRIO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
