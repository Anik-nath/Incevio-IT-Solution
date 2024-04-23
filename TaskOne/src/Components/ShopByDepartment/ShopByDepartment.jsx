import dept1 from '../../assets/Department/dept (11).png';
import dept2 from '../../assets/Department/dept (9).png';
import dept3 from '../../assets/Department/dept (3).png';
import dept4 from '../../assets/Department/dept (7).png';
import dept5 from '../../assets/Department/dept (2).png';
import dept6 from '../../assets/Department/dept (12).png';
import dept7 from '../../assets/Department/dept (5).png';
import dept8 from '../../assets/Department/dept (1).png';
import dept9 from '../../assets/Department/dept (8).png';
import dept10 from '../../assets/Department/dept (10).png';
import dept11 from '../../assets/Department/dept (6).png';
import dept12 from '../../assets/Department/dept (4).png';

const ShopByDepartment = () => {
    const departments = [
        {title:'Food',image: dept1},
        {title:'Interior',image: dept2},
        {title:'Art',image: dept3},
        {title:'Plant',image: dept4},
        {title:'Colorful',image: dept5},
        {title:'Architecture',image: dept6},
        {title:'Minimal',image: dept7},
        {title:'Technology',image: dept8},
        {title:'Animal',image: dept9},
        {title:'Nature',image: dept10},
        {title:'Texture',image: dept11},
        {title:'Portrait',image: dept12},
    ]
    return (
        <div className="px-side-padding pb-6">
            <div>
                <h4 className="text-h4 font-medium">Shop By Department</h4>
            </div>
            <div className="grid grid-cols-6 gap-6 py-4">
               {
                departments.map(item => 
                <div key={item.image} className="flex flex-col justify-center items-center">
                    <img className='w-3/4' src={item.image} alt="" />
                    <div><p className='text-p3 pt-2'>{item.title}</p></div>
                </div>
                )
               }
            </div>
        </div>
    );
};

export default ShopByDepartment;