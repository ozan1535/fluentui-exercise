import { Label, ILabelProps } from '@fluentui/react/lib/Label';
import { TextField, MaskedTextField, ITextFieldProps } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: "100%", height: "82vh", display: "flex", justifyContent: "center", alignItems: "center" } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

const textProps: ITextFieldProps = {
    borderless: true,
    multiline: true
}

const Contact = () => {

    return (
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <TextField label="Your Name" />
                <TextField label="Disabled" disabled defaultValue="Don't touch me" />
                <TextField label="Email" defaultValue="Email" />
                <TextField label="Message " required {...textProps} />
                <TextField label="With error message" errorMessage="Error message" />
            </Stack>
        </Stack>
    );
}

export default Contact;

Contact.getLayout = function PageLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}