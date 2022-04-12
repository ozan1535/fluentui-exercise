import { NextPage } from "next";
import Header from "../components/Header";
import { Image, IImageProps, ImageFit } from '@fluentui/react/lib/Image';
import { Text, ITextProps } from '@fluentui/react/lib/Text';
import styles from "../styles/About.module.css"
import { ThemeProvider, PartialTheme } from '@fluentui/react/lib/Theme';

const textTheme: PartialTheme = {
    semanticColors: {
        bodyBackground: '#3a3737',
        bodyText: 'white',
    },
};

const imageProps: IImageProps = {
    maximizeFrame: true,
    imageFit: ImageFit.cover,
    src: 'photo.jpg',
    // Show a border around the image (just for demonstration purposes)
    styles: props => ({ root: { borderRadius: "5px", border: '1px solid ' + props.theme.palette.neutralSecondary } }),
};

const textProps: ITextProps = {
    block: true,
    variant: "xLarge",
    nowrap: false
}

const About: NextPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <div style={{ width: '350px', height: '400px' }}>
                    <Image {...imageProps} alt="Ozan Bilgiç" />
                </div>
            </div>
            <div className={styles.element}>
                <ThemeProvider theme={textTheme}>
                    <Text {...textProps} >
                        Hey there! I'm Ozan,    <br />
                        I have a passion for web developing, design, coding and data analysis. <br />
                        I'm a self learner of;  <br />
                        - HTML5, CSS3, JavaScript, JQuery, EcmaScript, Bootstrap, Vue.js, PHP, SQL <br />
                        - Adobe Photoshop, Adobe Illustrator, Adobe Animate, Camtasia <br />
                        I like playing basketball, electric guitar and acoustic guitar, video games. I also like hiking, jogging and biking. <br />
                        I graduated from Anadolu University, department of Computer Education and Instructional Technology in 2021 with a GPA of 3.64 / 4.00. <br />
                    </Text>
                </ThemeProvider>
            </div>
        </div>
    )

}

export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
            <Header />
            {page}
        </>
    )
}