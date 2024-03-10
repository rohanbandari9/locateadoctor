import React, { useState } from "react";
import "./SymptomsInput.css";
import Select from 'react-select';
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
function SymptomsInput() {
    const navigate = useNavigate();
    const closeIcon = () => {
        return (
            <span className="material-symbols-outlined">
                close
            </span>
        );
    }

    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [isSymptomsSelected, setIsSymptomsSelected] = useState(false);

    const handleSymptomChange = (selectedOption) => {
        const newSymptoms = selectedOption.map(option => option.value);
        setSelectedSymptoms(newSymptoms);
        setIsSymptomsSelected(newSymptoms.length > 0);
    }

    const ShowSelectedSymptoms = () => {
        return (
            <div className="selected-symptoms-list">
                {selectedSymptoms.map((symptom, index) => (
                    <div className="selected-symptoms-list-item" key={index}>
                        <div className="selected-symptoms-list-item-text">{symptom}</div>
                        <div className="selected-symptoms-list-item-icon">{closeIcon()}</div>
                    </div>
                ))}
            </div>
        );
    };
const handleOnClick= () =>{
    localStorage.setItem('symptoms',selectedSymptoms);
    navigate('/Prediction')
};
    let symptoms = [
        "Fever", "Cough", "Shortness of breath", "Fatigue", "Muscle or body aches", "Headache",
        "Sore throat", "Loss of taste or smell", "Congestion or runny nose", "Nausea or vomiting",
        "Diarrhea", "Chills", "Repeated shaking with chills", "Sore throat", "New loss of taste or smell",
        "Headache", "Muscle or body aches", "Fatigue", "Sore throat", "Congestion or runny nose",
        "Nausea or vomiting", "Diarrhea", "Fever", "Cough", "Shortness of breath", "Fatigue",
        "Muscle or body aches", "Headache", "Sore throat", "Loss of taste or smell", "Congestion or runny nose",
        "Nausea or vomiting", "Diarrhea", "Chills", "Repeated shaking with chills", "Sore throat",
        "New loss of taste or smell", "Congestion or runny nose", "Nausea or vomiting", "Diarrhea",
        "Headache", "Muscle or body aches", "Fatigue", "Sore throat", "Congestion or runny nose",
        "Nausea or vomiting", "Diarrhea"
    ];

    symptoms = [...new Set(symptoms)];
    symptoms = symptoms.map(symptom => ({ value: symptom, label: symptom }));

    return (
        <div className="dashboard-outer-container symptoms-input-section">
            <div className="dashboard-header">
                <div className="dashboard-header-text">
                    Enter Your Symptoms
                </div>
            </div>
            <div className="dashboard-inner-container">
                <Select
                    options={symptoms}
                    placeholder={'Select Symptoms'}
                    clearable={true}
                    isMulti
                    onChange={handleSymptomChange}
                />
                {/* Display selected symptoms */}
                {isSymptomsSelected && <ShowSelectedSymptoms />}
            </div>
            <div className="submit-symptoms-button">
                <Button
          label="Submit"
          buttonType="primary"
          handleFunction={handleOnClick}
        />
            </div>
            
        </div>
    );
}

export default SymptomsInput;
