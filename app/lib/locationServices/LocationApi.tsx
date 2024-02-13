let reqCount = 0;

export async function getLocation() {

    const success = async (position: any) => {
        const { accuracy, latitude, longitude } = position?.coords;
        const permissions = await navigator?.permissions?.query({ name: "geolocation" });

        reqCount++ 
        console.log('Accuracy:', accuracy);
        console.log('Position: ', position);
        console.log('Latitude: ', latitude);
        console.log('Longitude', longitude);
        console.log('Request Count', reqCount);
        console.log('Permissions Granted: ', permissions?.state === 'granted');

        return {latitude, longitude}

    };
    const error = () => {
        console.log('Cannot find position...insert shrug here...');
        return 'Cannot find position'
    };

    if (!navigator?.geolocation) return console.log('Geolocation API is not supported in this browser');
    const permissions = await navigator?.permissions?.query({ name: "geolocation" });


    console.log('Checking location...');
    const location = navigator.geolocation.getCurrentPosition(success, error);
    const watchLocation = navigator.geolocation.watchPosition(success);
    console.log('Navigator Data', navigator)
    // console.log('Permissions', permissions);

    console.log('Permissions Granted:', permissions?.state === 'granted');
    console.log('Permissions Denied:', permissions?.state === 'denied');

    console.log('Current location', location);
    console.log('Watch location', watchLocation);
    return  { location, watchLocation }
};


export async function ipifyAPI() {
    try {
        const res = await fetch('http://ip.jsontest.com/');
        return res.json()
    } catch(error) {
        console.log(error);
        return  error;
    }

};