import { useState } from 'react';
import {
    View, Text, ImageBackground, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Dimensions, KeyboardAvoidingView,
    Platform,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
    const [side1, setSide1] = useState('');
    const [side2, setSide2] = useState('');
    const [side3, setSide3] = useState('');

    const calArea = () => {
        const parsedSide1 = parseFloat(side1);
        const parsedSide2 = parseFloat(side2);
        const parsedSide3 = parseFloat(side3);

        // Check if the parsed sides are valid numbers
        if (isNaN(parsedSide1) || isNaN(parsedSide2) || isNaN(parsedSide3)) {
            alert('Invalid input. Please enter valid numeric values for sides.');
            return;
        }

        // Check if the sides form a valid triangle
        if (parsedSide1 + parsedSide2 > parsedSide3 && parsedSide2 + parsedSide3 > parsedSide1 && parsedSide1 + parsedSide3 > parsedSide2) {
            const s = (parsedSide1 + parsedSide2 + parsedSide3) / 2;
            const area = Math.sqrt(s * (s - parsedSide1) * (s - parsedSide2) * (s - parsedSide3));

            if (!isNaN(area)) {
                alert(`Area of Triangle is ${area.toFixed(4)} m²`);
            } else {
                alert('Invalid input. Please enter valid numeric values for sides.');
            }
        } else {
            alert('Invalid input. The given sides do not form a valid triangle.');
        }
    };

    const calAreaCent = () => {
        const parsedSide1 = parseFloat(side1);
        const parsedSide2 = parseFloat(side2);
        const parsedSide3 = parseFloat(side3);

        // Check if the parsed sides are valid numbers
        if (isNaN(parsedSide1) || isNaN(parsedSide2) || isNaN(parsedSide3)) {
            alert('Invalid input. Please enter valid numeric values for sides.');
            return;
        }

        // Check if the sides form a valid triangle
        if (parsedSide1 + parsedSide2 > parsedSide3 && parsedSide2 + parsedSide3 > parsedSide1 && parsedSide1 + parsedSide3 > parsedSide2) {
            const s = (parsedSide1 + parsedSide2 + parsedSide3) / 2;
            const area = Math.sqrt(s * (s - parsedSide1) * (s - parsedSide2) * (s - parsedSide3));
            const cent = area * 0.024716;

            if (!isNaN(cent)) {
                alert(`Area of Triangle is ${cent.toFixed(4)} Cent`);
            } else {
                alert('Invalid input. Please enter valid numeric values for sides.');
            }
        } else {
            alert('Invalid input. The given sides do not form a valid triangle.');
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ImageBackground
                    source={require('./assets/back.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <View style={styles.main}>
                        <View style={styles.container}>
                            <Text style={styles.text}>Triangle Area Calculator</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder="Enter Side 1"
                                    style={styles.input}
                                    value={side1}
                                    onChangeText={(side1) => setSide1(side1)}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.unitText}>m</Text>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder="Enter Side 2"
                                    style={styles.input}
                                    value={side2}
                                    onChangeText={(side2) => setSide2(side2)}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.unitText}>m</Text>
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder="Enter Side 3"
                                    style={styles.input}
                                    value={side3}
                                    onChangeText={(side3) => setSide3(side3)}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.unitText}>m</Text>
                            </View>
                            <TouchableOpacity activeOpacity={1} style={styles.area} onPress={calArea}>
                                <Text style={{ color: 'black', fontSize: 18, textAlign: 'center', fontWeight: "bold" }}>Calculate Area (m²) </Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.areaCent} onPress={calAreaCent}>
                                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: "bold" }}>Calculate Area (Cent)</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

// const styles = StyleSheet.create({
//     keyboardAvoidingView: {
//         flex: 1,
//     },
//     main: {
//         flex: 1,
//     },
//     container: {
//         alignItems: 'center',
//         marginTop: 130,
//     },
//     text: {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         fontSize: 25,
//         color: 'black',
//     },
//     inputContainer: {
//         alignItems: 'center',
//         marginTop: 130,
//     },
//     inputWrapper: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     input: {
//         borderWidth: 2,
//         borderColor: 'black',
//         margin: 10,
//         padding: 10,
//         width: 310, // Adjust width to accommodate the unit text
//         height: 50,
//         borderRadius: 10,
//         backgroundColor: 'white',
//         color: 'black',
//     },
//     unitText: {
//         color: 'black',
//         fontSize: 19,
//     },
//     area: {
//         marginTop: 20,
//         width: 180,
//         height: 50,
//         padding: 10,
//         borderRadius: 20,
//         backgroundColor: '#98f48c',
//         justifyContent: 'center',
//         elevation: 10,
//     },
//     areaCent: {
//         marginTop: 30,
//         width: 160,
//         height: 50,
//         borderRadius: 20,
//         backgroundColor: 'rgb(254, 19, 19)',
//         justifyContent: 'center',
//         elevation: 10,
//     },
// });

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        marginTop: windowHeight * 0.1,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: windowWidth * 0.08,
        color: 'black',
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: windowHeight * 0.1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        margin: windowWidth * 0.02,
        padding: windowWidth * 0.03,
        width: windowWidth * 0.8,
        height: windowHeight * 0.07,
        borderRadius: windowWidth * 0.02,
        backgroundColor: 'white',
        color: 'black',
    },
    unitText: {
        color: 'black',
        fontSize: windowWidth * 0.05,
    },
    area: {
        marginTop: windowHeight * 0.03,
        width: windowWidth * 0.45,
        height: windowHeight * 0.07,
        borderRadius: windowWidth * 0.05,
        backgroundColor: '#98f48c',
        justifyContent: 'center',
        elevation: 10,
    },
    areaCent: {
        marginTop: windowHeight * 0.04,
        width: windowWidth * 0.4,
        height: windowHeight * 0.08,
        borderRadius: windowWidth * 0.05,
        backgroundColor: 'rgb(254, 19, 19)',
        justifyContent: 'center',
        elevation: 10,
    },
});

export default App;
