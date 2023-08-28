const Footer = () => {
    const footerStyle = {
        backgroundColor:'black',
        dislay: 'flex',
        marginTop:'20%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: '600',
        padding: '40px',
        textAlign: 'center'
    }
    return ( 
        <div style={footerStyle}>
            <p>&copy; 2023 , App Name | Manoj Jayaraman</p>
        </div>
     );
}
 
export default Footer;