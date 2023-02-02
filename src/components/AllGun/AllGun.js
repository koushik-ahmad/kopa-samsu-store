import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);

    console.log(guns);
    // const datas = async () => {
    //     const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
    //     const data = await res.json();
    //     setGuns(data);
    // }

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
        // datas();
    }, []);

    return (
        <div className='mt-5'>
            <div className='my-5'>
                <h1 className='text-center text-4xl font-bold mt-4'>
                    Welcome to Kopa Samsu Store</h1>
                <p className='text-center w-2/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolor eaque deserunt quis? Aliquam sapiente labore quia ipsa placeat, odit debitis voluptatum sint sequi atque.</p>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map((gun) => <SingleGun
                        gun={gun}
                        countIncrease={countIncrease}
                    ></SingleGun>)
                }
            </div >
        </div>
    );
};

export default AllGun;