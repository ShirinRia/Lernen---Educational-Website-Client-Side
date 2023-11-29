import { Link } from "react-router-dom";
import useAllclass from "../../../../Hooks/useAllclass";
import Classcard from "../../Allclasses/Classcard";



const Featuredcourse = () => {
    const [classes] = useAllclass()
    const length=6
    const sortallclass = [...classes].sort((a, b) =>
    parseInt(a.totalenrollment) < parseInt(b.totalenrollment) ? 1 : -1,
    );
console.log('sortallclass',sortallclass)
    return (
        <div className="max-w-7xl mx-4 lg:mx-auto my-16">
            <div className="text-center">
                <h1 className="font-medium text-xl">Featured Foods</h1>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-6xl mx-auto my-16">
                    {
                        sortallclass.slice(0, length).map(classe => <Classcard key={classe._id}
                            classe={classe}></Classcard>)
                    }
                </div>
                {/* <div className="text-center">
                    <Link to={'/avfood'} className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Show All</Link>
                </div> */}

            </div>
        </div>
    );
};

export default Featuredcourse;