import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import "./CreatePostModel.css";


const CreatePostModel = ({
    onClose, isOpen
}) => {


    const [file, setFile] = useState();
    const [caption, setCaption] = useState();


    const handleDrop = (event) => {
        event.preventDefalult()
        const droppedFile = event.dataTransfer.file[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setFile(droppedFile);
        }
    }

    const [IsDragOver, setIsDragOver] = useState(false);


    const handleDraOver = (event) => {
        event.preventDefalult();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = () => {
        setIsDragOver(false);
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        } else {
            setFile(null);
            alert("please select an image or video");
        }
    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    }


    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>Create New Post</p>
                        <Button className='' variant={"ghost"} size='sm' colorScheme={'blue'}>
                            Share
                        </Button>
                    </div>

                    <hr />
                    <ModalBody>
                        <div className='h-[70vh] justify-between pb-5 flex'>
                            <div className='w-[50%]'>
                                {!file && <div
                                    onDrop={handleDrop}
                                    onDrag={handleDraOver}
                                    onDragLeave={handleDragLeave}

                                    className='drag-drop h-full'
                                >
                                    <div>
                                        <FaPhotoVideo className='text-3xl' />
                                        <p>Drag Photos or Videos here</p>
                                    </div>
                                    <label htmlFor='file-upload' className='custom-file-upload'>Select From Computer</label>

                                    <input className='fileInput' type='file' id='file-upload' accept='image/*,video/*' onChange={handleOnChange} />
                                </div>}

                                {file && <img src={URL.createObjectURL(file)} alt='' />}
                            </div>
                            <div className='w-[1px] border-2 h-full'> </div>
                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className='w-7 h-7 rounded-full' src='https://s3.amazonaws.com/im-my-docs/EnquiryAttachment/IJ/IG/SN/MY-2960011/1-sugarcane-harvester-1578026250205-png.png' alt='' />
                                    <p className='font-semibold ml-4'>Ashwatej</p>
                                </div>
                                <div className='px-2'>
                                    <textarea placeholder='write caption...' className='captionInput' rows='8' onChange={handleCaptionChange}></textarea>
                                </div>

                                <hr />
                                <div className='p-2 flex justify-between items-center'>
                                    <input className='locationInput' type='text' placeholder='location ' name='location' />
                                    <GoLocation />
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModel