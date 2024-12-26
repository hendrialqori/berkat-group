import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import dayjs from "dayjs"
import Input from "#/components/ui/input";
import Textarea from "#/components/ui/textarea";

import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Map } from "leaflet";
import { CgSpinner } from "react-icons/cg";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import Camera from "./camera";

const schema = z.object({
    identity_number: z.string().min(1, { message: "Nomor identitas diperlukan" }),
    longitude: z.number().nonnegative(),
    latitude: z.number().nonnegative(),
    clock_in: z.string().min(1, { message: "Jam masuk diperlukan" }),
    photo: z.any()
        .refine((file: File) => file.name, "Required")
        .transform((file: File) => file).optional(),
    address: z.string().min(1, { message: "Alamat diperlukan" })
})

type Form = z.infer<typeof schema>

export default function Form() {
    const { register, handleSubmit: submit, formState: { errors }, setValue, watch } = useForm<Form>({
        resolver: zodResolver(schema)
    })

    console.log(
       `${dayjs().format("DD MM YYYY")} ${dayjs().format("HH:mm")}`
    )

    const [coordinate, setCoordinate] = React.useState<LatLngExpression>([51.505, -0.09])
    const [loadingMap, setLoadingMap] = React.useState(false)

    const [showCamera, setShowCamera] = React.useState(false)

    const mapRef = React.useRef<Map | null>(null)

    const moveToLocation = () => {
        // set loading fot tracking coordinate
        setLoadingMap(true)
        // setup geolocation API
        const geoApi = navigator.geolocation;
        // businesse login geolocation
        if (geoApi) {
            geoApi.getCurrentPosition(({ coords: { longitude, latitude } }) => {
                // move view map into target and zoomit!
                mapRef.current?.setView([latitude, longitude], 20)
                // set coordinate state
                setCoordinate([latitude, longitude])

                setValue("longitude", longitude)
                setValue("latitude", latitude)
                // set loading is false
                setLoadingMap(false)
            })
        }
    }

    const handleSavePhoto = (file: File | null) => {
        setValue("photo", file as File)
        setShowCamera(false)
    }

    const photo = watch("photo") as File
    const handleOpenCamera = () => setShowCamera(true)
    const handleCloseCamera = () => setShowCamera(false)


    const handleSubmit = submit(() => { })

    const icon = L.icon({
        iconUrl: "/marker-icon.png",
        iconAnchor: [12, 39],
        popupAnchor: [0, -30],
        iconSize: [25, 40],
    })



    return (
        <React.Fragment>
            <div className="py-6 font-medium space-y-3">
                <div className="space-y-1 text-left">
                    <label htmlFor="identity_number" className="text-[0.7rem] text-gray-600">Nomor identitas (KTP)</label>
                    <Input
                        id="identity_number"
                        placeholder="Masukan no. ktp anda"
                        {...register("identity_number")}
                        type="number"
                    />
                    {errors.identity_number && <span className="text-red-500 text-xs font-medium">{errors.identity_number.message}</span>}
                </div>
                <div className="space-y-2 text-left">
                    <label className="text-[0.7rem] text-gray-600">Track lokasi</label>
                    <div className="relative size-auto">
                        <MapContainer ref={mapRef} center={coordinate} zoom={4} scrollWheelZoom={false}>
                            <TileLayer
                                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={coordinate} icon={icon}>
                                <Popup>
                                    Kamu disini!
                                </Popup>
                            </Marker>
                        </MapContainer>
                        {loadingMap && (
                            <div className="absolute inset-0 bg-black/50 z-[1000] rounded-md flex items-center justify-center">
                                <div className="flex justify-center items-center gap-2 text-white">
                                    <CgSpinner className="text-lg animate-spin" />
                                    <span className="font-medium text-xs">Melacak lokasi anda...</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className=" text-xs bg-black text-white rounded-md h-8 px-3 w-full" onClick={moveToLocation} type="button">
                        Lacak lokasi
                    </button>
                </div>
                <div className="space-y-1 text-left">
                    <label htmlFor="address" className="text-[0.7rem] text-gray-600">Foto</label>
                    <PhotoPreview file={photo} />
                    <button className=" text-xs bg-black text-white rounded-md h-8 px-3 w-full" onClick={handleOpenCamera} type="button">
                        {photo ? "Lihat foto" : "Ambil foto"}
                    </button>
                </div>
                <div className="space-y-1 text-left">
                    <label htmlFor="address" className="text-[0.7rem] text-gray-600">Alamat</label>
                    <Textarea id="address" placeholder="Masukan alamat" rows={5} {...register("address")} />
                    {errors.address && <span className="text-red-500 text-xs font-medium">{errors.address.message}</span>}
                </div>
                <button className="text-center text-xs bg-green-500 text-white rounded-md h-10 w-full" onClick={handleSubmit} type="submit">
                    Absen masuk
                </button>
            </div>
            <Camera
                isShow={showCamera}
                onSave={handleSavePhoto}
                onClose={handleCloseCamera}
            />
        </React.Fragment>
    )
}

const PhotoPreview = ({ file }: { file: File }) => {
    return (
        <div className="w-full h-[200px] rounded-md bg-gray-100">
            {file ?
                <img src={URL.createObjectURL(file)} className="size-full object-cover scale-x-[-1]" alt="photo-preview" />
                :
                <div className="size-full grid place-items-center">
                    <MdOutlinePhotoCameraFront className="text-5xl" />
                </div>
            }
        </div>
    )
}