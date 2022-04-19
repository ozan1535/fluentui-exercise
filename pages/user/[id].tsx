import { ThemeProvider, PartialTheme } from '@fluentui/react/lib/Theme';
import Layout from '../../components/Layout';

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api');
    const data = await res.json();

    const paths = data.map(path => {
        return {
            params: { id: path.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id;
    const res = await fetch(`http://localhost:3000/api/${id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }

}

const lightTheme: PartialTheme = {
    semanticColors: {
        bodyBackground: 'rgb(107, 123, 192)',
        bodyText: 'white',
    },
};

const OneUser = ({ data }) => {

    return (
        <div style={{minHeight:"80vh"}}>
            <ThemeProvider key={data.id} style={{ margin: "20px", padding: "20px", width: "250px", height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start" }} theme={lightTheme}>
                <div>Name: {data.name}</div>
                <div>Email: {data.email}</div>
                <div>Phone:  {data.phone}</div>
            </ThemeProvider>
        </div>
    );
}

export default OneUser;

OneUser.getLayout = function PageLayout(page: JSX.Element) {
    return (
      <>
        <Layout>
          {page}
        </Layout>
      </>
    )
  }