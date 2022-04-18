import Link from "next/link";

const ErrorPage = () => {

    return (
        <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
            <h1>Whoopss There is something wrong</h1>
            <Link href="/">Go Back to Home</Link>
        </div>
    )

}

export default ErrorPage;

ErrorPage.getLayout = function PageLayout(page: JSX.Element) {
    return (
        <>
            {page}
        </>
    )
}