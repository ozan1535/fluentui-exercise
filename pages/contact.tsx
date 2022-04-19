import { Label, ILabelProps } from '@fluentui/react/lib/Label';
import { TextField, MaskedTextField, ITextFieldProps } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string | number>('');
    const [id, setId] = useState<string | number>('');

    const submitComment = async () => {
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({ name, email, phone, id }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
    }

    return (
        <div>
            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                <Stack {...columnProps}>
                    <TextField type='text' label="id" value={id} onChange={e => setId(e.target.value)} required placeholder='1' />
                    <TextField type='text' label="Name" value={name} onChange={e => setName(e.target.value)} required placeholder='john' />
                    <TextField type='email' label="Email" value={email} onChange={e => setEmail(e.target.value)} required placeholder='johndoe@gmail.com' />
                    <TextField type="phone" label="Phone" value={phone} onChange={e => setPhone(e.target.value)} required placeholder='123456789' />
                    <DefaultButton text="Submit" onClick={submitComment} />
                    <Link href='/user'><DefaultButton text="Go to User Page" /></Link>
                </Stack>
                
            </Stack>

        </div>
    );
}

export default Contact;

Contact.getLayout = function PageLayout(page: JSX.Element) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}