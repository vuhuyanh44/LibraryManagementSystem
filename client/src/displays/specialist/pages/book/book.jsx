import './book.css'
import Sidebar from "../sidebar/sidebar";
import Navbar from '../../../../components/navbar/navbar';

export default function Book() {
    return(
        <div className="products">
        <Sidebar />
        <div className="wrapper">
          <Navbar/>
        </div>
      </div>
    );
}