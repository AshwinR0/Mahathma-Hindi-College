import React from "react";
import type { ComponentProps } from "react";

const Spinner: React.FC<ComponentProps<"div">> = ({ className, ...props }) => {
    return (
        <div className={`spinner w-full h-full flex items-center justify-center ${className}`} {...props}>
            <div className="border-4 border-dashed border-blue-500 rounded-full animate-spin w-10 h-10" />
        </div>
    );
};

export default Spinner;