import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ItemInput = ({ addItem }) => {
    const [text, setText] = useState("");

    const onChange = textValue => setText(textValue);

    return (
        <View style={styles.itemInputView}>
            <TextInput
                style={styles.textInput}
                placeholder="Add Item..."
                onChangeText={onChange}
                value={text}
            />
            <AntDesign
                name="pluscircle"
                size={32}
                color="#2a7886"
                onPress={() => {
                    addItem(text);
                    Keyboard.dismiss();
                    setText("");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemInputView: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 40,
        marginTop: 25,
        padding: 20,
        backgroundColor: "#f1f3f4",
        borderRadius: 10,
        flexDirection: "row"
    },
    textInput: {
        width: "90%"
    }
});

export default ItemInput;
