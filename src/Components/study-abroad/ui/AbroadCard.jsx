const AbroadCard = ({title, description, image}) => {
    return (
        <div className="max-w-lg bg-white shadow-lg rounded-lg text-center border border-gray-100 py-6">
            <div className="w-full flex items-center justify-center py-5">
                <img src={image} alt="card_image" className="h-24" />
            </div>
            <div className="flex flex-col text-center">
                <span className="text-xl font-semibold mb-2">{title}</span>
                <span className="mb-3 text-md text-gray-700 px-6">
                    {description}
                </span>
            </div>
            <button className="my-3 bg-black text-white rounded-md py-2 px-6 cursor-pointer text-sm font-semibold">Call Now</button>
        </div>
    )
}

export default AbroadCard