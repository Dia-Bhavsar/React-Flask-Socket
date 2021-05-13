import React, { useState, useEffect } from 'react';
import './BuildModel.css';
import axios from 'axios';

function BuildModel() {
    const [modelName, setModelName] = useState('');
    const [language, setLanguage] = useState('');
    const [version, setversion] = useState('');
    const [file, setFile] = useState(null);
    const [formArray, setFormArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('model', modelName);
        formData.append('language', language);
        formData.append('version', version);
        formData.append('file', file);

        console.log(formData.get('file'))
        axios({
            method: 'POST',
            url: '/model',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => console.log(response))
    }

    return (
        <>
            <h1>Build Model</h1>
            <hr></hr>
            <div className="buildModel">
                <div className="buildModel__left">
                    <h3>Model Form</h3>
                    <div className="buildModel__form">
                        <form onSubmit={handleSubmit}>
                            <div className="buildModel__input">
                                <label>Domain Name:</label>
                                <input type="text" value={modelName} onChange={e => setModelName(e.target.value)} required />
                            </div>
                            <div className="buildModel__input">
                                <label>Language:</label>
                                <input type="text" value={language} onChange={e => setLanguage(e.target.value)} required />
                            </div>
                            <div className="buildModel__input">
                                <label>Version:</label>
                                <input type="text" value={version} onChange={e => setversion(e.target.value)} required />
                            </div>
                            <div className="buildModel__input">
                                <label>File Upload:</label>
                                <input type="file" onChange={e => setFile(e.target.files[0])} required />
                            </div>
                            <button type="submit">Sumbit</button>
                        </form>
                    </div>
                </div>
                <div className="buildModel__right">
                    <div>
                        <h3>Model Log</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuildModel
