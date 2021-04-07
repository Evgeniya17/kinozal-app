import Films from '../films/Films';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

function FilmsPage(){
    return(
        <>
            <Sidebar/>
            <Films/>
            <Footer/>
        </>
    )
}

export default FilmsPage;