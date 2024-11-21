export async function radarReverseCoordinates(latitude: string, longitude: string) {
    // For the Lat and Long formatting in params:
    // latitude,longitude

    try {
        const res = await fetch(`https://api.radar.io/v1/geocode/reverse?coordinates=${latitude},${longitude}`, {
            method: "GET",
            headers: {
                'Authorization': 'prj_test_pk_8e63651fe1018faea3061e36c07f050b465922da',
                "Content-Type": "application/json"
            },
        })
        return res.json();
    } catch (error) {
        console.log(error);
        return error
    }
};

export async function radarForwardCoordinates(address: any) {

    try {
        const res = await fetch(`https://api.radar.io/v1/geocode/forward?query=${address.road}+${address.city}+${address.state}`, {
            method: "GET",
            headers: {
                'Authorization': 'prj_test_pk_8e63651fe1018faea3061e36c07f050b465922da',
                "Content-Type": "application/json"
            },
        })

        return res.json();
    } catch (error) {
        console.log(error);
        return error
    }
};

export async function radarIPCoordinates() {
    // Finding per IP

    try {
        const res = await fetch(`https://api.radar.io/v1/geocode/ip`, {
            method: "GET",
            headers: {
                'Authorization': 'prj_test_pk_8e63651fe1018faea3061e36c07f050b465922da',
                "Content-Type": "application/json"
            },
        })
        return res.json();
    } catch (error) {
        console.log(error);
        return error
    }
};