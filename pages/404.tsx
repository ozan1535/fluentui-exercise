import Link from "next/link";

const ErrorPage: NextPage = () => {

    return (
        <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
            <h1>Whoopss There is something wrong</h1>
            <Link href="/" style={{color: "blue"}}>Go Back to Home</Link>
        </div>
    )

}

export default ErrorPage;

ErrorPage.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}