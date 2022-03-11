import 'bootstrap/dist/css/bootstrap.min.css';
import { container } from 'react-bootstrap';
function Education() {
    return (
        <div className="flex-row">
            <h3 className="d-flex ms-5" >Education</h3>
            <ul>
                <li className="ms-5 col-md-10">
                    <container className="d-flex "  >
                        <h6>Master of Science-Data Science Engineering </h6>

                        <h6 className="col-md-8">University of California Riverside, Jan 2021</h6>
                    </container>
                </li>
                <li className="ms-5 col-md-10">
                    <container className="d-flex">
                        <h6>Bachelor of Science- Business Information Systems </h6>
                        <h6 className="col-md-8">University of California Riverside, Mar 2019</h6>
                    </container>
                </li>

                <li className="ms-5 col-md-10">
                    <container className="d-flex">
                        <h6>Full Stack Web Development Certificate </h6>
                        <h6 className="col-md-8">University of California Berkeley, Oct 2021</h6>
                    </container>
                </li>

            </ul>
        </div>

    );
}

export default Education;