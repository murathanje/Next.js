import '@styles/globals.css';
import Nav from '@components/Nav';
// import Provider from '@components/Provider';


export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='tr'>
        <body>
            <div className="main">
                <div className="gradient"></div>
                <div className="app">
                    <Nav />
                    {children}
                </div>
            </div>
        </body> 
    </html>
  )
}

export default RootLayout