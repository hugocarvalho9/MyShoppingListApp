import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({ item, deleteItem, updateItemStatus }) => {
    let text;
    let icon_description;

    if (!item.completed) {
        text = <Text style={styles.listItemText}> {item.description}</Text>;
        icon_description = "checkbox-blank-circle-outline";
    } else {
        text = (
            <Text style={styles.listItemCompletedText}>{item.description}</Text>
        );
        icon_description = "check-circle";
    }

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listView}>
                <MaterialCommunityIcons
                    style={styles.checkCircle}
                    name={icon_description}
                    size={36}
                    color="#2a7886"
                    onPress={() => updateItemStatus(item.id)}
                />
                {text}
                <MaterialCommunityIcons
                    style={styles.removeIcon}
                    name="delete"
                    size={26}
                    color="#9d2503"
                    onPress={() => deleteItem(item.id)}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 2,
        padding: 15,
        backgroundColor: "#f1f3f4",
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: "#A6B7C2"
    },
    listView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    listItemCompletedText: {
        width: "75%",
        fontSize: 16,
        textDecorationLine: "line-through",
        color: "grey"
    },
    listItemText: {
        width: "75%",
        fontSize: 16,
        textDecorationLine: "none"
    },
    checkCircle: {
        width: "15%"
    }
});

export default ListItem;
