import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
    return (
        <View style={styles.headerSection}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: "Shopping List"
};

const styles = StyleSheet.create({
    headerSection: {
        height: 120,
        paddingTop: 75
    },
    headerText: {
        color: "#f1f3f4",
        fontWeight: "bold",
        fontSize: 30,
        paddingLeft: 30
    }
});

export default Header;
