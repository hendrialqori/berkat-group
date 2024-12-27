import React from "react";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Modal from "#/components/modal/modal";
import Input from "#/components/ui/input";
import Button from "#/components/ui/button";
import { type Employee } from "./table-berkat";

interface Props {
    employee: Employee
    isOpen: boolean;
    onClose: () => void
}

const scheme = z.object({

    id: z.string().min(1, { message: "Required" }),
    nama: z.string().min(1, { message: "Required" }),
    jabatan: z.string().min(1, { message: "Required" }),
    gaji_pokok: z.string().min(1, { message: "Required" }),
    tunj_jabatan: z.string().min(1, { message: "Required" }),
    tunj_transport: z.string().min(1, { message: "Required" }),
    uang_makan: z.string().min(1, { message: "Required" }),
    uang_makan_lembur: z.string().min(1, { message: "Required" }),
    uang_makan_luar_kota: z.string().min(1, { message: "Required" }),
    uang_pulsa: z.string().min(1, { message: "Required" }),
    tunj_jht: z.string().min(1, { message: "Required" }),
    tunj_jkk: z.string().min(1, { message: "Required" }),
    tunj_jkm: z.string().min(1, { message: "Required" }),
    insetif_gudang: z.string().min(1, { message: "Required" })
})


type Form = z.infer<typeof scheme>


export default function ModalForm({ isOpen, employee, onClose }: Props) {
    const { register, handleSubmit: submit, formState: { errors }, setValue, reset } = useForm<Form>({
        resolver: zodResolver(scheme)
    })


    React.useEffect(() => {
        if (employee) {
            setValue("id", "2")
            setValue("nama", employee.nama_pegawai)
            setValue("jabatan", employee.nama_jabatan)
            setValue("gaji_pokok", employee.gaji_pokok.toString())
            setValue("tunj_transport", employee.tunj_transport_per_hari.toString())
            setValue("uang_makan", employee.uang_makan_lembur_per_hari.toString())
            setValue("uang_makan_lembur", employee.uang_makan_lembur_per_hari.toString())
            setValue("uang_makan_luar_kota", employee.uang_makan_luar_kota.toString())
            setValue("uang_pulsa", employee.uang_pulsa.toString())
            setValue("tunj_jht", employee.tunj_jht.toString())
            setValue("tunj_jkk", employee.tunj_jkk.toString())
            setValue("tunj_jkm", employee.tunj_jkm.toString())
            setValue("insetif_gudang", employee.insen_gudang.toString())
        }
    }, [employee, isOpen])

    const handleSubmit = submit(() => {})

    const clearState = () => {
        reset()
        onClose()
    }

    return (
        <Modal isOpen={isOpen}>
            <Modal.Body className="w-[420px] space-y-10">
                <Modal.Header>
                    <Modal.Title>Form Perubahan Komponen Gaji</Modal.Title>
                    <Modal.Close onClick={clearState}
                    />
                </Modal.Header>
                <Modal.Content>
                    <form className="space-y-4 " onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">ID Pegawai</label>
                            <Input  {...register("id")} type="number" disabled />
                            {errors.id && <span className="text-red-500 text-xs font-medium">{errors.id.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Nama Pegawai</label>
                            <Input  {...register("nama")} disabled />
                            {errors.nama && <span className="text-red-500 text-xs font-medium">{errors.nama.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Nama Jabatan</label>
                            <Input  {...register("jabatan")} disabled />
                            {errors.jabatan && <span className="text-red-500 text-xs font-medium">{errors.jabatan.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Gaji Pokok</label>
                            <Input  {...register("gaji_pokok")} type="number" />
                            {errors.gaji_pokok && <span className="text-red-500 text-xs font-medium">{errors.gaji_pokok.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Tunj. Transport/Hari</label>
                            <Input  {...register("tunj_transport")} type="number" />
                            {errors.tunj_transport && <span className="text-red-500 text-xs font-medium">{errors.tunj_transport.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Uang Makan/Hari</label>
                            <Input  {...register("uang_makan")} type="number" />
                            {errors.uang_makan && <span className="text-red-500 text-xs font-medium">{errors.uang_makan.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Uang Makan Lembur/Hari</label>
                            <Input  {...register("uang_makan_lembur")} type="number" />
                            {errors.uang_makan_lembur && <span className="text-red-500 text-xs font-medium">{errors.uang_makan_lembur.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Uang Makan Luar Kota</label>
                            <Input  {...register("uang_makan_luar_kota")} type="number" />
                            {errors.uang_makan_luar_kota && <span className="text-red-500 text-xs font-medium">{errors.uang_makan_luar_kota.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Uang Pulsa</label>
                            <Input  {...register("uang_pulsa")} type="number" />
                            {errors.uang_pulsa && <span className="text-red-500 text-xs font-medium">{errors.uang_pulsa.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Tunj. JHT</label>
                            <Input  {...register("tunj_jht")} type="number" />
                            {errors.tunj_jht && <span className="text-red-500 text-xs font-medium">{errors.tunj_jht.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Tunj. JKK</label>
                            <Input  {...register("tunj_jkk")} type="number" />
                            {errors.tunj_jkk && <span className="text-red-500 text-xs font-medium">{errors.tunj_jkk.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Tunj. JKM</label>
                            <Input  {...register("tunj_jkm")} type="number" />
                            {errors.tunj_jkm && <span className="text-red-500 text-xs font-medium">{errors.tunj_jkm.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Insentif Gudang</label>
                            <Input  {...register("insetif_gudang")} type="number" />
                            {errors.insetif_gudang && <span className="text-red-500 text-xs font-medium">{errors.insetif_gudang.message}</span>}
                        </div>
                        <Button
                            className="ml-auto mr-0 grid place-items-center"
                        >
                            Simpan
                        </Button>
                    </form>
                </Modal.Content>
            </Modal.Body>
        </Modal >
    )
}
