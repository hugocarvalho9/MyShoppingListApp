import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert, AsyncStorage } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import ItemInput from "./components/ItemInput";
import uuid from "uuid-random";

export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getStorageValue();
    }, []);

    async function getStorageValue() {
        try {
            const stored_items = await AsyncStorage.getItem("list_items");
            setItems(JSON.parse(stored_items));
        } catch (e) {
            console.log("No existing data");
        }
    }

    saveNewState = new_state => {
        try {
            AsyncStorage.setItem("list_items", JSON.stringify(new_state));
        } catch (error) {
            console.log("Error on updating list items through AsyncStorage");
        }
    };

    const deleteItem = async id => {
        try {
            setItems(prevItems => {
                new_state = prevItems.filter(item => item.id != id);
                saveNewState(new_state);
                return new_state;
            });
        } catch (error) {
            console.log("Error on deleting data");
        }
    };

    const addItem = async text => {
        if (text) {
            try {
                setItems(prevItems => {
                    let new_item = {
                        id: uuid(),
                        description: text,
                        completed: false
                    };

                    let new_state = null;
                    if (items == null) {
                        new_state = [new_item];
                    } else {
                        new_state = [new_item, ...prevItems];
                    }

                    saveNewState(new_state);
                    return new_state;
                });
            } catch (error) {
                console.log("Error on adding new data");
            }
        } else {
            Alert.alert(
                "Error",
                "You need to put an input",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
            );
        }
    };

    const updateItemStatus = async id => {
        try {
            setItems(prevItems => {
                let itemsUpdated = prevItems.map(item => {
                    if (item.id == id) {
                        item.completed = !item.completed;
                    }
                    return item;
                });

                saveNewState(itemsUpdated);
                return itemsUpdated;
            });
        } catch (error) {
            console.log("Error on updating list item");
        }
    };

    return (
        <View style={styles.container}>
            <Header title="My Shopping List" />
            <ItemInput addItem={addItem} />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ListItem
                        item={item}
                        deleteItem={deleteItem}
                        updateItemStatus={updateItemStatus}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2a7886"
    }
});
