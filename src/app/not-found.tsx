"use client";

import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../../public/404.json";

export default function NotFound() {
    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
            <p className="mb-8">
                Désolé, la page que vous recherchez n&apos;existe pas.
            </p>
            <div className="max-w-md mx-auto">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
        </div>
    );
}
