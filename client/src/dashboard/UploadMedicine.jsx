import { useContext, useState, useRef } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { BASE_URL } from '../config';
import toast from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext';
import UploadMed from '../assets/uploadMedicine.png'
import uploadToCloudinary from '../utils/uploadToCloudinary';


function UploadMedicine() {
    const [medicineData, setMedicineData] = useState({
        medImg: '',
        brandName: '',
        genericName: '',
        dosageForm: '',
        strength: '',
        batchNumber: '',
        expiryDate: '',
        manufacturingDate: '',
        storageInstructions: '',
        price: '',
        directionsForUse: '',
        warningsAndPrecautions: '',
        contraindications: '',
        ingredients: [],
        manufacturer: {
            name: '',
            address: '',
        },
        registrationNumber: '',
        barcode: '',
    });

    const { token } = useContext(AuthContext);

    const handleChange = (field, value) => {
        setMedicineData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    let blogBannerRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Add code to send medicineData to the server (backend).

        try {
            const res = await fetch(`${BASE_URL}/medicines/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(medicineData),
            });

            const { message } = await res.json();

            if (!res.ok) {
                throw new Error(message);
            }

            toast.success("Medicine Added Successfully");
            setMedicineData({
                medImg: '',
                brandName: '',
                genericName: '',
                dosageForm: '',
                strength: '',
                batchNumber: '',
                expiryDate: '',
                manufacturingDate: '',
                storageInstructions: '',
                price: '',
                directionsForUse: '',
                warningsAndPrecautions: '',
                contraindications: '',
                ingredients: [],
                manufacturer: {
                    name: '',
                    address: '',
                },
                registrationNumber: '',
                barcode: '',
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleBannerUpload = async (e) => {
        let toastLoading = toast.loading('Uploading Medicine...');
        try {
            const file = e.target.files[0];
            const data = await uploadToCloudinary(file);

            if (data) {
                toast.dismiss(toastLoading);
                setMedicineData(prevData => ({
                    ...prevData,
                    medImg: data.secure_url,
                }))

                toast.success('Uploaded👍');
                blogBannerRef.current.src = data.secure_url;
            }

            console.log(data);
        } catch (error) {
            toast.error(error.message);
        }

    }

    return (
        <Card color="transparent" className='w-full' shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Upload Medicine
            </Typography>
            <form className="mt-8 mb-2" onSubmit={handleSubmit}>
                <div className="flex flex-wrap  w-full " >
                    <label htmlFor="uploadBanner" className='flex'>
                        <div className='mx-10'>
                            <Typography variant="h6" color="blue-gray" className="rounded-full p-2 text-center bg-black text-white w-[20vw]">
                                Upload Image
                            </Typography>
                        </div>
                        <img src={UploadMed} ref={blogBannerRef} alt="" className='object-cover z-20 w-60' />
                        <input
                            id='uploadBanner'
                            type='file'
                            accept='.png,.jpeg,.jpg'
                            hidden
                            onChange={handleBannerUpload}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                    </label>
                </div>

                <div className="flex flex-wrap mx-4 w-[67vw] mt-8">
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Brand Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter brand name"
                                value={medicineData.brandName}
                                onChange={(e) => handleChange('brandName', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        {/* Add more input fields for other medicine properties */}
                    </div>

                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Generic Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter generic name"
                                value={medicineData.genericName}
                                onChange={(e) => handleChange('genericName', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        {/* Add more input fields for other medicine properties */}
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Dosage Form
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter dosage form"
                                value={medicineData.dosageForm}
                                onChange={(e) => handleChange('dosageForm', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        {/* Add more input fields for other medicine properties */}
                    </div>

                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Strength
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter strength"
                                value={medicineData.strength}
                                onChange={(e) => handleChange('strength', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        {/* Add more input fields for other medicine properties */}
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Batch Number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter batch number"
                                value={medicineData.batchNumber}
                                onChange={(e) => handleChange('batchNumber', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>

                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Expiry Date
                            </Typography>
                            <Input
                                size="lg"
                                type="date"  // Using the date type for date input
                                value={medicineData.expiryDate}
                                onChange={(e) => handleChange('expiryDate', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Manufacturing Date
                            </Typography>
                            <Input
                                size="lg"
                                type="date"  // Using the date type for date input
                                value={medicineData.manufacturingDate}
                                onChange={(e) => handleChange('manufacturingDate', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Price
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter the price"
                                value={medicineData.price}
                                onChange={(e) => handleChange('price', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Directions for Use
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter directions for use"
                                value={medicineData.directionsForUse}
                                onChange={(e) => handleChange('directionsForUse', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Storage Instructions
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter storage instructions"
                                value={medicineData.storageInstructions}
                                onChange={(e) => handleChange('storageInstructions', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Warnings and Precautions
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter warnings and precautions"
                                value={medicineData.warningsAndPrecautions}
                                onChange={(e) => handleChange('warningsAndPrecautions', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Contraindications
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter contraindications"
                                value={medicineData.contraindications}
                                onChange={(e) => handleChange('contraindications', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Manufacturer Address
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter manufacturer address"
                                value={medicineData.manufacturer.address}
                                onChange={(e) => handleChange('manufacturer', { ...medicineData.manufacturer, address: e.target.value })}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Ingredients
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter ingredients (comma-separated)"
                                value={medicineData.ingredients.join(', ')}
                                onChange={(e) => handleChange('ingredients', e.target.value.split(',').map(item => item.trim()))}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Registration Number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter registration number"
                                value={medicineData.registrationNumber}
                                onChange={(e) => handleChange('registrationNumber', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-4 px-4 w-full sm:w-1/2">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Barcode
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Enter barcode"
                                value={medicineData.barcode}
                                onChange={(e) => handleChange('barcode', e.target.value)}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>

                    {/* Repeat the pattern for additional rows */}
                </div>

                {/* Add more input fields for other medicine properties as needed */}

                <div className='mt-6 w-[80%] m-auto flex'>
                    <Button type="submit" className=" bg-black text-white" fullWidth>
                        Upload Medicine
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default UploadMedicine;
