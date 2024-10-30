import Navbar from "../components/Navbar";
import ToplistSection from "../components/ToplistSection";

function Toplist(){
    return(
        <>
            <Navbar/>
            <div className='content-wrapper'>
                <ToplistSection/>
            </div>
        </>
    )
}

export default Toplist;