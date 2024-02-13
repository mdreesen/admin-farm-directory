
export function Location(city: string, postalCode: string, state: string) {
    localStorage?.setItem('city', city);
    localStorage?.setItem('postalCode', postalCode);
    localStorage?.setItem('state', state);
    localStorage?.setItem('Location Enabled', 'true');
};