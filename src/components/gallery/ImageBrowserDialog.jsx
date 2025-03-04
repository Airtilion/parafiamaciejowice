
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';

const ImageBrowserDialog = ({ photos, imageBrowserRef, activePhotoID }) => {

    const [actualIndex, setActualIndex] = useState(1)

    const setNewIndex = (mode) => {
        mode === 1 ? actualIndex < photos.length - 1 ? setActualIndex(prev => prev + 1) : setActualIndex(0)
            :
            actualIndex > 0 ? setActualIndex(prev => prev - 1) : setActualIndex(photos.length - 1)
    }

    const closeBrowser = () => {
        imageBrowserRef.current.close()
    }

    useEffect(() => {
        setActualIndex(activePhotoID)
    }, [activePhotoID])

   

    return (
        <dialog ref={imageBrowserRef} className="top-[50%] left-[50%] translate-[-50%] w-[70%] h-[70%] max-2xl:h-[500px] max-xl:w-[90%] max-lg:h-[450px] max-md:h-[350px] max-sm:h-[210px] backdrop:bg-[#000000e4] bg-transparent outline-none border-none overflow-visible">
            <Icon icon="zondicons:close-solid" width="50" height="50" className='fixed right-[-50px] top-[-50px] text-[#c0c0c0] cursor-pointer duration-300 hover:text-[#5A7889] z-30 max-xl:right-[-20px] max-lg:top-[-100px] max-lg:left-[50%] max-lg:right-auto max-lg:translate-x-[-50%]' onClick={closeBrowser} />
            <div className='relative w-full h-full flex justify-center'>
                {photos[actualIndex] !== undefined &&
                    <img width={1080} height={720} src={photos[actualIndex].link} alt="Zdjęcie w przeglądarce" className='w-auto h-full select-none pointer-events-none' />
                }
                <div className='absolute top-[50%] left-[-20px] translate-y-[-50%] text-white cursor-pointer bg-[#5A7889] h-[100px] max-md:h-[70px] rounded-[5px] flex justify-center items-center' onClick={() => setNewIndex(0)}>
                    <Icon icon="ic:round-play-arrow" width="50" height="50" className='rotate-180 max-md:h-[30px] max-md:w-[30px]' />
                </div>
                <div className='absolute top-[50%] right-[-20px] translate-y-[-50%] text-white cursor-pointer bg-[#5A7889] h-[100px] max-md:h-[70px] rounded-[5px] flex justify-center items-center' onClick={() => setNewIndex(1)}>
                    <Icon icon="ic:round-play-arrow" width="50" height="50" className='max-md:h-[30px] max-md:w-[30px]' />
                </div>

                <div className='absolute bottom-[-50px] left-[50%] translate-x-[-50%]'>
                    <p className='text-white'>{actualIndex + 1}/{photos.length}</p>
                </div>
            </div>
        </dialog>
    );
};

export default ImageBrowserDialog;
