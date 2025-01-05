import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
   const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">Headline Large</Text>
                    <Divider />
                    <Text variant="bodyMedium" style={styles.body}>
                        Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                        Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
                        Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
                        Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.

                        Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                        To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
                        Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
                        Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
                        Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.

                    </Text>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('contact')}>
                        Contact Us
                    </Button>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('aboutus')}>
                        About Us
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    body: {
        padding: 8,
        textAlign: 'justify'
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
});