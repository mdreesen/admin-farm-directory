
export const FormValidation = (data: any) => {
    return !data?.data && <div style={{ color: 'red' }}>This Field Is Required</div>
};