function startDiagnosis() {
    document.getElementById("diagnosis").scrollIntoView({
        behavior: "smooth"
    });
}


function analyzeCrop() {

    const crop = document.getElementById("cropName").value;
    const temperature = document.getElementById("temperature").value;
    const humidity = document.getElementById("humidity").value;
    const soilPH = document.getElementById("soilPH").value;
    const image = document.getElementById("cropImage").files[0];

    if (!image || !crop || !temperature || !humidity || !soilPH) {

        document.getElementById("result").innerHTML =
            "<p>Please fill all the details and upload a leaf image.</p>";

        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>🌱 Preliminary Assessment</h3>

        <p><strong>Crop:</strong> ${crop}</p>

        <p><strong>Temperature:</strong>
        ${temperature} °C</p>

        <p><strong>Humidity:</strong>
        ${humidity}%</p>

        <p><strong>Soil pH:</strong>
        ${soilPH}</p>

        <p>🤖 Your crop data has been received successfully.</p>

        <p><strong>Next step:</strong>
        AI image analysis.</p>
    `;
}