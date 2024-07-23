import { useState } from "react"

export const useStorageListener = (synchronize) => {

    const [storageChange, setStorageChange] = useState(false);

        window.addEventListener("storage", (change) => {
            if (change.key === "TODOS_V1") {

                console.log("Hubo cambios en TODOS_V1");
                setStorageChange(true);

            }
        })

        const toggleShow = () => {
            setStorageChange(false);
            synchronize()
        }

        return{

            show: storageChange,
            toggleShow
}
    }

