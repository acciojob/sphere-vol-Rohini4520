function volume_sphere(event) {

    //Write your code here
  event.preventDefault();

    // Retrieve the radius from the input field
    const radiusInput = document.getElementById('radius').value;

    // Convert the input to a number
    const radius = parseFloat(radiusInput);

    // Check if the input is a valid non-negative number
    if (isNaN(radius) || radius < 0) {
        // Set the volume to 'NaN' if the input is invalid
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Round the volume to 4 decimal places
        const roundedVolume = volume.toFixed(4);

        // Display the result in the volume field
        document.getElementById('volume').value = roundedVolume;
    }
}


window.onload = function(){
	document.getElementById('MyForm').onsubmit =
		volume_sphere;
};