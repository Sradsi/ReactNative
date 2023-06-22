import React, {useState} from 'react';
import { 
    ScrollView,
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
 } from 'react-native';

 import Snackbar from 'react-native-snackbar';

 const currrencyPerRupee = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.011,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
    BITCOIN: 0.000004,
 }

const App = () => {
    const [inputValue, setInputValue] = useState(0);
    const [resultValue, setResultValue] = useState(0);
    const buttonPressed = (currency) => {
        if(!inputValue)
        {
            return Snackbar.show({
                text: "please enter a value",
                backgroundColor: "#ea7773",
                textColor: "#FFF",

            });           
        };
        let result = parseFloat(inputValue) * currrencyPerRupee[currency];
        setResultValue(result.toFixed(2));
    };
    return(
        <>
            <ScrollView backgroundColor='#1b262c'
            keyboardDismissMode='true'
            contentInsetAdjustmentBehavior='automatic'>
                <SafeAreaView style={styles.container}>                    
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultvalue}>{resultValue}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        style={styles.input} 
                        keyboardType="numeric" 
                        placeholder='Enter value'
                        placeholderTextColor="#c1c1c1"
                        value={inputValue}
                        onChangeText={(inputValue) => setInputValue(inputValue)}>
                        </TextInput>
                    </View>
                    <View style={styles.convertButtonContainer}>
                    {Object.keys(currrencyPerRupee).map((currency) => (
                        <TouchableOpacity
                        key={currency}
                        style={styles.ConverterButton}
                        onPress={() => buttonPressed(currency)}>
                            <Text style={styles.ConvertButtonText}>{currency}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b262c',
    },
    resultContainer: {
        height: 70,
        marginTop: 80,
        justifyContent: "center",
        borderColor: "#bbe1fa",
        borderWidth: 2,
        alignItems: "center",
    },
    resultvalue: {
        fontSize: 30,
        color: "#FFF",
        fontWeight: "bold",
    },
    inputContainer: {
        height: 70,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#bbe1fa",
    },
    input: {
        fontSize: 30,
        textAlign: "center",
        color: "#FFF",
    },
    convertButtonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
    ConverterButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: "33.3%",
        borderWidth: 2,
        borderColor: "#bbe1fa",
        marginTop: 10,
        backgroundColor: "#0f4c75",
    },
    ConvertButtonText: {
        color: "#FFF",
    }
})

