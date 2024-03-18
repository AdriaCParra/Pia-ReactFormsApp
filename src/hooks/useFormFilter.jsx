import { useState } from "react";

export const useFormFilter = () => {
	const [newFilter, setNewFilter] = useState("");

    return {
        newFilter,
        setNewFilter
    };
}