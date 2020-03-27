import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({ item, deleteItem, updateItemStatus }) => {
    let text;
    let icon;

    if (!item.completed) {
        text = (
            <Text style={styles.itemTextIncompleted}> {item.description}</Text>
        );
        icon = "checkbox-blank-circle-outline";
    } else {
        text = <Text style={styles.itemTextCompleted}>{item.description}</Text>;
        icon = "check-circle";
    }

    return (
        <TouchableOpacity style={styles.itemSection}>
            <View style={styles.itemView}>
                <MaterialCommunityIcons
                    style={styles.checkItem}
                    name={icon}
                    size={36}
                    color="#2a7886"
                    onPress={() => updateItemStatus(item.id)}
                />
                {text}
                <MaterialCommunityIcons
                    style={styles.removeItem}
                    name="delete"
                    size={24}
                    color="#9d2503"
                    onPress={() => deleteItem(item.id)}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemSection: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 1,
        padding: 15,
        backgroundColor: "#f1f3f4",
        borderRadius: 5
    },
    itemView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    itemTextCompleted: {
        width: "75%",
        fontSize: 16,
        textDecorationLine: "line-through",
        color: "grey"
    },
    itemTextIncompleted: {
        width: "75%",
        fontSize: 16,
        textDecorationLine: "none"
    },
    checkItem: {
        width: "15%"
    },
    removeItem: {
        width: "15%"
    }
});

export default ListItem;
