import { AppState } from "@/src/store";
import { fetchWeather } from "@/src/store/actions/weatherActions";
import { weatherActionTypes } from "@/src/store/types/weatherTypes";
import React, { useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const WeatherScreen = () => {
    const [city, setCity] = useState('');
    const dispatch: Dispatch<weatherActionTypes> = useDispatch();
    const { loading, data, error } = useSelector((state: AppState) => state.weather);
    const handleFetch = () => {
        if (city.trim()) {
            dispatch(fetchWeather(city));
            setCity('');
        }
        else {
            Alert.alert("Input Required", "Please enter a city name.");
            return;
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌤 Weather Forecast</Text>
            <TextInput
                placeholder="Enter the City"
                value={city}
                onChangeText={setCity}
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleFetch}>
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>
            {loading && <ActivityIndicator size="large" color="#007BFF" style={{ marginTop: 20 }} />}
            {error && <Text style={styles.error}>⚠️ {error}</Text>}
            {data && (
                <View style={styles.resultCard}>
                    <Text style={styles.city}>{data.city}</Text>
                    <Text style={styles.temperature}>{data.temperature} °C</Text>
                    <Text style={styles.condition}>{data.condition}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F4F8",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    error: {
        color: "#D8000C",
        marginTop: 15,
        fontSize: 16,
        textAlign: "center",
    },
    resultCard: {
        backgroundColor: "#fff",
        marginTop: 30,
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },
    city: {
        fontSize: 22,
        fontWeight: "700",
        color: "#333",
    },
    temperature: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 10,
        color: "#007BFF",
    },
    condition: {
        fontSize: 16,
        color: "#666",
        marginTop: 6,
    },
});

export default WeatherScreen;