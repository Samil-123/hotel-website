'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { Button, Modal } from 'antd';
import { FaWifi, FaKitchenSet, FaCircle } from "react-icons/fa6";
import { PiTelevisionFill } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import RoomSlider from './RoomSlider';

import Room1Image1 from '../../public/Room1Images/Avio1-1.jpg'
import Room1Image2 from '../../public/Room1Images/Avio1-2.jpg'
import Room1Image3 from '../../public/Room1Images/Avio1-3.jpg'
import Room1Image4 from '../../public/Room1Images/Avio1-4.jpg'
import Room1Image5 from '../../public/Room1Images/Avio1-5.jpg'
import Room1Image6 from '../../public/Room1Images/Avio1-6.jpg'
import Room1Image7 from '../../public/Room1Images/Avio1-7.jpg'

import Room2Image1 from '../../public/Room2Images/Avio2-1.jpg'
import Room2Image2 from '../../public/Room2Images/Avio2-2.jpg'
import Room2Image3 from '../../public/Room2Images/Avio2-3.jpg'
import Room2Image4 from '../../public/Room2Images/Avio2-4.jpg'
import Room2Image5 from '../../public/Room2Images/Avio2-5.jpg'


import Room3Image1 from '../../public/Room3Images/Avio3-1.jpg'
import Room3Image2 from '../../public/Room3Images/Avio3-2.jpg'
import Room3Image3 from '../../public/Room3Images/Avio3-3.jpg'
import Room3Image4 from '../../public/Room3Images/Avio3-4.jpg'
import Room3Image5 from '../../public/Room3Images/Avio3-5.jpg'
import Room3Image6 from '../../public/Room3Images/Avio3-6.jpg'
import Room3Image7 from '../../public/Room3Images/Avio3-7.jpg'
import Room3Image8 from '../../public/Room3Images/Avio3-8.jpg'

import Room4Image1 from '../../public/Room4Images/Avio4-1.jpg'
import Room4Image2 from '../../public/Room4Images/Avio4-2.jpg'
import Room4Image3 from '../../public/Room4Images/Avio4-3.jpg'
import Room4Image4 from '../../public/Room4Images/Avio4-4.jpg'
import Room4Image5 from '../../public/Room4Images/Avio4-5.jpg'
import Room4Image6 from '../../public/Room4Images/Avio4-6.jpg'


import Room5Image1 from '../../public/Room5Images/Avio5-1.jpg'
import Room5Image2 from '../../public/Room5Images/Avio5-2.jpg'
import Room5Image3 from '../../public/Room5Images/Avio5-3.jpg'
import Room5Image4 from '../../public/Room5Images/Avio5-4.jpg'
import Room5Image5 from '../../public/Room5Images/Avio5-5.jpg'
import Room5Image6 from '../../public/Room5Images/Avio5-6.jpg'

import Room6Image1 from '../../public/Room6Images/Avio6-1.jpg'
import Room6Image2 from '../../public/Room6Images/Avio6-2.jpg'
import Room6Image3 from '../../public/Room6Images/Avio6-3.jpg'
import Room6Image4 from '../../public/Room6Images/Avio6-4.jpg'
import Room6Image5 from '../../public/Room6Images/Avio6-5.jpg'

import Room32Image1 from '../../public/Room32Images/Avio32-1.jpg'
import Room32Image2 from '../../public/Room32Images/Avio32-2.jpg'
import Room32Image3 from '../../public/Room32Images/Avio32-3.jpg'
import Room32Image4 from '../../public/Room32Images/Avio32-4.jpg'
import Room32Image5 from '../../public/Room32Images/Avio32-5.jpg'
import Room32Image6 from '../../public/Room32Images/Avio32-6.jpg'
import Room32Image7 from '../../public/Room32Images/Avio32-7.jpg'
import Room32Image8 from '../../public/Room32Images/Avio32-8.jpg'
import Room32Image9 from '../../public/Room32Images/Avio32-9.jpg'
import Room32Image10 from '../../public/Room32Images/Avio32-10.jpg'


import Room28Image1 from '../../public/Room28Images/Avio28-1.jpg'
import Room28Image2 from '../../public/Room28Images/Avio28-2.jpg'
import Room28Image3 from '../../public/Room28Images/Avio28-3.jpg'
import Room28Image4 from '../../public/Room28Images/Avio28-4.jpg'
import Room28Image5 from '../../public/Room28Images/Avio28-5.jpg'
import Room28Image6 from '../../public/Room28Images/Avio28-6.jpg'
import Room28Image7 from '../../public/Room28Images/Avio28-7.jpg'
import Room28Image8 from '../../public/Room28Images/Avio28-8.jpg'
import Room28Image9 from '../../public/Room28Images/Avio28-9.jpg'
import Room28Image10 from '../../public/Room28Images/Avio28-10.jpg'
import Room28Image11 from '../../public/Room28Images/Avio28-11.jpg'
import Room28Image12 from '../../public/Room28Images/Avio28-12.jpg'



function Rooms() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const showModal = (product) => {
        setSelectedProduct(product);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedProduct(null);
    };

    const productArray = [
        {
            id: '1',
            Title: 'Avio 1',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room1Image3,
            images: [Room1Image1, Room1Image2, Room1Image3, Room1Image4, Room1Image5, Room1Image6, Room1Image7],
        },
        {
            id: '2',
            Title: 'Avio 2',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room2Image1,
            images: [Room2Image1, Room2Image2, Room2Image3, Room2Image4, Room2Image5],
        },
        {
            id: '3',
            Title: 'Avio 3',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room3Image1,
            images: [Room3Image1, Room3Image2, Room3Image3, Room3Image4, Room3Image5, Room3Image6, Room3Image7, Room3Image8],
        },
        {
            id: '4',
            Title: 'Avio 4',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room4Image2,
            images: [Room4Image1, Room4Image2, Room4Image3, Room4Image4, Room4Image5, Room4Image6],
        },
        {
            id: '5',
            Title: 'Avio 5',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room5Image3,
            images: [Room5Image1, Room5Image2, Room5Image3, Room5Image4, Room5Image5, Room5Image6],
        },
        {
            id: '6',
            Title: 'Avio 6',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room6Image1,
            images: [Room6Image1, Room6Image2, Room6Image3, Room6Image4, Room6Image5],
        },
        {
            id: '32',
            Title: 'Avio Lux 32',
            //Description: "124 High St, Peterborough PE2 8DP",
            //Price: "450",
            //Rating: '5',
            ProductImage: Room32Image2,
            images: [Room32Image1, Room32Image2, Room32Image3, Room32Image4, Room32Image5, Room32Image6, Room32Image7, Room32Image8, Room32Image9, Room32Image10],
        },
        {
            id: '32',
            Title: 'Avio Lux 28',
           // Description: "124 High St, Peterborough PE2 8DP",
           // Price: "450",
           // Rating: '5',
            ProductImage: Room28Image1,
            images: [Room28Image1, Room28Image2, Room28Image3, Room28Image4, Room28Image5, Room28Image6, Room28Image7, Room28Image8, Room28Image9, Room28Image10, Room28Image11, Room28Image12],
        },
        
         
        
          
        
        
           
        
        // Additional products...
    ];

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-10 gap-y-32 max-lg:gap-y-40 z-10'>
                {productArray.map((item) => (
                    <div onClick={() => showModal(item)} key={item.id} className='relative w-[409px] h-[269px] max-2xl:w-[368.1px] max-2xl:h-[242.1px] max-xl:w-[286.3px] max-xl:h-[188.3px] max-lg:w-[225.0px] max-lg:h-[148.0px] max-md:w-[266.3px] max-md:h-[180.3px] max-sm:w-[90vw] max-sm:h-[269px]'>
                        <Image
                            src={item.ProductImage}
                            width={1000}
                            height={1000}
                            className='w-full h-full object-cover object-center'
                            alt='room image'
                        />
                        <div className='absolute top-4 right-4'>
                            
                        </div>
                        
                            
                            
                        
                        <div className='text-white flex justify-between items-center py-4'>
                            <div className='flex flex-col justify-center items-start'>
                                <h2>{item.Title}</h2>
                                <p className='text-[.9rem]'>{item.Description}</p>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                               
                                <p>{item.Rating}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
                <Modal
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    className="custom-modal"
                    closable={false}
                >
                    {selectedProduct && (
                        <div>
                            <div className='mb-4 h-[300px]'>
                                <RoomSlider images={selectedProduct.images} />
                            </div>
                            <div className='text-[1.2rem] font-semibold mb-2'>
                                <h2>{selectedProduct.Title}</h2>
                            </div>
                            <div className='mb-4 text-[1.1rem]'>
                                <p><span className='font-semibold'></span> </p>
                                <p><span className='font-semibold'></span> </p>
                                <p><span className='font-semibold'></span> </p>
                            </div>
                            <h2 className='text-[1.2rem] font-semibold mb-2'></h2>
                            <div className='flex justify-between items-center mb-4 px-3'>
                                <div className='text-center flex flex-col items-center justify-center'>
                                    <FaWifi className='text-[2rem] text-white' />
                                    <p className='text-white'>Wi-Fi</p>
                                </div>
                                <div className='text-center flex flex-col items-center justify-center'>
                                    <PiTelevisionFill className='text-[2rem] text-white' />
                                    <p className='text-white'>TV</p>
                                </div>
                                <div className='text-center flex flex-col items-center justify-center'>
                                    <TbAirConditioning className='text-[2rem] text-white' />
                                    <p className='text-white'>Klima</p>
                                </div>
                                <div className='text-center flex flex-col items-center justify-center'>
                                    <FaKitchenSet className='text-[2rem] text-white' />
                                    <p className='text-white'>Kuhinja</p>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    )
}

export default Rooms;
