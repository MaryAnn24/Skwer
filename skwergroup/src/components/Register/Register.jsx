import React from 'react'

function Register({formData, setFormData}) {
  return (
    <>
        <form action="">
            <input 
                type="text" 
                placeholder='Type your company name' 
                value={formData.companyname}
                onChange={(event) => setFormData({
                    ...formData, companyname: event.target.value
                })}
                />
        </form>
    </>
  )
}

export default Register