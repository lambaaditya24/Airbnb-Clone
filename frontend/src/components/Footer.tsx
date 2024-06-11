const Footer = () => {

    return (
        <div className="bg-blue-800 py-10 px-8">
            <div className="contianer mx-auto flex justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-light">
                    MernHolidays.com
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </div>
    );
};

export default Footer;