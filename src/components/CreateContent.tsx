
export function CreateContent({open, onClose}){

    return <div>
    
        {open && <div className="w-screen h-screen bg-slate-600 fixed top-0 left-0 opacity-80 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    hi there
                </span>
            </div>
        </div>}
    </div>

}