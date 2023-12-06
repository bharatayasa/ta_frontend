import React from 'react';
import prosespredict from "../../../assets/img/proses/proses.png"

function DeploymentPage() {
    return (
        <div>
            <div className='bg-gradient-to-br from-red-300 via-yellow-200 to-emerald-400'>
                <div className='container mx-auto min-h-screen'>
                    <div className='items-center'>
                        <img src={prosespredict}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeploymentPage
