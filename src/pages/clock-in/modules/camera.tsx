import React from "react";
import { createPortal } from "react-dom";
import { Camera as C, CameraType } from "react-camera-pro"
import { AnimatePresence, motion } from "framer-motion"

import { AiOutlineCamera } from "react-icons/ai";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuFlashlight } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { base64ToFile } from "#/constant/base64-to-file";

interface Props {
    isShow: boolean;
    onSave: (file: File | null) => void;
    onClose: () => void;
}

export default function Camera(props: Props) {

    const cameraRef = React.useRef<CameraType>(null)
    const [numberOfCameras, setNumberOfCameras] = React.useState(0);
    const [file, setFile] = React.useState<File | null>(null)

    const handleTakePhoto = () => {
        const camera = cameraRef.current
        if (camera) {
            const image = camera.takePhoto("base64url")
            setFile(
                base64ToFile(image as string, "absen-masuk.png")
            )
        }
    }

    const handleSwitchPhone = () => {
        const camera = cameraRef.current
        if (camera) camera.switchCamera()
    }

    const handleTorch = () => {
        const camera = cameraRef.current
        if (camera) camera.toggleTorch()
    }

    const handleSave = () => {
        props.onSave(file)
    }

    return createPortal(
        <AnimatePresence>
            {props.isShow && (
                <motion.div
                    initial={{ x: -400 }} animate={{ x: 0 }} exit={{ x: -400 }} transition={{ bounce: false, duration: 0.5 }}
                    className="fixed inset-0 max-w-[420px] mx-auto z-[1000] bg-white"
                >
                    <div
                        className="fixed flex items-center w-full p-2 top-0 z-10"
                        aria-label="control"
                    >
                        <button className="bg-white rounded-full p-1.5 grid place-items-center" onClick={props.onClose}>
                            <MdArrowBack className="text-xl" />
                        </button>
                    </div>
                    {file ?
                        (<img src={URL.createObjectURL(file)} className="absolute size-full scale-x-[-1] object-cover" alt="preview" />)
                        :
                        (<C
                            ref={cameraRef}
                            numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
                            aspectRatio="cover"
                            facingMode="user"
                            errorMessages={{
                                noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
                                permissionDenied: 'Permission denied. Please refresh and give camera permission.',
                                switchCamera:
                                    'It is not possible to switch camera to different one because there is only one video device accessible.',
                                canvas: 'Canvas is not supported.',
                            }}
                        />)}

                    <div
                        className="fixed flex justify-center items-center gap-10 bg-black/50 w-full h-[120px] bottom-0 px-10 max-w-[420px] mx-auto"
                        aria-label="control"
                    >
                        {file ? (
                            <React.Fragment>
                                <button className="bg-green-500 text-white rounded-full size-10 grid place-items-center" onClick={handleSave}>
                                    <MdCheck className="text-2xl" />
                                </button>
                                <button className="bg-white rounded-full size-10 grid place-items-center" onClick={() => setFile(null)}>
                                    <FaArrowsRotate className="text-lg" />
                                </button>
                            </React.Fragment>
                        ) : (<React.Fragment>
                            <button
                                className="bg-white rounded-full size-10 grid place-items-center disabled:bg-white/20"
                                onClick={handleSwitchPhone}
                                disabled={numberOfCameras <= 1}
                                aria-disabled={numberOfCameras <= 1}
                            >
                                <FaArrowsRotate className="text-xl" />
                            </button>
                            <button className="bg-white rounded-full size-14 grid place-items-center" onClick={handleTakePhoto}>
                                <AiOutlineCamera className="text-3xl" />
                            </button>
                            <button
                                className="bg-white rounded-full size-10 grid place-items-center disabled:bg-white/20"
                                onClick={handleTorch}
                                // disabled={!cameraRef.current?.torchSupported ? true : false}
                                // aria-disabled={!cameraRef.current?.torchSupported ? true : false}
                            >
                                <LuFlashlight className="text-xl" />
                            </button>
                        </React.Fragment>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        , document.body)
}